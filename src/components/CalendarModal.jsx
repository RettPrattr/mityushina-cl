import { useState, useEffect, useContext } from 'react'
import useWindowDimensions from './hooks/useWindowDimensions'
import moment from 'moment-timezone'
import createPayment from './utils/createPayment'
import { AllContexts } from './context/Context'
import { parse } from 'url'
import { useRouter } from 'next/router'
import toDateTimeFormat from './utils/toDateTimeFormat'
import increaseTimeByMinutes from './utils/increaseTimeByMinutes'
import createCalendarEvent from './utils/createGoogleEvent'
import { createMeeting } from './utils/createZoomMeeting'
import axios from 'axios'
import sendEmail from './utils/sendEmail'
import deleteDate from './utils/deleteDate'

const title = "Консультация"
const bottomText = "Если не сможете определиться со временем сейчас, вы сможете вернуться к выбору в любой момент не позднее, чем за 24 часа до сессии, перейдя по ссылке из письма отправленного вам на почту"
const dateChoiceText = "Выберите дату"
const timeChoiceText = "Выберите время"


function compareTime(timeA, timeB) {
    const [hoursA, minutesA] = timeA.split(":").map(Number);
    const [hoursB, minutesB] = timeB.split(":").map(Number);
  
    if (hoursA === hoursB) {
      return minutesA - minutesB;
    } else {
      return hoursA - hoursB;
    }
}


function isLessThan24HoursLeft(targetDateTime) {
    const targetDate = new Date(targetDateTime);

    const currentDate = new Date();

    const timeDiff = targetDate - currentDate;
  
    const hoursDiff = timeDiff / (1000 * 60 * 60);
  
    if (hoursDiff < 24) {
      return false;
    } else {
      return true;
    }
}


const CalendarModal = () => {
    
    const [availableDates, setAvailableDates] = useState([])
    const [duration, setDuration] = useState()
    const [format, setFormat] = useState()
    const [cost, setCost] = useState()

    const router = useRouter()

    const {isActive, setIsActive, order, setOrder} = useContext(AllContexts)
    
    useEffect(() => {
        (async () => {
            const datesResponse = await fetch(`${process.env.API_LINK}/api/time-availables`)
            const datesResult = await datesResponse.json()
            const datesData = datesResult.data
            
            const availableDatesAndTimes = {};

            datesData.forEach((item) => {
                if (!isLessThan24HoursLeft(item.attributes.dateTime)) {return}
                const dateTime = moment.utc(item.attributes.dateTime).tz('Europe/Moscow').format('YYYY-MM-DD HH:mm:ss')
                const date = dateTime.split(' ')[0];
                const time = dateTime.split(' ')[1].slice(0, 5);

                if (availableDatesAndTimes[date]) {
                    availableDatesAndTimes[date].push(time);
                } else {
                    availableDatesAndTimes[date] = [time];
                } 
            });

            // Преобразуем объект в массив старого формата данных
            const availableDateAndTime = Object.keys(availableDatesAndTimes).map((date) => ({
                date,
                time: availableDatesAndTimes[date],
            }));
            
            availableDateAndTime.forEach((obj) => {
                obj.time.sort(compareTime)
            })

            setAvailableDates(availableDateAndTime)
            setDuration(order.tariff.duration)
            setCost(order.tariff.price)
            setFormat(order.tariff.subtitle === "Офлайн" ? "Офлайн" : "Zoom")
          })()
    }, [])

    // Функция проверка даты на доступность
    const isDateDisabled = (date) => {
        const dateString = date.toISOString().split('T')[0];
        return !availableDates.some(item => item.date === dateString)
    };

    // Вывод доступного времени по выбранным данным
    const getSelectedDateTimes = (selectedYear, selectedMonth, selectedDay) => {
        const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
        const selectedDateString = selectedDate.toISOString().split('T')[0];
        const selectedDateTime = availableDates.find(item => item.date === selectedDateString)
        if (selectedDateTime) return selectedDateTime.time; 
        return []
    }

    const [width] = useWindowDimensions();

    const staticRealMonth = new Date().getMonth();
    const staticRealYear = new Date().getFullYear();

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Выбранные даты
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedTime, setSelectedTime] = useState(null);

    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const outMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const years = [staticRealYear, staticRealYear+1, staticRealYear+2]

    // Для виджета на мобилки
    const [isOpen, setIsOpen] = useState(false);

    const submitClick = () => {

        // Перезапись
        if (order.eventId) {
            console.log({...order, time: selectedTime, day: selectedDay, month: selectedMonth, year: selectedYear })
            setOrder({...order, time: selectedTime, day: selectedDay, month: selectedMonth, year: selectedYear })
            let sendingDate = new Date(toDateTimeFormat(selectedYear, selectedMonth+1, selectedDay, selectedTime)).toISOString()
            let endDate = new Date(toDateTimeFormat(selectedYear, selectedMonth+1, selectedDay, increaseTimeByMinutes(selectedTime, parseInt(duration)))).toISOString()
            if (format === 'Zoom') {
                createMeeting(toDateTimeFormat(selectedYear, selectedMonth+1, selectedDay, selectedTime), parseInt(duration))
                .then(data => { 
                    createCalendarEvent(`Консультация`, `${format}: ${data[0]}`, sendingDate, endDate).then(result => {
                        axios.put(`${process.env.API_LINK}/api/orders/${order.id}`, {data: {eventId: result, date: sendingDate}})
                        deleteDate(sendingDate, order.date);
                        try {axios.delete("api/calendar", {data: {prevEventId: order.eventId}})}
                        catch(error) {}
                    });
                    sendEmail(data[1], order.email, duration, format, cost, `${selectedDay} ${outMonths[selectedMonth]} в ${selectedTime}`, `https://mityushina.ru/?key=${order.uid}&consultation=true`)
                })
            }
            else {
                createCalendarEvent(`Консультация`, `${format}`, sendingDate, endDate);
                sendEmail('off', order.email, duration, format, cost, `${selectedDay} ${outMonths[selectedMonth]} в ${selectedTime}`, `https://mityushina.ru/?key=${order.uid}&consultation=true`)
                deleteDate(sendingDate, order.date);
            }
            
            setIsActive(false)
            router.push('/?payment=true')
        } 

        // Первоначальная запись
        else {
            setOrder((prev) => { return {...prev, time: selectedTime, day: selectedDay, month: selectedMonth, year: selectedYear, }})

            createPayment(parseInt(order.tariff.price.replace(/[^\d]/g, '')), order.uid, order.name, order.phoneNumber.replace(/\D/g, ''), order.tariff, order.email).then(token => {
                setIsActive(false)
                router.push(`/payment?confirmation_token=${token}&uid_key=${order.uid}`)
            }).catch(error => {
                console.error(error)
            })
        }
    }

    const changeMonth = (amount) => {
        setCurrentMonth((prevMonth) => {
            if (prevMonth + amount < 0) {
                setCurrentYear(currentYear - 1);
                return 11;
            }
            else if (prevMonth + amount > 11) {
                setCurrentYear(currentYear + 1);
                return 0;
            }
            return prevMonth + amount
        });
    };

    const getDaysInMonth = (month, year) => {return new Date(year, month + 1, 0).getDate();};

    const getFirstDayOfWeek = (month, year) => {return new Date(year, month, 1).getDay();};

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDayOfWeek = getFirstDayOfWeek(currentMonth, currentYear);
        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            const isDisabled = isDateDisabled(new Date(currentYear, currentMonth, i+1));
            days.push(
                <td key={i}>
                    <div className={'calendarDay ' + ((selectedDay === i && selectedMonth === currentMonth && !isDisabled) ? 'active ': '') + (isDisabled ? 'disable' : 'cursor-pointer')}>
                    <span
                    onClick = {(!isDisabled) ? () => {setSelectedDay(i); setSelectedMonth(currentMonth); setSelectedYear(currentYear); setSelectedTime(null); setIsOpen(!isOpen)} : null}>
                        {i}
                    </span>
                    </div>
                </td>
            );
        }

        const blanks = [];
        for (let i = 1; i < firstDayOfWeek; i++) {
            blanks.push(
                <td key={`blank_${i}`}>
                    <div className='calendarDay disable'>
                        <span>
                            {getDaysInMonth(currentMonth - 1, currentYear) - firstDayOfWeek + i + 1}
                        </span>
                    </div>
                </td>);
        }

        const remainingSlots = 42 - days.length - blanks.length;
        const nextMonthDays = [];
        for (let i = 1; i <= remainingSlots; i++) {
            const isDisabled = isDateDisabled(new Date(currentYear, currentMonth+1, i+1));
            nextMonthDays.push(
                <td key={`next_month_${i}`}>
                    <div className={'calendarDay ' + ((selectedDay === i && selectedMonth === currentMonth+1 && !isDisabled) ? 'active ': '') +(isDisabled ? 'disable' : 'cursor-pointer')}>
                        <span
                        onClick = {(!isDisabled) ? () => {setSelectedDay(i); setSelectedMonth(currentMonth+1); setSelectedYear(currentYear); setSelectedTime(null); setIsOpen(!isOpen)} : null}>
                            {i}
                        </span>
                    </div>
                </td>
            );
        };
        const totalSlots = [...blanks, ...days, ...nextMonthDays];
        const rows = [];
        let cells = [];

        totalSlots.forEach((slot, index) => {
            if (index % 7 !== 0) {
                cells.push(slot);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(slot);
            }

            if (index === totalSlots.length - 1) {
                rows.push(cells);
            }
        });


        return rows.map((row, index) => <tr key={index}>{row}</tr>);
    };

    if (order.eventId && !isLessThan24HoursLeft(order.date)) {
        return (
            <div className={"modal " + (isActive ? 'active' : '')} id='calendarModal'>
                <div className="modalContainer">
                    <div className="modalNotAvailable">
                        Смена даты и времени записи недоступна <br/>(осталось менее чем 24 часа до начала сессии)
                    </div>
                    {width > 800 ? 
                    <div className="closeButton cursor-pointer" onClick={() => {setIsActive(false)}}>
                    <svg width="41" height="41" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 5.5L5.5 14.5M14.5 14.5L5.5 5.5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    </div> : <div className="flex justify-center items-center"><a className="mainLink" href="https://mityushina.ru/">На главную</a></div>}
                </div>
            </div>
        )
    }

    return (
        <>
        {isActive &&
        <div className="modal active" id='calendarModal'>
            <div className="modalContainer">
                <div className={width > 800 ? "flex flex-row" : ""}>
                    <div className={width > 800 ? "w-half" : ''}>
                        <div className="modalTitle">{title}</div>
                        {width > 800 ? <div className="heroImageModal"><img src="/images/heroImage.jpg" alt=""/></div> : ''}
                        <div className="modalDataContainer">
                            <div className="modalData">
                                <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9" fill="currentColor" />
                                    <line x1="10" y1="10" x2="10" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="10" y1="10" x2="14" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span>{duration}</span>
                            </div>
                            <div className="modalData">
                                {format !== 'Zoom' ? 
                                <svg fill="currentColor" width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z"/>
                                    <path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z"/>
                                    <path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z"/>
                                    <path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z"/>
                                </g>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="23 7 16 12 23 17 23 7" />
                                    <rect x="2" y="5" width="15" height="14" rx="2" ry="2" />
                                </svg> }
                                <span>{format}</span>
                                </div>
                            <div className="modalData">
                                <svg width="25" height="25" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4z"/>
                                    <path fillRule="evenodd" d="M0 7v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3z"/>
                                </svg>
                                <span>{order.eventId ? "Оплачено" : "К оплате"} {cost}</span>
                            </div>
                        </div>
                        {width > 800 ? <div className="bottomText">{bottomText}</div> : ''}
                    </div>

                    <div className={width > 800 ? "w-half" : ''}>
                        <div className="dateChoiceText"><span>{dateChoiceText}</span></div>
                        { width < 800 && !isOpen ? 
                        <div className='calendar flex flex-column w-half' onClick={() => {setIsOpen(!isOpen)}}>
                            <div className='w-full flex items-center calendarWidget'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" width="25" height="25" viewBox="0 0 24 24">
                                    <path d="M 13 10 M 17 10 V 10 M 19 3 A 2 2 0 0 1 21 5 V 19 A 2 2 0 0 1 19 21 H 5 C 3.89 21 3 20.1 3 19 V 5 A 2 2 0 0 1 5 3 H 6 V 1 H 8 V 3 H 16 V 1 H 18 V 3 H 19 M 19 19 V 7 H 5 V 19 H 19 V 16 V 16 M 17 14 V 14 Z M 5 7 L 5 9 L 19 9 L 19 7 L 5 7 L 19 7 L 19 6 A 1 1 0 0 0 18 5 L 6 5 A 1 1 0 0 0 5 6 L 5 7" />
                                </svg>
                                <span>{selectedDay ? `${selectedDay} ${outMonths[selectedMonth]} ${selectedYear}`: 'Выбрать дату'}</span>
                            </div>
                        </div> : 
                        <div className="calendar">
                            { width > 800 ?
                            <div className="calendarTop">
                                <div className='currentDate'>
                                    {months[currentMonth]} {currentYear}
                                </div>
                                <div className='dateButtons'>
                                    <svg onClick={currentMonth>staticRealMonth || currentYear > staticRealYear ? () => changeMonth(-1) : null} 
                                    className={currentMonth > staticRealMonth || currentYear > staticRealYear ? 'cursor-pointer' : ''}
                                    xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24" fill="none"
                                    stroke={currentMonth > staticRealMonth || currentYear > staticRealYear ? "currentColor" : '#D0D0D0'} strokeWidth="1" strokeLinecap="round" 
                                    strokeLinejoin="round">
                                        <path d="M15 18l -7-7 7-7"/>
                                    </svg>
                                    <svg onClick={() => {changeMonth(1)}} className='cursor-pointer'
                                    xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24"
                                    fill="none" stroke="#494646" strokeWidth="1" strokeLinecap="round" 
                                    strokeLinejoin="round">
                                        <path d="M9 18l 7-7-7-7"/>
                                    </svg>
                                </div> 
                            </div> :
                            <div className='calendarTop'>
                                <div className='dateButtons'>
                                    <svg onClick={currentMonth > staticRealMonth || currentYear > staticRealYear ? () => changeMonth(-1) : null} 
                                    className={currentMonth > staticRealMonth || currentYear > staticRealYear ? 'cursor-pointer' : ''}
                                    xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
                                    stroke={currentMonth > staticRealMonth || currentYear > staticRealYear ? "#494646" : '#D0D0D0'} strokeWidth="1" strokeLinecap="round" 
                                    strokeLinejoin="round">
                                        <path d="M15 18l -7-7 7-7"/>
                                    </svg>
                                </div>
                                <div className='currentDate'>
                                    <select value={currentMonth} onChange={(event) => setCurrentMonth(Number(event.target.value))}>
                                        {months.map((month, index) => 
                                        <option key={index} value={index} disabled={index >= staticRealMonth || currentYear > staticRealYear ? '': 'disabled'}>{month}</option>)}
                                    </select>
                                </div>
                                <div className='currentDate'>
                                    <select value={currentYear} onChange={(event) => setCurrentYear(Number(event.target.value))}>
                                        {years.map((year, index) =>
                                        <option key={index} value={year}>{year}</option>)}
                                    </select>
                                </div>
                                <div className='dateButtons'>
                                    <svg onClick={() => {changeMonth(1)}} className='cursor-pointer'
                                    xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24"
                                    fill="none" stroke="#494646" strokeWidth="1" strokeLinecap="round" 
                                    strokeLinejoin="round">
                                        <path d="M9 18l 7-7-7-7"/>
                                    </svg>
                                </div>
                            </div>
                            }
                            <div className='calendarTable'>
                                <table>
                                    <thead>
                                        {width > 800 ? 
                                        <tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr> 
                                        : <tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>}
                                    </thead>
                                    <tbody>
                                        {renderCalendar()}
                                    </tbody>
                                </table>
                            </div>
                        </div> }
                        { selectedDay &&
                        <div className="dateChoiceText">
                            {timeChoiceText}<br/>
                            <div className="timeButtons">
                            {getSelectedDateTimes(selectedYear, selectedMonth, selectedDay+1).map((time, index) => (
                            <button key={index} className={"timeButton cursor-pointer " + (selectedTime === time ? 'active' : '')} onClick={() => {setSelectedTime(time)}}>{time}</button>
                            ))}</div> 
                            {selectedTime && 
                                <div className='submitContent'>
                                    {/* Итоговые данные. Выбранный год - selectedYear. */}
                                    { width > 800 ? 
                                        <div className='selectedData'>{selectedDay} {outMonths[selectedMonth]} в {selectedTime}</div> : 
                                        <div className='selectedData flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" width="30" height="40" viewBox="0 0 24 24">
                                                <path d="M 9 10 V 12 H 7 V 10 H 9 M 13 10 V 12 H 11 V 10 H 13 M 17 10 V 12 H 15 V 10 H 17 M 19 3 A 2 2 0 0 1 21 5 V 19 A 2 2 0 0 1 19 21 H 5 C 3.89 21 3 20.1 3 19 V 5 A 2 2 0 0 1 5 3 H 6 V 1 H 8 V 3 H 16 V 1 H 18 V 3 H 19 M 19 19 V 8 H 5 V 19 H 19 V 16 V 16 M 17 14 V 14 Z" />
                                            </svg>
                                            <span>{selectedDay} {outMonths[selectedMonth]} в {selectedTime}</span>
                                        </div>
                                    }
                                    <div className="flex items-center justify-center"><button className='cursor-pointer' onClick={submitClick}>{order.eventId ? 'Записаться' : "Оплатить"}</button></div> 
                                </div>
                            }
                        </div> }
                        {width < 800 ? <div className="bottomText">{bottomText}</div> : ''}
                    </div>

                </div>
                {width > 800 ? 
                <div className="closeButton cursor-pointer" onClick={() => {setIsActive(false); router.push('/')}}>
                    <svg width="41" height="41" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 5.5L5.5 14.5M14.5 14.5L5.5 5.5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                </div> : ''}
            </div>
        </div>
        }
        </>
    )
}
export default CalendarModal
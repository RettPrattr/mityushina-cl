import useWindowDimensions from './hooks/useWindowDimensions'
import {atcb_action} from 'add-to-calendar-button'
import increaseTimeByMinutes from './utils/increaseTimeByMinutes'
import { useContext, useEffect, useState } from 'react'
import { AllContexts } from './context/Context'
import { useRouter } from 'next/router'

const title1 = "Вы записаны"
const bottomText = "Если не сможете определиться со временем сейчас, вы сможете вернуться к выбору в любой момент не позднее, чем за 24 часа до сессии, перейдя по ссылке из письма отправленного вам на почту"

const ResultModal = () => {

    const [width] = useWindowDimensions();
    
    const {order} = useContext(AllContexts)
    const [isModalActive, setIsModalActive] = useState(true)

    const router = useRouter()


    // Для добавления в календарь
    const date = new Date (order.year, order.month, order.day)
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    const config = {
        name: 'Консультация с Натальей Митюшиной',
        options: ['Apple|Добавить в Apple календарь', 'Google|Добавить в Google календарь', 'Microsoft365|Добавить в Microsoft365 календарь', 'MicrosoftTeams|Добавить в MicrosoftTeams календарь', 'iCal|Сформировать iCal-файл'],
        startDate: formattedDate,
        startTime: order.time,
        endTime: increaseTimeByMinutes(order.time, parseInt(order.tariff.duration)),
        timeZone: "currentBrowser"
    };

    const outMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    return (
        <div className={"modal " + (isModalActive ? 'active' : '')}>
            <div className="modalContainer result flex flex-col">
                {width > 800 ? <>
                <div className="modalTitle">
                    {title1}
                </div>
                <div className="dateChoiceText margin-top-60 pre-wrap">
                    <span>{`На ${order.tariff.subtitle !== 'Офлайн' ? `онлайн` : `офлайн`} сессию\nс Натальей Митюшиной`}</span>
                </div>
                <div className='dateChoiceText'>
                    <div className='submitContent resultMargin'>
                            <div className='selectedData resultContent'>
                                {order.day} {outMonths[order.month]} в {order.time}
                            </div>
                    </div>
                </div> 
                <div className='addToCalendar cursor-pointer'>
                    <span onClick={() => {atcb_action(config)}}>Добавить в календарь</span>
                </div> </>:
                <div className='dateChoiceText mobile pre-wrap'>
                    {`Вы записаны на\n${order.tariff.subtitle !== 'Офлайн' ? `онлайн` : `офлайн`} сессию\nс Натальей\nМитюшиной`}
                </div>}

                <div className="modalDataContainer resultData">
                            <div className="modalData">
                                <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9" fill="#494646" />
                                    <line x1="10" y1="10" x2="10" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="10" y1="10" x2="14" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span>{order.tariff.duration}</span>
                            </div>
                            <div className="modalData">
                                { order.tariff.subtitle !== 'Офлайн' ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#494646" stroke="#494646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="23 7 16 12 23 17 23 7" />
                                    <rect x="2" y="5" width="15" height="14" rx="2" ry="2" />
                                </svg>
                                <span>Zoom <a href={order.zoomLink}>(ссылка)</a></span> </>
                                :
                                <>
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
                                <span>Офлайн</span>
                                </>
                                }
                                </div>
                            <div className="modalData">
                                <svg width="25" height="25" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4z"/>
                                    <path fillRule="evenodd" d="M0 7v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3z"/>
                                </svg>
                                <span>Оплачено {order.tariff.price}</span>
                            </div>
                            {width < 800 ? 
                            <div className='modalData'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#494646" version="1.1" id="mdi-calendar-month" width="25" height="25" viewBox="0 0 24 24">
                                    <path d="M 9 10 V 12 H 7 V 10 H 9 M 13 10 V 12 H 11 V 10 H 13 M 17 10 V 12 H 15 V 10 H 17 M 19 3 A 2 2 0 0 1 21 5 V 19 A 2 2 0 0 1 19 21 H 5 C 3.89 21 3 20.1 3 19 V 5 A 2 2 0 0 1 5 3 H 6 V 1 H 8 V 3 H 16 V 1 H 18 V 3 H 19 M 19 19 V 8 H 5 V 19 H 19 V 16 V 16 M 17 14 V 14 Z" />
                                </svg>
                                <span>{order.day} {outMonths[order.month]} в {order.time}</span>
                            </div>: ''}
                </div>
                {width > 800 ? 
                <div className="bottomText lessWidth">{bottomText}</div> : 
                <>
                    <div className='addToCalendar'>
                        {/* <span onClick={() => {atcb_action(config)}}>Добавить в календарь</span> */}
                    </div>
                    <div className='mobileBottomText'>{bottomText}</div>

                    </>}
                {width > 800 ? 
                <div className="closeButton cursor-pointer" onClick={() => {setIsModalActive(!isModalActive); router.push('/')}}>
                    <svg width="41" height="41" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 5.5L5.5 14.5M14.5 14.5L5.5 5.5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                </div> : ''}
            </div>
        </div>
    )
}

export default ResultModal
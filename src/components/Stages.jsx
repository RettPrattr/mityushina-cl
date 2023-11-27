import React, { useState, useEffect, useContext } from 'react'
import { motion, useScroll } from "framer-motion";
import useWindowDimensions from './hooks/useWindowDimensions'
import Translate from './animations/Translate'
import Fade from './animations/Fade'

// const StagesList = [
//     {
//         number: '1 этап',
//         name: 'Диагностика спортсмена',
//         description: 'Описание',
//         duration: '1 встреча, 60 минут',
//         format: 'Беседа + проективные тесты',
//         text: 'Регулярная работа со спортсменом общим периодом от 3-х месяцев. При работе с юными спортсменами младше 12 лет, проводятся повторные сессии с родителями один раз в 2 месяца. На повторных встречах психолог получает обратную связь от наблюдателей процесса, чтобы при необходимости вовремя скорректировать план работ.',
//         remarkText: 'Длительность сессий и общий период работы зависит от индивидуальных факторовмоционального состояния спортсмена, его психического и психофизиологического развития, оценка психогенетической предрасположенности и уровня ментальный подготовленности.',
//         remarkStar: ''
//     },
//     {
//         number: '2 этап',
//         name: 'Сессия с родителями по итогам диагностики',
//         description: 'Описание',
//         duration: '1 встреча, 60 минут',
//         format: 'Беседа + проективные тесты',
//         text: 'Регулярная работа со спортсменом общим периодом от 3-х месяцев. При работе с юными спортсменами младше 12 лет, проводятся повторные сессии с родителями один раз в 2 месяца. На повторных встречах психолог получает обратную связь от наблюдателей процесса, чтобы при необходимости вовремя скорректировать план работ.',
//         remarkText: 'Длительность сессий и общий период работы зависит от индивидуальных факторовмоционального состояния спортсмена, его психического и психофизиологического развития, оценка психогенетической предрасположенности и уровня ментальный подготовленности.',
//         remarkStar: ''
//     },
//     {
//         number: '3 этап',
//         name: 'Работа со спортсменом',
//         description: 'Описание',
//         duration: '1 встреча, 60 минут',
//         format: 'Беседа',
//         text: 'Регулярная работа со спортсменом общим периодом от 3-х месяцев. При работе с юными спортсменами младше 12 лет, проводятся повторные сессии с родителями один раз в 2 месяца. На повторных встречах психолог получает обратную связь от наблюдателей процесса, чтобы при необходимости вовремя скорректировать план работ.',
//         remarkText: 'Длительность сессий и общий период работы зависит от индивидуальных факторовмоционального состояния спортсмена, его психического и психофизиологического развития, оценка психогенетической предрасположенности и уровня ментальный подготовленности.',
//         remarkStar: ''
//     },
//     // {
//     //     number: 'этап',
//     //     name: 'Название',
//     //     description: 'Описание',
//     //     duration: '1 встреча, 60-90 минут',
//     //     format: 'Беседа + тесты',
//     //     text: 'Регулярная работа со спортсменом общим периодом от 3-х месяцев. При работе с юными спортсменами младше 12 лет, проводятся повторные сессии с родителями один раз в 2 месяца. На повторных встречах психолог получает обратную связь от наблюдателей процесса, чтобы при необходимости вовремя скорректировать план работ.',
//     //     remarkText: 'Длительность сессий и общий период работы зависит от индивидуальных факторовмоционального состояния спортсмена, его психического и психофизиологического развития, оценка психогенетической предрасположенности и уровня ментальный подготовленности.',
//     //     remarkStar: ''
//     // },
// ]


// const title = 'Этапы работы'

const Stages = (props) => {

    const { title, StagesList } = props

    const [width] = useWindowDimensions()

    const [currentStages, setCurrentStages] = useState(StagesList)
    const [format, setFormat] = useState('Онлайн')



    // const switchFormat = (format, arr) => {
    //     const newArr = arr.filter(f => f.format === format)
    //     setCurrentStages(newArr)
    // }

    const clickStage = (s, i) => {
        const texts = document.getElementById(`texts-${i}`)
        const stageArrow = document.getElementById(`stageArrow-${i}`)

        if (texts.classList.contains('active')) { texts.classList.remove('active') } else { texts.classList.add('active') }
        if (stageArrow.classList.contains('open')) { stageArrow.classList.remove('open') } else { stageArrow.classList.add('open') }

    }


    // useEffect(() => {
    //     switchFormat('Онлайн', stages)
    // }, [])

    return (
        <section className='stages cd10 cm4 container'>
            <div className="flex flex-col w-full">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                {/* {width > 800 ? <div 
            className={"switchBtn-container flex items-center cb-mid mb" + ( format === 'Онлайн' ? ' online ' : ' offline ')}
          >
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }} 
                transition={{ duration: .2 }}
                className={'switchIcon' + (format === 'Онлайн' ? ' online ' : ' offline ')}
            >
                <div className="flex w-full flex-row justify-between">
                        <div onClick={() => {setFormat('Онлайн'); switchFormat('Онлайн', stages)}} className={" cb-mid " + (format === 'Онлайн' ? ' switched-on ' : ' switched-off ')}>
                            <p сlassName=''>Онлайн</p>
                        </div>
                        <div onClick={() => {setFormat('Офлайн'); switchFormat('Офлайн', stages)}} className={" cb-mid " + (format === 'Онлайн' ? ' switched-off ' : ' switched-on ')}>
                            <p сlassName=''>Офлайн</p>
                        </div>
                    </div>
            </motion.div>
          </div> : ' '} */}

                <div className="stages-container flex h-fit flex-col w-full">
                    {currentStages?.map((s, i) => {
                        return <Translate
                            fromX="0"
                            toX="0"
                            fromY="40%"
                            toY="0"
                            duration=".25"
                            delay={i * 0.08 + 0.08}
                            threshold='0'
                            className=""
                            key={i}
                        >
                            <Fade
                                threshold='0'
                                duration='.25'
                                from={0}
                                to={1}
                                delay={i * 0.08}
                            >
                                <motion.div className="flex flex-col">
                                    <div onClick={() => clickStage(s, i)} className={"stageItem w-full flex  mbs" + (width > 800 ? ' flex-col ' : ' flex-col ')}>
                                        <div className={"top flex justify-between " + (width > 800 ? ' flex-row items-center ' : ' flex-col items-start  ')}>
                                            <p className={"number" + (width > 800 ? ' ' : ' mb')}>{s.number}</p>
                                            <div className={"flex name-container flex-row w-full" + (width > 800 ? '' : ' justify-between items-start ')}>
                                                <p 
                                                    className={"name" + (width > 800 ? ' ' : ' mbs')}
                                                    dangerouslySetInnerHTML={{ __html: s.name }}>
                                                </p>
                                                {width < 800 ?
                                                    <motion.div
                                                        variants={{
                                                            open: { rotate: 180 },
                                                            closed: { rotate: 0 }
                                                        }}
                                                        transition={{ duration: 0.2 }}
                                                        style={{ originY: 0.55 }}
                                                        className={'cb-mid stageArrow stageArrow-' + i}
                                                        id={'stageArrow-' + i}
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 8L9.79487 15L2 8" stroke="#494646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </motion.div> : ''}
                                            </div>
                                            {width > 800 ? <div className="info flex flex-col">
                                                    <div className="flex flex-row items-start">
                                                        <p className='infoDuration'>{s.duration}</p>
                                                        {i === 2 ?                     
                                                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3 1.10327L3.29624 1.68594L3.46909 2.02593L3.84267 1.94909L4.48292 1.81741L4.21207 2.41231L4.05403 2.75942L4.34703 3.0036L4.84918 3.42206L4.21519 3.58121L3.84527 3.67408L3.83705 4.05539L3.82296 4.7089L3.30325 4.31246L3 4.08114L2.69675 4.31246L2.17704 4.7089L2.16295 4.05539L2.15473 3.67408L1.78481 3.58121L1.15082 3.42206L1.65297 3.0036L1.94597 2.75942L1.78793 2.41231L1.51707 1.81741L2.15733 1.94909L2.53091 2.02593L2.70376 1.68594L3 1.10327Z" fill="#494646" stroke="#494646"/>
                                                        </svg> : ''}
                                                    </div>
                                                <p>{s.format}</p>
                                            </div> : ''}
                                            {width > 800 ?
                                                <motion.div
                                                    variants={{
                                                        open: { rotate: 180 },
                                                        closed: { rotate: 0 }
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                    style={{ originY: 0.55 }}
                                                    className={'cb-mid stageArrow stageArrow-' + i}
                                                    id={'stageArrow-' + i}
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 8L9.79487 15L2 8" stroke="#494646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </motion.div> : ''}
                                        </div>
                                        <div id={'texts-' + i} className={"texts mt flex flex-col texts-" + i}>
                                            <p 
                                                className="text"
                                                dangerouslySetInnerHTML={{ __html: s.text }}>
                                            </p>
                                            {i === 2 ? <div className={"remarkText flex flex-row" + (width > 800 ? ' mts ' : ' mt ')}>
                                                <div className="remarkSvg">
                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.5 1.10327L6.41452 2.90206L6.58737 3.24205L6.96096 3.16521L8.9375 2.75868L8.10134 4.59521L7.9433 4.94233L8.2363 5.1865L9.7865 6.47836L7.8293 6.96969L7.45938 7.06255L7.45116 7.44387L7.40767 9.46132L5.80325 8.23746L5.5 8.00614L5.19675 8.23746L3.59233 9.46132L3.54884 7.44387L3.54062 7.06255L3.1707 6.96969L1.2135 6.47836L2.7637 5.1865L3.0567 4.94233L2.89866 4.59521L2.0625 2.75868L4.03904 3.16521L4.41263 3.24205L4.58548 2.90206L5.5 1.10327Z" fill="#494646" stroke="#494646" />
                                                    </svg>
                                                </div>
                                                
                                                <p className=''>{s.remarkText}</p>
                                            </div> : ''}
                                            {width > 800 ? '' : <div id={'info-' + i} className="info flex flex-col mt">
                                                    <div className="flex flex-row items-start">
                                                        <p className='infoDuration'>{s.duration}</p>
                                                        {i === 2 ?                     
                                                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3 1.10327L3.29624 1.68594L3.46909 2.02593L3.84267 1.94909L4.48292 1.81741L4.21207 2.41231L4.05403 2.75942L4.34703 3.0036L4.84918 3.42206L4.21519 3.58121L3.84527 3.67408L3.83705 4.05539L3.82296 4.7089L3.30325 4.31246L3 4.08114L2.69675 4.31246L2.17704 4.7089L2.16295 4.05539L2.15473 3.67408L1.78481 3.58121L1.15082 3.42206L1.65297 3.0036L1.94597 2.75942L1.78793 2.41231L1.51707 1.81741L2.15733 1.94909L2.53091 2.02593L2.70376 1.68594L3 1.10327Z" fill="#494646" stroke="#494646"/>
                                                        </svg> : ''}
                                                    </div>
                                                <p>{s.format}</p>
                                            </div>}
                                        </div>
                                    </div>
                                </motion.div>
                            </Fade>
                        </Translate>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stages


{/* <motion.div
onHoverStart={() => toggleHover(true)}
onHoverEnd={() => toggleHover(false)}
className='header__menu-container'
>
<motion.button
    // whileTap={{ scale: 0.97 }}
    animate={isHover ? "open" : "closed"}
    >
    <a id="services" className="header__menu-item">
        {headerData?.data.attributes.headerLinks[4].title}
    </a>
    <motion.div
        variants={{
        open: { rotate: 180 },
        closed: { rotate: 0 }
        }}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
    >
        <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.98681 8.92392C10.1193 8.91019 10.2446 8.85592 10.3467 8.76852L18.7619 1.53126L18.7618 1.5311C18.8974 1.41515 18.9822 1.24887 18.9975 1.06888C19.0128 0.888886 18.9573 0.709974 18.8432 0.571921C18.7292 0.43388 18.5659 0.347744 18.3896 0.332913C18.2134 0.317926 18.0385 0.375194 17.9037 0.492251L9.91753 7.362L1.93139 0.49225C1.79654 0.375193 1.62168 0.317925 1.44542 0.332912C1.26917 0.347741 1.10589 0.433878 0.991881 0.57192C0.877726 0.70996 0.822268 0.88886 0.837563 1.06888C0.85286 1.24889 0.937659 1.41516 1.07329 1.5311L9.48849 8.76836C9.62706 8.88731 9.80698 8.94348 9.98681 8.92392Z" fill="white"/>
        </svg>

    </motion.div>
</motion.button>
<motion.div
    className="sub-menu"
    initial="exit"
    animate={isHover ? "enter" : "exit"}
    variants={subMenuAnimate}
>
    <div className="sub-menu-background" />
    <div className="sub-menu-container flex flex-col">
        {servicesData?.data.map((s, i) => {
            return <Link 
                        key={i} 
                        href={{ pathname: `/uslugi/${s.attributes.link}`}} 
                        // as={`/uslugi/${s.attributes.link}`} 
                        className="sub-menu-item mbs">{s.attributes.Title}
                    </Link>
        })}

    </div>
</motion.div>
</motion.div> */}
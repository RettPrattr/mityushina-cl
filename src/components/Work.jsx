import useWindowDimensions from './hooks/useWindowDimensions'
import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '../components/atoms/Button'
import findImageUrl from './utils/findImageUrl'
import MenuItem from './MenuItem';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Translate from './animations/Translate'
import Fade from './animations/Fade'
import Link from 'next/link'

// const title1 = "Работа со спортивным"
// const title2 = "психологом помогает"
// const Theses = [
//     {
//         id: '1',
//         name: 'атлету',
//         // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus volutpat mollis. Suspendisse luctus nibh eu maximus pulvinar. Sed bibendum augue et accumsan accumsan. Proin.',
//         points: ['ставить цели и достигать их', 'предотвратить демотивацию в кризисные периоды карьеры', 'выстроить правильную коммуникацию с наставниками (тренеры, учителя, родители)', 'безболезненно разрешать конфликтные ситуации внутри команды или в других жизненных обстоятельствах', 'диагностировать неблагоприятные предстартовые состояния, справляться со стрессом и показывать максимальный результат', 'переживать неминуемые поражения в спорте и находить мотивацию двигаться дальше']
//     },
//     {
//         id: '2',
//         name: 'родителю',
//         // description: 'Описание 2',
//         points: ['найти подход к ребёнку, чтобы оказывать моральную поддержку в сложных спортивных и жизненных обстоятельствах', 'выстроить правильный график физической и интеллектуальной нагрузки исходя из специфики деятельности ребёнка', 'сохранить ментальное здоворовье ребёнка на протяжении всей его спортивной карьеры', 'подсказать ребёнку как наладить коммуникацию в рабочем коллективе', 'вырастить не просто успешного спортсмена, а полноценную личность']
//     },

// ]


const Work = (props) => {

    const { title, title1, title2, t1name, t2name, t1points, t2points } = props


    const [isShowMore, setShowMore] = useState(false)
    const [isShowMore2, setShowMore2] = useState(false)
    const [active, setActive] = useState()


    const showMoreFunc = (boolean, i) => {
        //console.log(boolean, i, "BOOOO")
        i === 0 ? setShowMore(!boolean) : setShowMore2(!boolean)
        setActive(i)
        if (document) {
            const hiddenStages = document.querySelectorAll(`.show-hide-${i}`)
            // console.log(hiddenStages, "HIDDEN")
        }
        // boolean ? hiddenStages.classList.remove('hidden') : hiddenStages.classList.add("hidden")
    }

    const [width, height] = useWindowDimensions();


    return (
        <section id="format" className='work cd10 cm4 container relative flex flex-col'>
            {width > 800 ? <div className="title cd8 cm4 pl0 pr0 flex flex-col">
                <h2 className='title1'>{title1}</h2>
                <h2 className='title2'>{title2}</h2>
            </div> : <div className="title cd8 cm4 pl0 pr0 flex flex-col">
                <div className='title'
                    dangerouslySetInnerHTML={{ __html: title }}/>
            </div>}

            <Translate
                fromX="0"
                toX="0"
                fromY="30%"
                toY="0"
                duration=".3"
                delay={width > 800 ? '.45' : ' .3'}
                threshold={width > 800 ? '0.5' : '0'}
            >
                <Fade
                    threshold={width > 800 ? '0.5' : '0'}
                    duration='.35'
                    from={0}
                    to={1}
                    delay={width > 800 ? '.45' : ' .3'}
                >

                    <div className={"thereisItems w-full " + (width > 800 ? ' grid ' : ' flex flex-col ')}>
                        <div className={"thesisItem thesisItem-1 flex flex-col "}>
                            <p className="name mbs">{t1name}</p>
                            {t1points?.map((p, i) => {
                                // console.log(state, p, "STATE")
                                return <div key={i} className={"points flex flex-row items-start mbs" + (i > 2 && isShowMore === false && width < 800 ? ' show-hide hidden ' : ' ')}>
                                    <span className="point"></span>
                                    <p
                                        className="pointText"
                                        dangerouslySetInnerHTML={{ __html: p.text }}>
                                    </p>
                                </div>

                            })}
                            {width > 800 ? '' : <div className={"cd8 cm4 flex  pl0 pr0" + (width > 800 ? ' justify-end ' : ' justify-start ')}>
                                <div onClick={() => { showMoreFunc(isShowMore, 0) }} className={"moreBtn cb-mid flex flex-row items-center"}>
                                    {isShowMore ? <p className='mrs'>скрыть</p> : <p className='mrs'>ещё</p>}
                                    <div className={"" + (isShowMore ? ' open ' : ' ')}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 8L9.79487 15L2 8" stroke="#494646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className={"thesisItem thesisItem-2 flex flex-col "}>
                    <p className="name mbs">{t2name}</p>
                    {t2points?.map((p, i) => {
                        // console.log(state, p, "STATE")
                        return <div key={i} className={"points flex flex-row items-start mbs" + (i > 2 && isShowMore2 === false && width < 800 ? ' show-hide hidden ' : ' ')}>
                            <span className="point"></span>
                            <p 
                                className="pointText"
                                dangerouslySetInnerHTML={{ __html: p.text }}>
                            </p> 
                        </div>
                        
                    })}
                    {width > 800 ? '' : <div className={"cd8 cm4 flex  pl0 pr0" + (width > 800 ? ' justify-end ' : ' justify-start ')}>
                        <div onClick={() => { showMoreFunc(isShowMore2, 1 ) }} className={"moreBtn cb-mid flex flex-row items-center"}>
                            {isShowMore2 ? <p className='mrs'>скрыть</p> : <p className='mrs'>ещё</p>}
                            <div className={"" + (isShowMore2 ? ' open ' : ' ')}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8L9.79487 15L2 8" stroke="#494646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>}
                </div>

                    </div>
                </Fade>
            </Translate>
            {width > 800 ?
                <Translate
                    fromX="40%"
                    toX="0"
                    fromY="0"
                    toY="0"
                    duration=".4"
                    delay='.1'
                    threshold='0.5'
                    className="bcSvg absolute"
                >
                    <Fade
                        threshold='0.5'
                        duration='.5'
                        from={0}
                        to={1}
                        delay='.1'
                    >
                        <div className="">
                            <img src="/images/logoGray.png" alt="" />
                        </div>
                    </Fade>
                </Translate> : ''}
        </section>
    )
}

export default Work

import {useContext, useEffect} from 'react'
import useWindowDimensions from './hooks/useWindowDimensions'

import { AllContexts } from '@/components/context/Context'

const consultationLink = {
    text:  "Записаться на консультацию",
    href: '/consultation'
}

const Bothering = (props) => {

    const [width] = useWindowDimensions()

    const { title, description, BotheringList, titleMob} = props

    const {reasons, setReasons} = useContext(AllContexts)

    function scrollTo(par) {
        let el = document.getElementById(par)
        if (el) {
          el.scrollIntoView({ block: 'start' });
          width > 800 ? window.scrollBy(0, -70) : window.scrollBy(0, 0);
        }
      }

    const spliceReason = (el, arr) => {
        if (Boolean(reasons.some(e => e.id === el.id))) {
            setReasons(reasons.filter((e) => e.id !== el.id))
        }
        else {
            setReasons([
                ...arr, 
                {id: el.id,
                text: el.text}
            ])
        }    
    }

    return (
        <section id="bothering" className={'bothering flex container cd10 cm4 ' + (width > 800 ? ' flex-row ' : ' flex-col ')}>
            <div className={"left-side flex flex-col " + (width > 800 ? ' ' : ' mb ')}>
                <div className="title cd8 cm4 pl0 pr0">
                    {width > 800 ? <h2>{title}</h2> : <h2>{titleMob}</h2>}
                </div>
                <div className={"flex " + (width > 800 ? ' flex-row ' : ' flex-col-reverse ')}>
                    <div className={"description flex flex-col justify-between " + (width > 800 ? ' ' : ' mt ')}>
                        <div
                            className={width > 800 ? '' : 'mb'}
                            dangerouslySetInnerHTML={{ __html: description }}/>
                        <div className="consultationButton flex justify-center cb-mid">
                            {width > 800 ? <a onClick={() => {scrollTo("form")}}>{consultationLink.text}</a> : <a onClick={() => {scrollTo("form")}}>{consultationLink.text}</a>}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap botheringItems">
                        {BotheringList?.map((b, i) => {
                            return <div key={i + b.id} onClick={() => {spliceReason(b, reasons)}}
                            className={"botheringItem contextItem flex justify-center items-center" + (Boolean(reasons.some(e => e.id === b.id)) ? ' active' : ' ')}>
                                <p>{b.text}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bothering



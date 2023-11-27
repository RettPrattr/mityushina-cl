import React, {useState, useEffect, useContext, useRef} from 'react'
import useWindowDimensions from './hooks/useWindowDimensions'
import useOnScreen from './hooks/useOnScreen'
import { AllContexts } from '@/components/context/Context'

// const title = 'Выберите тариф'

// const RatesItems = [
//     {
//         subtitle: 'Сессия-знакомство',
//         duration: '30 минут',
//         price: '1 000 ₽'
//     },
//     {
//         subtitle: 'Онлайн',
//         duration: '1 час',
//         price: '5 000 ₽'
//     },
//     {
//         subtitle: 'Офлайн',
//         duration: '1 час',
//         price: '7 000 ₽'
//     }
// ]

// const btnText = 'Выбрать'

const Rates = (props) => {

    const {btnText, RatesItems, title} = props
    const [currentUrl, setCurrentUrl] = useState('')


    const {currentComponent, setCurrentComponent, reasons, setReasons, rates, setRate} = useContext(AllContexts)

    function scrollTo(par) {
        //console.log(par, " PAR ")
        let el = document.getElementById(par)
        if (el) {
          el.scrollIntoView({ block: 'start' });
          width > 800 ? window.scrollBy(0, -70) : window.scrollBy(0, 0);
        }
        // window.scrollTo({top: contacts, behavior: 'smooth'});
      }
    
    const spliceRate = (el, arr) => {
        
        setRate([el])
        // index > -1 ? newArr === reasonsArr?.splice(index, 1) : newArr === reasonsArr?.push(el)
        //console.log(rates, "RATES")
    }


    const [width] = useWindowDimensions()
  


    useEffect(() => {

        // document.addEventListener('DOMContentLoaded', function() {
        (async () => {
            // console.log("WORK")
            if (typeof window !== "undefined") {
                // console.log("WORK1")
                if (window.location.href) {
                    const curUrl = window.location.href
                    // console.log(curUrl, "curUrl")
                    const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
                    // console.log(clearUrl, "clearUrl")
                    const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
                    // console.log(clearUrl2, "clearUrl2")

                    // console.log(currentUrl, "URL")

                    if (clearUrl2 === "/") {
                        //console.log(clearUrl2, "WORK3")
                        window.addEventListener("scroll", function() {
                            // console.log("WORK4")
                            if (window.innerWidth > 800) {
                                // console.log("WORK5")
                                var publicationsLink = document.getElementById("publicationsLink");
                                var aboutLink = document.getElementById("aboutLink");
                                var priceLink = document.getElementById("priceLink");
                                var targetPrice = document.getElementById("price");
                                if (targetPrice && targetPrice.offsetTop) {
                                    const offsetBottom = targetPrice.offsetTop + targetPrice.offsetHeight
                
                                    // console.log(elementTarget.offsetTop, offsetBottom, "BOUND RECT")
                                    if (window.scrollY >= targetPrice.offsetTop - 300 &&  window.scrollY <= offsetBottom) {
                                            if (priceLink && aboutLink && publicationsLink) {
                                                priceLink.classList.add('active')
                                                publicationsLink.classList.remove('active')
                                                aboutLink.classList.remove('active')
                                            }
                                            // console.log("IN RATES")
                                    } else if (window.scrollY < targetPrice.offsetTop - 300 || window.scrollY > offsetBottom) {
                                            if (priceLink) {
                                                priceLink.classList.remove('active')
                                            }
                                            // console.log("OUT RATES")
                                    }
                                }
                            }
                            });
                    }
                }
                // console.log("WORK2", currentUrl)

                }
            })()


    }, [])






    if ( width > 800 ) {
        return (
            <section id={'price'} className='rates container cd10 cm4 flex flex-col'>
                <div className="title"><h2>{title}</h2></div>
                <div className={"rates-container flex justify-between cb-mid" + (width > 800 ? '  flex-row ' : ' flex-row' )}>
                    {RatesItems?.map((r, i) => {  
                       return <div key={i} className={"rate-item cm4 flex flex-col justify-between " + (rates.includes(r) ? "ratesActive" : "")}>
                                    <div className="subtitle">{r.subtitle}</div>
                                    <div className="duration-container flex flex-col">
                                        <p>Длительность</p>
                                        <p className="duration">
                                            {r.duration}
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="price">
                                            <p>{r.price}</p>
                                        </div>
                                        <div onClick={() => {spliceRate(r, rates); scrollTo("form")}} className={"chooseButton cursor-pointer cb-mid flex w-full justify-center items-center "}>
                                            <p>
                                                {rates.includes(r) ? 'Выбрано' : 
                                                btnText}
                                            </p>
                                        </div>
                                    </div>
                               </div>
                    })}
              </div>
            </section>
          )
    } else {
        return (
            <section id={'price'} className='rates flex flex-col'>
                <div className="container cd10 cm4 pl0 pr0">                
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className={"rates-container flex justify-between cb-mid" + (width > 800 ? '  flex-row ' : ' flex-row' )}>
                    {RatesItems?.map((r, i) => {  
                    return <div key={i} className={"rate-item cm4 flex flex-col justify-between " + (rates.includes(r) ? "ratesActive" : "")}>
                                    <div className="subtitle">{r.subtitle}</div>
                                    <div className="duration-container flex flex-col">
                                        <p>Длительность</p>
                                        <p className="duration">
                                            {r.duration}
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="price">
                                            <p>{r.price}</p>
                                        </div>
                                        <div onClick={() => {spliceRate(r, rates); scrollTo("form")}} className="chooseButton cursor-pointer cb-mid flex w-full justify-center items-center">
                                            <p>{rates.includes(r) ? "Выбрано" : btnText}</p>
                                        </div>
                                    </div>
                            </div>
                    })}
            </div>
            </section>
        )
    }
}

export default Rates

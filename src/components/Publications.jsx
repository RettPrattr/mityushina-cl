import React, {useState, useEffect} from 'react'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import Translate from './animations/Translate'
import Fade from './animations/Fade'
import Link from "next/link";
import Svg from "@/components/Svg"
import SvgMob from "@/components/SvgMob"

import { useRouter } from 'next/router'


const Publications = (props) => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const { title, subtitle, Topics, image, theoryHref, theorySubtitle, theoryDescription, theoryText, sportHref, sportSubtitle, sportDescription, sportText} = props

    const router = useRouter()

    const [width] = useWindowDimensions()

    useEffect(() => {
            (async () => {
                if (typeof window !== "undefined") {
                    if (window.location.href) {
                        const curUrl = window.location.href
                        const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
                        const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
                        if (clearUrl2 === "/") {
                          window.addEventListener("scroll", function() {
                              if (window.innerWidth > 800) {
                                  var publicationsLink = document.getElementById("publicationsLink");
                                  var aboutLink = document.getElementById("aboutLink");
                                  var priceLink = document.getElementById("priceLink");
                                  var targetPublications = document.getElementById("publications");
                                  if (targetPublications && targetPublications.offsetTop) {
                                    const offsetBottom = targetPublications.offsetTop + targetPublications.offsetHeight
                                    if (window.scrollY >= targetPublications.offsetTop - 300 &&  window.scrollY <= offsetBottom) {
                                        if (priceLink && aboutLink && publicationsLink) {
                                            publicationsLink.classList.add('active')
                                            aboutLink.classList.remove('active')
                                            priceLink.classList.remove('active')
                                        }
                                    } else if (window.scrollY < targetPublications.offsetTop - 300 || window.scrollY > offsetBottom) {
                                        if (publicationsLink) {
                                            publicationsLink.classList.remove('active')
                                        }
                                      }
                                  }
                              }
                              });
                      }
                    }

                  }
              })()
              
      }, [])
      

  return (
    <section id={'publications'} className='publications ov-hidden relative'>
      <div className="title container pl0 pr0 cd10 cm4">
          <h2>{title}</h2>
      </div>
        {width > 800 ? <Svg image={image}/> : <SvgMob image={image}/>}
  
      <div className={"content-container flex container pl0 pr0 cd10 cm4 " + (width  > 800 ? ' flex-row items-end ' : 'flex-col-reverse ')}>
          <div className={"left-side cd4 cm4 flex items-end" + (width > 800 ? ' flex-col ' : ' flex-row ')}>
                {width > 800 ? '' : <div className='cm2 pl0 pr0'></div>}
                <div className="keyTopics cm2 pr0 flex flex-col">
                    {width > 800 ? <div className="subtitle">
                        <h4>{subtitle}</h4>
                    </div> : ' '}
                    <div className="topics flex flex-col">
                        {Topics?.map((t, i)  => {
                            return <div key={i} className="topicItem flex flex-row mbs">
                                <div className="">
                                    <span className="point"></span>
                                </div>
                                <p className="text">
                                {t.text}
                            </p>
                            </div>
                        })}
                        <p 
                            className="topicText"
                        >
                            Ответы на&nbsp;эти&nbsp;и&nbsp;другие вопросы можно найти в&nbsp;моих статьях и&nbsp;<Link href="/blog">блоге</Link>.
                        </p>
                    </div>
                </div>
          </div>
          {width > 800 ? <div className='cd1'></div> : ''}
          <div className={"right-side pl0 pr0 cd7 cm4 flex items-end justify-end" + (width > 800 ? ' flex-col ' : ' flex-row-reverse ')}>
                  <Translate
                      fromX="0"
                      toX="0"
                      fromY="30%"
                      toY="0"
                      duration=".3"
                      delay='.5'
                      threshold='0'
                      className={'cm4 pr0'}
                  >
                      <Fade
                          threshold='0'
                          duration='.3'
                          from={0}
                          to={1}
                          delay='.5'
                          className='flex justify-end '
                      >

                          {width > 800 ? <div onClick={width > 800 ? null : () => setShow1(!show1)} className={"theory right-side-block flex flex-col cd6 cm4" + (width > 800 ? ' pl0 pr0 mb' : ' w-full cursor-pointer ') + (show1 ? ' show ' : ' ')}>
                                <Link className={'no-text-decoration'}href={'articles/drivetheory'}><h4 className={'subtitle ' + (width > 800 ? ' mb ' : ' mbs ')} onClick={()=>router.push('article/1')}>{theorySubtitle}</h4>
                                <p className='description mb'>{theoryDescription}</p></Link>
                                {width > 800 ? <Link href={theoryHref} target='_blank' rel="noreferrer">{theoryText}</Link> : ''}
                            </div> : <Link className='mobSourceLink' href={theoryHref} target='_blank' rel="noreferrer">
                                <div onClick={width > 800 ? null : () => setShow1(!show1)} className={"theory right-side-block flex flex-col cd6 cm4" + (width > 800 ? ' pl0 pr0 mb' : ' w-full cursor-pointer ') + (show1 ? ' show ' : ' ')}>
                                    <h4 className={'subtitle ' + (width > 800 ? ' mb ' : ' mbs ')}>{theorySubtitle}</h4>
                                    <p className='description mb'>{theoryDescription}</p>
                                    {width > 800 ? <Link href={theoryHref} target='_blank' rel="noreferrer">{theoryText}</Link> : ''}
                                </div>
                            </Link>  }                
                        </Fade>
                  </Translate>
                  <Translate
                      fromX="0"
                      toX="0"
                      fromY="30%"
                      toY="0"
                      duration=".3"
                      delay='.5'
                      threshold='0'
                      className={'cm4 pl0'}
                  >
                      <Fade
                          threshold='0'
                          duration='.3'
                          from={0}
                          to={1}
                          delay='.5'

                      >
                          {width > 800 ? <div onClick={width > 800 ? () => null : () => setShow2(!show2)} className={"right-side-block sport flex flex-col cd12 cm4" + (width > 800 ? ' pl0 pr0 ' : ' w-full cursor-pointer ') + (show2 ? ' show ' : ' ')}>
                                <Link className={'no-text-decoration'}href={'articles/psychoanalysisandsports'}><h4 className={'subtitle ' + (width > 800 ? ' mb ' : ' mbs ')}>{sportSubtitle}</h4>
                                <p className='description mb'>{sportDescription}</p></Link>
                                {width > 800 ? <Link href={sportHref} target='_blank' rel="noreferrer">{sportText}</Link> : ''}
                            </div> : <Link className='mobSourceLink' href={sportHref} target='_blank' rel="noreferrer">
                                <div onClick={width > 800 ? () => null : () => setShow2(!show2)} className={"right-side-block sport flex flex-col cd12 cm4" + (width > 800 ? ' pl0 pr0 ' : ' w-full cursor-pointer ') + (show2 ? ' show ' : ' ')}>
                                    <h4 className={'subtitle ' + (width > 800 ? ' mb ' : ' mbs ')}>{sportSubtitle}</h4>
                                    <p className='description mb'>{sportDescription}</p>
                                    {width > 800 ? <Link href={sportHref} target='_blank' rel="noreferrer">{sportText}</Link> : ''}
                                </div>
                            </Link>  }
                        </Fade>
                  </Translate>

          </div>
      </div>
    </section>
  )
}

export default Publications

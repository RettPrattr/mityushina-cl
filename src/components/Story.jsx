import React, { useEffect } from 'react';
import Image from 'next/image'
import useWindowDimensions from './hooks/useWindowDimensions'
import findImageUrl from './utils/findImageUrl'
import AutoSlider from './atoms/AutoSlider.jsx';
import Translate from './animations/Translate'
import Fade from './animations/Fade'
import SvgStory from '@/components/SvgStory'

function Story(props) {

    const [width] = useWindowDimensions();

    const {type, text, text1, subtitle, image, mobImage, reverse, fullSize, presenceMob, customYear } = props

    const imageWidth = 2000
    const imageHeight = 2000

    useEffect(() => {
        (async () => {
          if (typeof window !== "undefined") {
            if (window.location.href) {
              const curUrl = window.location.href
              const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
              const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
              if (clearUrl2 === "/") {
                window.addEventListener("scroll", function () {
                  if (window.innerWidth > 800) {
                    var publicationsLink = document.getElementById("publicationsLink");
                    var aboutLink = document.getElementById("aboutLink");
                    var priceLink = document.getElementById("priceLink");
                    var targetAbout = document.getElementById("about");
                    if (targetAbout && targetAbout.offsetTop) {
                      const offsetBottom = targetAbout.offsetTop + targetAbout.offsetHeight
                      if (window.scrollY >= targetAbout.offsetTop - 150 && window.scrollY <= offsetBottom) {
                        if (priceLink && aboutLink && publicationsLink) {
                          aboutLink.classList.add('active')
                          publicationsLink.classList.remove('active')
                          priceLink.classList.remove('active')
                        }
                      } else if (window.scrollY < targetAbout.offsetTop - 150 || window.scrollY > offsetBottom) {
                          if (aboutLink) {
                              aboutLink.classList.remove('active')
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



    if ( type === 4 ) {
        return (
            <section className={'story ov-hidden story-' + type + (!presenceMob && width < 800 ? ' none ' : ' ')} id={!presenceMob ? ' ' : 'about'}>
                <div className={"container cd10 cm4 items-center justify-center flex" + (reverse ? ' flex-row-reverse' : ' flex-row ')}>
                    <div className="cd6 cm4 relative flex-col h-fit text">
                        <Translate
                            fromX="0"
                            toX="0"
                            fromY="80%"
                            toY="0"
                            duration=".35"
                            delay='1'
                            threshold='0.35'
                            className={customYear === "2021" ? "customYear cy-2" : "customYear cy-1"}
  
                        >
                            <Fade
                                threshold='0.5'
                                duration='.35'
                                from={0}
                                to={1}
                                delay='1'
                            >
                                <div className="">
                                    <span>{customYear}</span>
                                </div>
                            </Fade>
                        </Translate>
                        {text ? <Translate
                            fromX="0"
                            toX="0"
                            fromY="30%"
                            toY="0"
                            duration=".35"
                            delay='.5'
                            threshold='0.2'
                            className={width > 800 ? 'text' : 'text mbs'}
  
                        >
                            <Fade
                                threshold='0.2'
                                duration='.35'
                                from={0}
                                to={1}
                                delay='.5'
                            >
                                <div
                                    dangerouslySetInnerHTML={{ __html: text }}>
                                </div>

                            </Fade>
                        </Translate>: ''}
                        {props.children}
                    </div>
                    <div className="cd5 cm4">
                        <Image width={imageWidth} height={imageHeight} className={'photo ' + (width > 800 ? '' : ' mts')} src={width > 800 ? findImageUrl(image, 'url') : findImageUrl(mobImage, 'url')} alt={''} loading='lazy'/>
                    </div>

                    {width < 800 ?  <Translate
                            fromX="0"
                            toX="0"
                            fromY="30%"
                            toY="0"
                            duration=".35"
                            delay='.5'
                            threshold='0.2'
                            className={width > 800 ? 'text' : 'text mbs'}
  
                        >
                            <Fade
                                threshold='0.2'
                                duration='.35'
                                from={0}
                                to={1}
                                delay='.5'
                            >
                            <div
                                className={width > 800 ? '' : ' mts cm4 text-end'}
                                dangerouslySetInnerHTML={{ __html: text1 }}>
                            </div>
                            </Fade>
                        </Translate>: ''}
                </div>  
            </section>
        )
    }

    if ( type === 5 ) {
        return (
            <section className={'story story-' + type + ' flex flex-col ' + (reverse && ' reverse')}>
                <div className="container flex flex-col">
                    <div className="cd12 cm4 flex-col h-fit text">
                        {subtitle ? 
                        <div className="subtitle">
                            <h4>{subtitle}</h4>
                        </div> : ''}
                        {title ? <h2>{title}</h2> : ""}
                        {text ? <div 
                            className=""
                            dangerouslySetInnerHTML={{ __html: text }}>
                        </div> : ''}
                        {props.children}
                    </div>
                    <div className="cd12 cm4">
                        <AutoSlider images={images}/>
                    </div>
                </div>  
            </section>
        )
    }

    if ( type === 6 ) {
        return (
            <section className={' ov-hidden story relative story-' + type}>
                <SvgStory image={image}/>
                <div className="container cd10 cm4 pl0 pr0 flex flex-col">
                    <div className={"bottom flex " + (width > 800 ? ' flex-row items-start mt ' : ' flex-row items-center ')}>
                        <div className="cd4 cm2 pl0 personImage">
                        </div>
                        <div className="flex story6Col cd5 cm2 flex-col">
                            {text ? <div 
                                className="storyText-6 flex items-center flex-col h-fit text mb "
                                dangerouslySetInnerHTML={{ __html: text }}>
                            </div> : ''}
                        </div>
                    </div>
                </div>  
            </section>
        )
    }
    if ( type === 7 ) {
        return (
            <section className={'story story-' + type}>
                <div className="container items-center">
                    <div className={"cd4 cm4 flex flex-col" + (width > 800 ? "" : ' mbm')}>
                        {text ? <div 
                            className="descriptionRich mb"
                            dangerouslySetInnerHTML={{ __html: text }}>
                        </div> : ''}
                    </div>
                    <div className="cd8 cm4">
                        <Image quality={100} width={2000} height={2000} className={'photo cd12 cm4'} src={findImageUrl(images, 'url')} alt={''}></Image>
                    </div>
                </div>
            </section>
        )
    }
    if ( type === 8 ) {
        return (
            <section className={'story story-' + type}>
                <div className="container flex flex-col">
                    <div className="cd12 cm4">
                        {title ? <h2>{title}</h2> : ""}
                    </div>
                    <div className="container items-center flex flex-row">
                        {images?.data?.map((p, i) => {
                            return  <div key={i} className={"image50 cd6 cm4 pl0" + (width > 800 ? ' ' : ' mb')}>
                                        <Image quality={100} width={2000} height={2000} className={'photo'} src={findImageUrl(p.attributes, 'url')}    alt={''}></Image>
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Story
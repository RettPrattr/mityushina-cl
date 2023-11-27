import React, { useRef } from 'react'
import useWindowDimensions from './hooks/useWindowDimensions'
import Translate from './animations/Translate'
import Fade from './animations/Fade'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from 'next/image';

const HeroSection = (props) => {


  const { title1, title2, title3, title4, title1Mob, title2Mob, description, HeroTexts, btnText } = props

  const [width] = useWindowDimensions()

  const refSvg = useRef(null)

  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const initial = {
    pathLength: 0
  }
  const animate = {
    pathLength: 1
  }


  function scrollTo(par) {
    let el = document.getElementById(par)
    if (el) {
      el.scrollIntoView({ block: 'start' });
      width > 800 ? window.scrollBy(0, -70) : window.scrollBy(0, 0);
    }
  }

  return (
    <section className='heroSection relative'>
      <div className="container cd10 cm4">
        <div className="top flex justify-center">
          <Translate
            fromX="0"
            toX="0"
            fromY="80%"
            toY="0"
            duration=".25"
            delay='0'
            threshold='0'
            className="title firstLevel"
          >
            <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay='0'
            >

              {width > 800 ? <h2>{title1}</h2> : <div className='flex flex-col'><h2>{title1Mob}</h2><h2 className='text-center'>{title2Mob}</h2></div>}
            </Fade>
          </Translate>
          <Translate
            fromX="0"
            toX="0"
            fromY="80%"
            toY="0"
            duration=".25"
            delay='.06'
            threshold='0'
            className="title secondLevel"
          >
            <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay='.06'
            >
              <div>
                <h2 className='text-end'>{title2}</h2>
              </div>
            </Fade>
          </Translate>
          <Translate
            fromX="0"
            toX="0"
            fromY="80%"
            toY="0"
            duration=".25"
            delay='.12'
            threshold='0'
            className="title thirdLevel"
          >
            <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay='.12'
            >
              <div>
                <h2 className='text-end'>{title3}</h2>
              </div>
            </Fade>
          </Translate>
          <Translate
            fromX="0"
            toX="0"
            fromY="80%"
            toY="0"
            duration=".25"
            delay='.18'
            threshold='0'
            className="title fourthLevel"
          >
            <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay='.18'
            >
              <div>
                <h2 className='text-end'>{title4}</h2>
              </div>
            </Fade>
          </Translate>
          <Translate
            fromX="0"
            toX="0"
            fromY={width > 800 ? '25%' : '8%'}
            toY="0"
            duration=".25"
            delay={width > 800 ? '.18' : '.6'}
            threshold='0'
            className="heroImage"
          >
            <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay={width > 800 ? '.18' : '.6'}
            >
              <div className=""><Image quality={100} src={`${process.env.API_LINK}/uploads/large_hero_2a226701f6.webp`} alt="" width={1000} height={1000}/></div>
            </Fade>
          </Translate>
          <Translate
            fromX="0"
            toX="0"
            fromY="50%"
            toY="0"
            duration=".25"
            delay='.18'
            threshold='0'
            className={"description flex " + (width > 800 ? ' items-center ' : ' items-center justify-end')}
          >
            <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay='.18'
            >
              <div className={width < 800 ? 'flex justify-end ' : ' '}>
                <p>{description}</p>
                {width > 800 ? 
                <div className="consultationButton flex justify-center cb-mid cursor-pointer">
                    <a onClick={() => {scrollTo("form")}}>Записаться на консультацию</a>
                </div> : ''}
              </div>
            </Fade>
          </Translate>

          {width > 800 ? '' : <div className="consultationButton cursor-pointer cb-mid flex w-full justify-center items-center">
            <a onClick={() => scrollTo("form")}>{btnText}</a>
          </div>}

        </div>
        <div className={"bottom flex justify-between " + (width > 800 ? '  flex-row ' : ' flex-col')}>
          {HeroTexts?.map((t, i) => {
            return <Translate
              key={i}
              fromX="0"
              toX="0"
              fromY="50%"
              toY="0"
              duration=".25"
              delay={width > 800 ? i * 0.05 : i * 0.05 + 0.4}
              threshold='0'
              className={'translateContainer-' + (i + 1)}
            >
              <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay={width > 800 ? i * 0.05 : i * 0.05 + 0.4}
                className={'flex heroText-container ' + (width > 800 ? ' justify-center ' : (i + 1 === 2 || i + 1 === 3 ? ' justify-end ' : '  '))}
              >
                <div className={'heroText heroText-' + (i + 1)} key={i}>                                 
                <p className='w-full' dangerouslySetInnerHTML={{ __html: t.text }}/>
                </div>

              </Fade>
            </Translate>
          })}

        </div>
      </div>
      {width > 800 ? <motion.div
        ref={refSvg}
        className="heroLine absolute"
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div className="relative svgBlock2">
          <svg id="not-desk" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path transition={{ duration: 2, ease: "easeOut", delay: .7 }}
              initial={initial} animate={inView ? animate : initial} d="M1713.5 1.49842C1632.64 -0.880223 1335.5 6.49831 1178 52.9983C974.614 113.045 887.63 180.491 816.368 224.638M-138 271.998C-39.0913 321.618 149 449.5 407.5 413C543.083 388.154 620 355 726.022 284.795" stroke="#494646" strokeMiterlimit="10" />
          </svg>
          <svg id="desk" width="2042" height="444" viewBox="0 0 2042 444" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path transition={{ duration: 2, ease: "easeOut", delay: .7 }}
              initial={initial} animate={inView ? animate : initial} d="M2041 1.00014C1960.14 -1.37851 1564.88 30.7863 1407.38 77.2863C1203.99 137.333 1148.26 178.852 1077 223M0.499979 259.926C99.4082 309.546 378.377 473.788 636.877 437.288C772.46 412.442 894.978 350.705 1001 280.5" stroke="#494646" strokeMiterlimit="10"/>
          </svg>
          <Fade
            threshold='0'
            duration='.25'
            from={0}
            to={1}
            delay='1.2'
            className='heroLineLogo absolute inverse'
          >
            <span className='blackText'>Чемпионка России, победитель и призер Всероссийских и&nbsp;международных соревнований</span>
            <div className='logo-container'>
            <Image width={1000} height={1000} ref={ref} className='' id="logoHero" src="/svg/logo.svg" alt="" srcSet="" />
            <span className='inverseText'>Чемпионка России, победитель и призер Всероссийских и&nbsp;международных соревнований</span>
            </div>
          </Fade>
        </div>
      </motion.div> : <motion.div
        ref={refSvg}
        className="heroLineMob absolute"
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div className="relative svgBlock2">
          <svg width="500" height="153" viewBox="0 0 500 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path transition={{ duration: 2, ease: "easeOut", delay: .7 }}
              initial={initial} animate={inView ? animate : initial} d="M479.469 0.506219C456.784 1.74304 373.795 10.7998 330.81 27.5197C275.302 49.1107 229.5 86.6464 210.595 100.679M159.841 134.251C70.7168 177.573 -3.49555 131.336 -32.3445 119.776" stroke="#494646" strokeMiterlimit="10" />
          </svg>

          <Fade
            threshold='0'
            duration='.25'
            from={0}
            to={1}
            delay='1.2'
            className='heroLineLogo absolute inverse'
          >
              <span className='blackText'>Чемпионка России, победитель и призер Всероссийских и международных соревнований</span>
              <div>
                <Image width={1000} height={1000} ref={ref} className='' id="logoHero" src="/svg/logo.svg" alt="" srcSet="" />
                <span className='inverseText'>Чемпионка России, победитель и призер Всероссийских и международных соревнований</span>
              </div>
          </Fade>
        </div>
      </motion.div>
      }
    </section>
  )
}

export default HeroSection

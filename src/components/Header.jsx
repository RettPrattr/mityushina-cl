import useWindowDimensions from './hooks/useWindowDimensions'
import useScrollDirection from './hooks/useScrollDirection'

import { React, useState, useEffect, useContext } from 'react'
import findImageUrl from './utils/findImageUrl'
import { motion} from "framer-motion";
import Link from 'next/link'
import { AllContexts } from './context/Context';


export default function Header (props) {

  const scrollDirection = useScrollDirection();
  const [currentUrl, setCurrentUrl] = useState('/')
  const [show, setShow] = useState(false)

  const { LayoutLinks, consultationHref, consultationText, logo, logoLight } = props.data

  const [width] = useWindowDimensions()

  const [toggleBurger, setToggleBurger] = useState(false)

  const { setIsActive } = useContext(AllContexts)


    function scrollTo(par) {
      let el = document.getElementById(par)
      if (el) {
        el.scrollIntoView({ block: 'start' });
        width > 800 ? window.scrollBy(0, -70) : window.scrollBy(0, -50);
      }
    }

      useEffect(() => {
            (async () => {
                if (typeof window !== "undefined") {
                    if (window.location.href) {
                        const curUrl = window.location.href
                        const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
                        const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
                        setCurrentUrl(clearUrl2)
                    }
                  }
              })()
      }, [])

      const notIndexLink = <Link href="/" onClick={() => {                                     
        const timer = setTimeout(() => {
          scrollTo("form")               
      }, 1500);
      return () => clearTimeout(timer);}}>{consultationText}</Link>

      if (width) {
        if (width > 800) {
          return (
            <motion.section 
              className={'header mt0 pt0' + (scrollDirection === "down"  ? " down " : '')} id='header'
            >
              <div className="flex cd12 cm4 flex-row justify-between items-center">
                <div className='desk-logo flex justify-center'>
                  <Link href={'/'} className='flex items-center logo ' >    
                    <img width='100px' height='100px' src={findImageUrl(logo, 'url')} alt='logo'></img>
                  </Link>              
                </div>
                <div className='layoutLinks flex flex-row justify-between cb-mid'>
                      {LayoutLinks?.map((n, i) => {
                        const indexLink = <a id={n.ident} onClick={() => {setShow(false); setIsActive(false); scrollTo(n.link)}} key={i} className={'layoutLink' + (n.ident === "aboutLink" && currentUrl !== "/blog" ? '  ' : ' ')}  >{n.text}</a>;
                        const blogLink = <Link href="/" id={n.ident} onClick={() => {setShow(false); setIsActive(false);                                    
                        const timer = setTimeout(() => {
                          scrollTo(n.link)               
                      }, 1500);
                      return () => clearTimeout(timer);}} key={i} className={'layoutLink' + (n.ident === "aboutLink" && currentUrl === "/" ? '  ' : ' ')}  >{n.text}</Link>
                          return n.vector ? <div key={i} className={"layoutLink-container flex flex-row items-center " + (currentUrl === "/blog" ? ' active' : ' ')}>
                            <Link onClick={() => {setShow(false); setIsActive(false)}} key={i} id={"blogLink"} className={'layoutLink blogLink mr0 pr0' + (currentUrl === "/blog" ? ' active ' : ' ') }  href={n.href}>{n.text}</Link>
                          </div> : currentUrl === "/" ? indexLink : blogLink
                      })}
                </div>
                <div className="consultationLink flex">
                  
                  {currentUrl === "/" ? <a onClick={() => scrollTo("form")}>{consultationText}</a> : notIndexLink} 
                </div> 
              </div>
            </motion.section>
          );
      } else {
        return (
          <motion.section 
            className={'header' + (toggleBurger === true  ? ' active h-full justify-between' : '')} id='header'
          >
            <div className='flex cd10 cm4 flex-row justify-between items-center'>
                <div className="logo ">
                    <Link href={'/'} className='flex items-center' onClick={()=>{setIsActive(false)}}>
                        {toggleBurger === false ?  <img width='100px' height='100px' src={findImageUrl(logo, 'url')} alt='logo'></img> : <img width='100px' height='100px' src={findImageUrl(logoLight, 'url')} alt='logo'></img>}
                    </Link>
                </div>
                <div className={'burger ' + (toggleBurger === true ? 'active' : '')} onClick={() => setToggleBurger(!toggleBurger)}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                {width > 800 ? <div className="consultationLink flex">
                  <a onClick={() => {scrollTo("form"); setIsActive(false)}}>{consultationText}</a>
                </div> : ''}
            </div>
            <div className={'layoutLinks flex justify-between cb-mid ' + (toggleBurger === true ? 'active' : '') + (width > 800 ? ' flex-row ' : ' flex-col ')}>
                  {LayoutLinks?.map((n, i) => {
                        const indexLink = <a onClick={() => {setToggleBurger(false); scrollTo(n.link); setIsActive(false)}} key={i} className={'layoutLink' + (n.ident === "aboutLink" && currentUrl !== "/blog" ? '  ' : ' ')}  >{n.text}</a>;
                        const blogLink = <Link href="/" id={n.ident} onClick={() => {setToggleBurger(false); setIsActive(false)                                    
                        const timer = setTimeout(() => {
                          scrollTo(n.link)               
                      }, 1500);
                      return () => clearTimeout(timer);}} key={i} className={'layoutLink' + (n.ident === "aboutLink" && currentUrl !== "/blog" ? '  ' : ' ')}  >{n.text}</Link>
                          return n.vector ? <Link key={i} className={"layoutLink-container layoutLink flex flex-row items-center"} href={n.href} onClick={() => {setToggleBurger(false); setIsActive(false)}}>
                            {n.text}
                          </Link> : currentUrl === "/" ? indexLink : blogLink
                      })}
            </div>
            {toggleBurger && width > 800 ? <div className="flex cm4"></div> : ''}
        </motion.section>
        );
      }}
}
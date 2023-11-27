import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import findImageUrl from './utils/findImageUrl'
import MenuItem from './MenuItem';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import Link from 'next/link'
import Image from 'next/image'

import useWindowDimensions from '@/components/hooks/useWindowDimensions'

function Menu({inCase}) {

  const { logo, text, navItems, button } = props

  const [width] = useWindowDimensions()

  const { scrollY } = useViewportScroll();
  const top = useTransform(scrollY, [0, 100], [0, -30]);
  const [hidden, setHidden] = React.useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 600 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  
    const variants = {
      visible: { y: 0 },
      hidden: { y: -70 }
    };
    const variantsMobile = {
      visible: { y: 0 },
      hidden: { y: -43 }
    };
    
  if (width) {
    if (width > 800) {
      return (
        <motion.section 
          className={'header'}
          variants={variants}
          animate={hidden ? "hidden" : "visible"}
          style={{ top }}
        >
          <div className='name flex space-between justify-center'>
            <p>{text}</p>
          </div>
          <div className='flex justify-between items-center'>
            <Link href={'/'} className='flex items-center logo cd2'>
              <Image quality={100} width={100} className='mrs' height={100} src={findImageUrl(logo, "url")}></Image>
              <p>Team</p>
            </Link>
            {!inCase 
            ?
            <div className='flex justify-center cb-mid'>
              <MenuItem text={'Кто мы'} target={'we'}/>
              <MenuItem text={'Кейсы'} target={'cases'}/>
              <MenuItem text={'Услуги'} target={'services'}/>
              {/* <MenuItem text={'Контакты'} target={'contacts'}/> */}
            </div>
            :
            <div className='flex justify-center cb-mid'>
              <Link className='nav-item' href='/#we' text={'Кто мы'} >Кто мы</Link>
              <Link className='nav-item' href='/#cases' text={'Кейсы'} >Кейсы</Link>
              <Link className='nav-item' href='/#services' text={'Услуги'} >Услуги</Link>
            </div>
            }
            <div className='cd2 flex justify-end'>
              <Link href='https://t.me/dmitriikapustin' className='nav-item cb-mid'>Написать нам</Link>
            </div>
          </div>
        </motion.section>
      );
  } else {
    return (
      <motion.section 
        className={'header'}
        variants={variantsMobile}
        animate={hidden ? "hidden" : "visible"}
        style={{ top }}
      >
        <div className='name flex space-between justify-center'>
          <p>айти команда Капустина ©</p>
        </div>
        <div className='flex justify-between items-center'>
          <Link href={'/'} className='flex items-center logo'>
            <Image quality={100} width={100} className='mrs' height={100} src='/images/team-logo.svg'></Image>
            <p>Team</p>
          </Link>
          {!inCase 
          ?
          <div className='flex justify-center cb-mid'>
            <MenuItem text={'Кто мы'} target={'we'}/>
            <MenuItem text={'Кейсы'} target={'cases'}/>
            <MenuItem text={'Услуги'} target={'services'}/>
            {/* <MenuItem text={'Контакты'} target={'contacts'}/> */}
          </div>
          :
          <div className='flex justify-center cb-mid'>
            <Link className='nav-item' href='/#we' text={'Кто мы'} >Кто мы</Link>
            <Link className='nav-item' href='/#cases' text={'Кейсы'} >Кейсы</Link>
            <Link className='nav-item' href='/#services' text={'Услуги'} >Услуги</Link>
          </div>
          }
          
          <Link href='https://t.me/dmitriikapustin' className='nav-item cb-mid'>Написать нам</Link>
        </div>
      </motion.section>
    );
  }}
  

}

export default Menu
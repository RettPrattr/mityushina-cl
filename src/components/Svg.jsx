import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import findImageUrl from './utils/findImageUrl';
import Image from 'next/image';

const Svg = (props) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ['0.7 0.8', '1 0.8']})

    const base = 0.1
    const offset = 0
    const reference = [0, 1]

    const drawing1 = useTransform(scrollYProgress, [1 * base + offset, 2 * base + offset], reference);
    const drawing2 = useTransform(scrollYProgress, [2 * base + offset, 3 * base + offset], reference);
    const drawing3 = useTransform(scrollYProgress, [3 * base + offset, 4 * base + offset], reference);
    const drawing4 = useTransform(scrollYProgress, [4 * base + offset, 5 * base + offset], reference);
    const drawing5 = useTransform(scrollYProgress, [5 * base + offset, 6 * base + offset], reference);

    const {image} = props

  return (
      <>
    <section className='svgBlock3 cm4 relative flex flex-col'>
    <motion.div 
        id="svg3"
        transition={{
            duration: 1.5,
            ease: "easeInOut",
        }}>
        <svg id="l1" className='svgBlockEl' width="812" height="107" viewBox="0 0 812 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path style={{ pathLength: drawing1 }} d="M0.911133 0.53418C98.4051 22.415 410.736 173.83 811.804 68.8023" stroke="#494646"/>
        </svg>
        <svg id="l2" className='svgBlockEl'  width="122" height="203" viewBox="0 0 122 203" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path style={{ pathLength: drawing2 }} d="M1 202C41 189.333 121 148.9 121 88.5C121 50.5 94 28 82.5 21.5C76 17.3333 55.6 8.9 22 0.5" stroke="#FFDA70"/>
        </svg>
        <svg id="l3" className='svgBlockEl' width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path style={{ pathLength: drawing3 }} d="M38 10L1 1" stroke="#FFDA70"/>
        </svg>
        <svg id="l4" className='svgBlockEl' width="536" height="211" viewBox="0 0 536 211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path style={{ pathLength: drawing4 }} d="M73 102C45.3333 94.6668 -7.50003 70.7001 2.49997 33.5001C15 -12.9999 95 -9.99986 154.5 44.0001C202.1 87.2001 259.333 128 282 143C309.667 165.5 377.9 210.5 429.5 210.5C481.1 210.5 521.667 183.833 535.5 170.5" stroke="#494646"/>
        </svg>
        <svg id="l5" className='svgBlockEl' width="1119" height="353" viewBox="0 0 1119 353" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path style={{ pathLength: drawing5 }} d="M0.810425 352.333C208.35 80.1333 589.277 -51.151 1118.2 19.7425" stroke="#494646" strokeLinecap="round"/>
        </svg>
        <Image id="logo" src="/svg/logo.svg" className='svgBlockEl' alt="" srcSet="" width={100} height={100}/>
        <Image ref={ref} id="img1" src={findImageUrl(image, 'url')} width={1000} height={1000} alt="" srcSet=""/>
    </motion.div>
    </section>
    </>
  )
}

export default Svg
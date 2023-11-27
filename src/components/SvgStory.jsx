import React, { useRef } from 'react'
import { motion, useScroll, useTransform} from "framer-motion";
import useWindowDimensions from './hooks/useWindowDimensions'
import findImageUrl from './utils/findImageUrl';
import Image from 'next/image';


const Svg = (props) => {

    const { image } = props

    const [width] = useWindowDimensions()

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ['0.5 0.8', '1 0.8']})

    const base = 0.1
    const offset = 0
    const reference = [0, 1]
 
    const drawing1 = useTransform(scrollYProgress, [1 * base + offset, 3 * base + offset], reference);
    const drawing2 = useTransform(scrollYProgress, [3 * base + offset, 5 * base + offset], reference);
    const drawing3 = useTransform(scrollYProgress, [5 * base + offset, 7 * base + offset], reference);

    return (
        <section className='svgBlock cm4 relative flex flex-col story6'>
            {width > 800 ?  
            <motion.div 
                id="svg2"
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}>
                    <svg id="el1" className='svgBlockEl' width="281" height="169" viewBox="0 0 281 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path style={{ pathLength: drawing1 }} d="M1 168.5C22.6667 148.333 109 75.7 153 50.5C197 25.3 256.333 6.66667 280.5 0.5" stroke="#494646"/>
                    </svg>
                    <svg id="el2" className='svgBlockEl' width="266" height="276" viewBox="0 0 266 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path style={{ pathLength: drawing2 }} d="M174.5 0.5C185.333 1 212.6 6.5 235 24.5C255.533 41 270.5 65.5 262.5 80C256.431 91 247 93.5 235 97C226.798 99.3923 141 106.5 69.9998 143.5C-1.00024 180.5 2.5 207.5 1.5 224C0.5 240.5 1.99999 254 18.9999 275.5" stroke="#FFDA70"/>
                    </svg>
                    <svg id="el3" className='svgBlockEl' width="1313" height="368" viewBox="0 0 1313 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path style={{ pathLength: drawing2 }} d="M1 334.5C8 344 38.6 367 89 367C152 367 229 349 305 315.5C381 282 600.5 167 830.5 93.5C1014.5 34.7 1251.67 4.83333 1312.5 0.5" stroke="#494646"/>
                    </svg>
                    <Image ref={ref} quality={100} id="imgStory1" src={findImageUrl(image, 'url')} width={1000} height={1000} alt="" srcSet=""/>
            </motion.div> 
            : 
            <motion.div 
                id="svg2"
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            >
                    <svg id="el1" className='svgBlockEl' width="20" height="58" viewBox="0 0 20 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path style={{ pathLength: drawing1 }} d="M-75 57C-60.9524 42.2829 -41.1858 14.7789 19.5 0.5" stroke="#494646"/>
                    </svg>
                    <svg id="el2" className='svgBlockEl' width="145" height="128" viewBox="0 0 145 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path style={{ pathLength: drawing2 }} d="M100.225 1C146.958 7.86905 160.372 48.5383 120.273 53.9114C33.4398 65.5468 1.74703 98.5095 1.01562 127.5" stroke="#FFDA70"/>
                    </svg>
                    <svg id="el3" className='svgBlockEl' width="341" height="200" viewBox="0 0 341 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path style={{ pathLength: drawing3 }} d="M661.998 1C319.588 44.8506 144.187 225.989 32.4788 195.579C10.0036 189.46 1.00113 173.5 1 154" stroke="#494646"/>
                    </svg>
                    <Image ref={ref} quality={100} id="imgStory1" src={findImageUrl(image, 'url')} width={100} height={100} alt="" srcSet=""/>
            </motion.div>}
        </section>
    )
}

export default Svg
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useMotionValueEvent, useViewportScroll, useTransform } from "framer-motion";

const FadeSD = (props) => {

    const ref = useRef(null);


    const { from, to, translateX, translateY, className, threshold, leftToRight, topToBottom } = props


    // const { ref, inView, entry } = useInView({
    //     threshold: threshold,
    //     triggerOnce: true,
    //   })


    /// framer hook for scroll-dependent animation

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start end", "end end"]
    })

    // translateX ? styleX = leftToRight + 100 - scrollYProgress : ''
    // translateY ? styleY = topToBottom + 100 - scrollYProgress : ''


    // const style = {
    //     x: `${styleX}%`,
    //     y: `${styleY}%`
    // }


    const opacity = useTransform(scrollYProgress, [0.1, 1], [from, to]);


    // style={{ scaleX: scrollYProgress }}

    useMotionValueEvent(scrollYProgress, "change", (latest) => {console.log(latest)})






  return (
        <motion.div
                ref={ref} 
                className={className + ' fadeSD'}
                // animate={inView ? animate : initial}
                transition={{
                    ease: "easeInOut",
                    duration: 1.5
                }}
                style={{ opacity: opacity }}
            >
                {props.children}
        </motion.div>

  )
}

export default FadeSD

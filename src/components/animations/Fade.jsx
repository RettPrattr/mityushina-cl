import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useScroll } from "framer-motion";

const Fade = (props) => {

    const { from, to, delay, duration, className, threshold } = props


    // let initial;
    // let animate;

    /// children
    /// direction: x / y
    /// from: initial value
    /// to: animate value
    /// delay
    /// duration
    /// className: optional
    /// threshold: Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points.


    const { ref, inView, entry } = useInView({
        threshold: threshold,
        triggerOnce: true,
      })


    // direction === "x" ? {initial = { x: from }, animate = { x: to }} : {initial = { y: from }, animate = { y: to }}


    const initial = {
        opacity: from
    }
    const animate = {
        opacity: to
    }

    

    // console.log(initial, animate, "KNOW")

  return (
        <motion.div
                ref={ref} 
                className={className}
                initial={initial}
                animate={inView ? animate : ''}
                // animate={inView ? animate : initial}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    delay: delay
                }}
            >
                {props.children}
        </motion.div>

  )
}

export default Fade

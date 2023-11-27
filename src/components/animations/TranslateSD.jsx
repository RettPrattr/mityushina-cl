import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useViewportScroll, useTransform } from "framer-motion";

const TranslateSD = (props) => {

    const ref = useRef(null);


    const { x, from, to, className, threshold, leftToRight, topToBottom} = props

    let styleX;
    let styleY;

    /// children
    /// direction: x / y
    /// from: initial value
    /// to: animate value
    /// delay
    /// duration
    /// className: optional
    /// threshold - Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points.
    /// leftToRight: "" (условно знак "+" - по горизонтали слева направо, по вертикали сверху вниз)/ - (справа налево и снизу вверх)
    /// topToBottom: "" (условно знак "+" - по горизонтали слева направо, по вертикали сверху вниз)/ - (справа налево и снизу вверх)
    /// translateX, translateY - true/false (если нужен/не нужен translate по конкретной оси)


    // const { ref, inView, entry } = useInView({
    //     threshold: threshold,
    //     triggerOnce: true,
    //   })


    /// framer hook for scroll-dependent animation

    const { scrollYProgress } = useScroll({
        // target: ref,
        offset: ["start end", "end end"]
    })

    // translateX ? styleX = leftToRight + 100 - scrollYProgress : ''
    // translateY ? styleY = topToBottom + 100 - scrollYProgress : ''


    // const style = {
    //     x: `${styleX}%`,
    //     y: `${styleY}%`
    // }


    const translate = useTransform(scrollYProgress, [.5, 1], [from, to]);


    // style={{ scaleX: scrollYProgress }}





  return (
        <motion.div
                // ref={ref} 
                className={className}
                // animate={inView ? animate : initial}
                transition={{
                    ease: "easeInOut",
                    duration: 5
                }}
                style={ x === "true" ? {translateX: translate} : {translateY: translate} } 
            >
                {props.children}
        </motion.div>

  )
}

export default TranslateSD

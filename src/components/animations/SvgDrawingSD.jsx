import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const SvgDrawingSD = (props) => {

    const { className, threshold } = props

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref})

    const drawing = useTransform(scrollYProgress, [0, 1], [1, 0]);

    useEffect(() => {
        console.log(scrollYProgress.current, typeof scrollYProgress, "SCROLL Y changed")
    }, [scrollYProgress.current])

  return (
        <motion.div
                ref={ref} 
                className={className}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            >
                <svg width="432" height="347" viewBox="0 0 432 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path style={{ pathLength: drawing }} d="M422.5 343C422.5 343 159.5 293.5 21 343C-117.5 392.5 508 -138 422.5 36.5C337 211 21 36.5 21 36.5" stroke="black"/>
                </svg>
        </motion.div>

  )
}

export default SvgDrawingSD

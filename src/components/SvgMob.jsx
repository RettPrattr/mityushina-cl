import React, { useRef } from 'react'
import { motion, useScroll, useTransform} from "framer-motion";
import findImageUrl from './utils/findImageUrl';
import Image from 'next/image';

const Svg = (props) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ['0.7 0.8', '1 0.8']})

    const { image } = props 

    const base = 0.1
    const offset = 0
    const reference = [0, 1]

    const drawingMob = useTransform(scrollYProgress, [1 * base + offset, 6 * base + offset], reference)


    return (
        <section className='svgBlock3 cm4 relative flex flex-col mobSVG'>
            <motion.div  
                id="svg3Mob"
                transition={{duration: 1.5, ease: "easeInOut",}}
            >
                    <svg id="lMob" className='svgBlockElMob' width="265" height="171" viewBox="0 0 207 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path style={{ pathLength: drawingMob }} fillRule="evenodd" clipRule="evenodd" d="M 0.5006 43.0002 C 0.9663 43.1821 0.9663 43.1822 0.9663 43.1822 L 0.9679 43.1782 L 0.974 43.1627 C 0.9797 43.1485 0.9885 43.1268 1.0004 43.0976 C 1.0243 43.0393 1.0608 42.9515 1.1106 42.8357 C 1.2101 42.604 1.3624 42.2607 1.5716 41.8186 C 1.9901 40.9344 2.6362 39.6556 3.5429 38.0863 C 5.3564 34.9475 8.2116 30.6486 12.3723 26.0221 C 20.6915 16.7717 34.233 6.2075 55.1218 0.9853 L 54.8793 0.0151 C 33.7681 5.2929 20.0597 15.9788 11.6288 25.3534 C 7.4146 30.0393 4.5197 34.3967 2.677 37.586 C 1.7556 39.1808 1.097 40.484 0.6678 41.3908 C 0.4532 41.8442 0.2959 42.1986 0.1918 42.4409 C 0.1398 42.562 0.101 42.6551 0.075 42.7186 C 0.062 42.7503 0.0522 42.7746 0.0455 42.7913 L 0.0379 42.8106 L 0.0358 42.8159 L 0.0352 42.8174 C 0.035 42.8179 0.0348 42.8183 0.5006 43.0002 Z M 126.379 4.4853 C 133.414 6.2439 145.705 10.0002 158.497 16.7248 C 171.292 23.4509 184.559 33.1306 198 54 L 199 54 C 185.267 32.3886 171.844 22.6108 158.963 15.8397 C 146.079 9.0671 133.707 5.2865 126.622 3.5151 L 126.379 4.4853 Z M 205.497 91.0567 C 208.013 68.9171 204 62 203 61 L 202 62 C 203 61 206.988 69.0833 204.504 90.9438 C 202.717 106.672 193.889 119.447 180.591 129.769 C 167.286 140.095 149.529 147.945 129.96 153.805 C 90.8223 165.525 44.5574 169.25 0.5045 169 L 12.4967 170 C 44.6104 170.25 90.9824 166.521 130.247 154.763 C 149.878 148.885 167.764 140.99 181.204 130.558 C 194.65 120.122 203.672 107.124 205.497 91.0567 Z" stroke="#FFDA70"/>
                    </svg>
                    <Image ref={ref} id="img1Mob" src={findImageUrl(image, 'url')} width={100} height={100} alt="" srcSet=""/>
            </motion.div>

        </section>
    )
}

export default Svg
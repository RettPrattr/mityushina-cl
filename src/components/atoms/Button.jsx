import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'

function Button(props) {

    const { type, text, absolute } = props

    const [width, height] = useWindowDimensions();



    const imageWidth = 100
    const imageHeight = 100

    if (!type) {
        return (
            <div 
                className={"rounded button mrs cb-mid " + props.className} 
                onClick={props.onClick}
            >
                <p><span>{props.text}</span></p>
            </div> 
        )
    }

    if (type === 1) {
        return (
            <div className={'submit-btn px0 flex ' + (width > 800 ? ' mt0' : '')}>
                <button onClick={props.onClick} disabled={props.disabled} className={props.className + ' button'} type="submit" >
                    {/* onClick={(e) => { balanceFunc(); e.preventDefault() }} */}
                    {text}
                </button>
            </div> 
        )
    }
    if (type === 2) {
        return (
            <div className={'link-btn px0 input-container cb-mid ' + (absolute ? ' absolute ' : ' flex justify-center ')}>
                <Link className={props.className} href={props.href} onClick={props.onClick}>
                    {text}
                </Link>
            </div>
        )
    }

    if (type === 3) {
        return (
            <div className={'link-btn px0 input-container cb-mid ' + (absolute ? ' absolute ' : ' flex justify-center ')}>
                <Link className={props.className} href={props.href} onClick={props.onClick} target="_blank">
                    {text}
                </Link>
            </div>
        )
    }

}

export default Button
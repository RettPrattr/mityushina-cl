import React from 'react'
import Link from "next/link";
import useWindowDimensions from './hooks/useWindowDimensions'
import Button from './atoms/Button.jsx';
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl'
import findValue from './utils/findValue'

const ImageWithText = (props) => {

    const { image, text } = props

    const [width] = useWindowDimensions()

  return (
    <div className={"imageWithText imageWithText-1 mb flex " + (width > 800 ? ' flex-row ' : ' flex-col ')}>
        <div className="image cd4 cm4 pl0 pr0 mr">
            <Image quality={100} width={1000} height={1000} className={'photo '} src={findImageUrl(image, 'url')} alt={''}></Image>
        </div>
        <div className="imageText cd8 cm4 pl0 pr0">
        <p
            className=""
            dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    </div>
  )
}

export default ImageWithText

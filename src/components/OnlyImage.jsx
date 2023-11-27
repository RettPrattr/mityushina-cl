import React from 'react'
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl'
import findValue from './utils/findValue'

const OnlyImage = (props) => {

    const { image } = props
    return (
        <div className="image image-1 mb flex justify-center flex flex-row flex-wrap image-margin">
            {image.data.map((v, i) => (
                <div className="image cd4 cm4 pl0 pr0" key={i}>
                    <Image key={i} quality={100} width={1000} height={1000} className={'photo '} src={findImageUrl(v, 'url')} alt={''}></Image>
                </div>
            ))}
        </div>
    )
}

export default OnlyImage

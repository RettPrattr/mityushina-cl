import React from 'react';
import Image from 'next/image'
import Button from '../components/atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'

export default function Promo (props) {


    const { type, title, description, btnText } = props

    const [width, height] = useWindowDimensions();



    if ( type === 1 ) {
        return (
            <section className='Promo Promo-1 flex flex-col bc-fill'>
                <div className="container flex flex-col">
                    <div className="top cd12 cm4">
                        <h2>{title}</h2>
                    </div>
                    <div className={"bottom flex cm4" + (width > 800 ? ' justify-between w-full flex-row ' : ' flex-col')}>
                        <div className={width > 800 ? ' cd6' : ' '}>
                            <p 
                                className=""
                                dangerouslySetInnerHTML={{ __html: description }}>
                            </p>
                        </div>
                        <div className={"flex" + (width > 800 ? ' justify-end' : ' justify-start')}>
                        <Button 
                            type={2}
                            text={btnText}
                        />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    if ( type === 2 ) {
        return (
            <section className='Promo Promo-2 flex flex-col'>
                <div className="container">
                    <div className="cd4 cm4">
                    </div>
                    <div className="cd8 cm4 flex-col">
                    </div>
                </div>
            </section>
        )
    }
    if ( type === 3 ) {
        return (
            <section className='Promo Promo-3 flex flex-col cd12 cm4'>
                <div className="container flex flex-col justify-start cm4">
                    <div className=''>
                        <h2 className={"title" + (width > 800 ? ' mbm' : ' mbs')}>{title}</h2>
                        <p
                            className={"description " + (width > 800 ? 'w-half' : 'w-full')}
                            dangerouslySetInnerHTML={{ __html: description }}>
                        </p>
                        <Button 
                            type={1}
                            text={btnText}
                        />
                    </div>
                </div>
            </section>
        )
    }
}


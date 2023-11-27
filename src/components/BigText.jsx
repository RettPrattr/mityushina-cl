import React, { useState } from 'react';
import Button from '@/components/atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'

function BigText(props) {

    const { type, title, text1, text2, text3, text4, bcFill } = props


    const [width, height] = useWindowDimensions()


    // function scrollTo() {
    //     document.getElementById(`contacts`).scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);
    //     console.log("IOOOOOO")
    //  }

    // TYPE 1
    if ( type === 1) {
        return (
            <section className={'bigText bigText-' + type + ' flex flex-row'}>
                <div className="container justify-start">
                    <div 
                        className="flex flex-row cm4 cd12" 
                        dangerouslySetInnerHTML={{ __html: text1 }}>
                    </div>
                </div>
            </section>
        )}

    if ( type === 2 ) {
        return (
            <section id='contacts' className={'bigText bigText-' + type + ' flex flex-row' + (bcFill && ' bc-fill')}>
                <div className="container flex flex-col">
                    <div className={'flex heading cd12 cm4 ' + (width > 800 ? ' mbs' : ' mb')}>
                        <h2 className=''>{title}</h2>
                    </div>
                    <div className="flex-row flex space-between mx0 mb0 mys p0">
                        <div className="flex flex-col cd6 cm4">
                            <a className="mb">{text1}</a>
                            <a className="m0">{text2}</a>
                        </div>
                        <div className="flex flex-col cd6 cm4">
                            <p className="mb">{text3}</p>
                            <p className="m0">{text4}</p>
                        </div>
                    </div>
                </div>
            </section>
        )}
}

export default BigText
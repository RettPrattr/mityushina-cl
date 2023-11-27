import React from 'react';
import Link from "next/link";
import useWindowDimensions from './hooks/useWindowDimensions'
import Button from './atoms/Button.jsx';
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl';


export default function ContentCards (props) {

    const { type, contentCards, title } = props

    const [width] = useWindowDimensions()




    const contentCardsLength = contentCards.length

    if (type === 1) {
        return (
            <section className='ContentCards ContentCards-1'>
                <div className="container flex flex-col">
                    <div className="top cd12 flex flex-row justify-between">
                        <h2>{title}</h2>
                    </div>
                    <div className="bottom flex flex-col">
                        {contentCards.map((c, i) => {
                            return <div key={i} className={'flex contentCard-1' + (width > 800 ? ' flex-row mb' : ' flex-col mbm')}>
                                <div className={"flex cd5 cm4" + (width > 800 ? ' flex-row' : ' flex-col')}>
                                    <div className={(width > 800 ? ' flex flex-row' : ' flex flex-row')}>
                                        <h3 className='mr first-param'>{c.day}</h3>
                                        <div className="flex mr flex-col">
                                            {/* <p className='flex date'>{c.date}</p>
                                            <p className="gray">{c.weekday}</p> */}
                                        </div>
                                    </div>
                                    <div className="image-container">
                                        <Image quality={100} width={1000} className={'photo mrs' + (width > 800 ? ' ' : ' mb')} height={1000} src={findImageUrl(c.image, 'url')}   alt={''} ></Image>
                                    </div>
                                </div>
                                <div className={"flex flex-col cm4 cd6" + (width > 800 ? ' mls' : ' mt')}>
                                    <div className="flex flex-row">
                                        {c.category.map((c, i) => {
                                            return <p className='category mrs mbs pxs' key={i}>{c}</p>
                                        })}
                                    </div>
                                    <h3 className={(width > 800 ? ' ' : ' mbs')}>{c.name}</h3>
                                </div>
                                <div className="flex flex-col cm4">
                                    <p>{c.start}</p>
                                    <p className="gray">{c.address}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }

    if (type === 2) {
        return (
            <section className="ContentCards ContentCards-2">
                <div className="container flex">
                    {contentCards.map((c, i) => {
                        return  <div className="cd6 cm4 mbs" key={i}>
                            <div className="relative flex flex-col pm contentCard-2 mb justify-between" >
                            <div className="absolute t0 l0 h-full bc-photo z-0">
                                <Image
                                    quality={100} 
                                    width={1000} 
                                    height={1000}
                                    src={findImageUrl(c.image, 'url')}
                                    alt={''}>
                                </Image>
                            </div>
                            <div className="top z-1">
                                <h3>{c.name}</h3>
                                <p>{c.description}</p>
                            </div>
                            <Button 
                                type={1}
                                text="button"
                            />
                        </div>
                        </div>
                    })}

                </div>
            </section>
        )
    }

    if (type === 3) {
        return (
            <section className="ContentCards ContentCards-3 bc-fill">
                <div className="container flex flex-col">
                    <div className="top cd12">
                        <h2>Узнать больше</h2>
                    </div>
                    <div className={"flex" + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {contentCards.map((c, i) => {
                            return i === contentCardsLength - 1 ? <div className={"cd3 cm4 last-card-container contentCard-3"}>
                                <div className={'flex justify-between last-card relative h-fill' + (width > 800 ? ' flex-col pm pxs' : ' flex-row px pys')}>
                                    <h3 className='w-full'>Подобрать программу</h3>
                                    <Button
                                    />
                                </div> 
                            </div>
                            : 
                            <div className='cd3 cm4 h-fit contentCard-3 mb'>
                                <div key={i} className={"relative flex flex-col contentCard-3 mb justify-between" + (width > 800 ? ' pm' : ' p')}>
                                    <div className="absolute t0 l0 h-full bc-photo z-0">
                                        <Image
                                            quality={100} 
                                            width={1000} 
                                            height={1000}
                                            src='/images/image.webp' 
                                            alt={''}>
                                        </Image>
                                    </div>
                                    <div className="top z-1">
                                        <h3>{c.name}</h3>
                                        <p>{c.description}</p>
                                    </div>
                                    <Button 
                                        type='1'
                                        text="button"
                                    />
                                </div>  
                            </div>
                        })}
                    </div>

                </div>
            </section>
        )
    }
}
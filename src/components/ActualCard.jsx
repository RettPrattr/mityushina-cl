import React from 'react';
import Link from "next/link";
import useWindowDimensions from './hooks/useWindowDimensions'
import Button from './atoms/Button.jsx';
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl'
import findValue from './utils/findValue'

import delve from 'dlv';

const ActualCard = (props) => {

    // console.log("ACTUAL", props)

    const [width] = useWindowDimensions()

    const { ActualItem, title } = props.props

    return (
        <section className="ItemCards ItemCards-1">
            <div className="flex flex-col w-full">
                <div className="itemCardsTitle">
                    <h4>{title}</h4>
                </div>
                <div className={"cards w-full flex-wrap flex" + (width > 800 ? ' flex-row' : ' flex-col ')}>
                    {ActualItem?.map((m, i) => {
                        // console.log(m.href, "HREF")
                        return <Link href={m.href} className={'cd6 cm4 pl0 ' + (i + 1 === ActualItem.length ? ' ' : ' mbm') + (i % 2 === 0 ? ' ' : ' pr0 ')} key={i}>
                            <div className={'flex flex-col cb-mid'} key={i}>
                                <h3 className='mbs subtitle'>{m.subtitle}</h3>
                                <p>{m.text}</p>
                                {/* <Link href=''>
                                <h3 className='mbs'>{m.title}</h3>
                            </Link> */}
                                {/* <p className=''>{m.description}</p> */}
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </section>
    )
}

export default ActualCard

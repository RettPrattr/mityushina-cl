import React from 'react';
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl';

function About(props) {


    const { title, description, pointContent, type, subtitle, additional } = props


    const imageWidth = 1000
    const imageHeight = 1000

    // TYPE 1
    if ( type === 1 ) {
        return (
            <section className='about about-2 flex flex-col'>
                <div className="container text justify-between">
                    {title ? <div className="cd4 cm4"><div className="title align-start"><h2>{title}</h2></div></div>: ""}
                    {subtitle ? 
                        <div className="cd6 cm4">
                            <h4>{subtitle}</h4>
                        </div>
                    : ""}
                </div>
                <div className="iconsContent">
                    <div className="container content flex-row">
                        {additional ? <div className="additional cd3 cm4"><p>{additional}</p></div> : ''}
                        {pointContent ? pointContent?.map((item, i) => {
                            return (
                                <div className="info flex-col cd3 cm4" key={i}>
                                    <Image src={findImageUrl(item.icon, 'url')} width={imageWidth} height={imageHeight} alt={item.pointName} quality={100}/>
                                    <p className="name">{item.title}</p>
                                    <p className="text">{item.description}</p>
                                </div>
                            )
                        }) : ''}
                    </div>
                </div>
            </section>
        )}

    // TYPE 2
    if ( type === 2 ) {
        return (
            <section className='about about-2 flex flex-col'>
                <div className="container text justify-between">
                    <div className="cd4 cm4">
                        <div className="title align-start">
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className="cd6 cm4">
                        <p>{subtitle}</p>
                    </div>
                </div>
                <div className="iconsContent">
                    <div className="container content flex-row">
                        <div className="additional cd3 cm4">
                            <p>{additional}</p>
                        </div>
                        {pointContent?.map((item, i) => {
                            return (
                                <div className="info flex-col cd3 cm4" key={i}>
                                    <Image src={findImageUrl(item.icon, 'url')} width={imageWidth} height={imageHeight} alt={item.pointName} quality={100}/>
                                    <h3 className="name">{item.title}</h3>
                                    <p className="text">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )}

    // TYPE 3
    if ( type === 3 ) {
    return (
        <section className='about about-3 flex flex-col'>
            <div className="container text justify-between">
                {title ? <div className="cd4 cm4"><div className="title align-start"><h2>{title}</h2></div></div>: ""}
                {subtitle ? 
                    <div className="cd6 cm4">
                        <h4>{subtitle}</h4>
                    </div>
                : ""}
            </div>
            <div className="dotsContent">
                <div className="container dots flex-row">
                    <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                    <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                    <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                </div>
                <div className="container content flex-row">
                    {pointContent?.map((item, i) => {
                        return (
                            <div className="info flex-col cd4 cm3" key={i}>
                                <Image src={findImageUrl(item.icon, 'url')} width={imageWidth} height={imageHeight} quality={100} alt={item.pointName}/>
                                <p className="name">{item.title}</p>
                                <p className="text">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {additional ? <div className="container additional">
                <div className="cd-s-4"></div>
                <div className="cd8 cm4">
                    <p>{additional}</p>
                </div>
            </div> : ''}
        </section>
    )}

    // TYPE 4 (ONLY FOR VIDEOS SUPPORT)
    if ( type === 4 ) {
        return (
            <section id='services' className='about about-4 flex flex-col'>
                <div className="container text justify-between">
                    {title ? <div className="cd4 cm4"><div className="title align-start"><h2>{title}</h2></div></div>: ""}
                    {description ? 
                        <div className="cd6 cm4">
                            <h4>{description}</h4>
                        </div>
                    : ""}
                </div>
                <div className="iconsContent">
                    <div className="container content flex-row">
                        {pointContent?.map((item, i) => {
                            return (
                                <div className="info cb-slow flex-col cd4 cm4" key={i}>
                                    {/* <div className="videoWrapper mb relative ov-hidden">
                                        <div className="videoBack">
                                            <video playsInline autoPlay loop muted width="100%" height="auto" src={item.iconLink} />
                                        </div>
                                    </div> */}
                                    <Image src={findImageUrl(item, "url")} width={imageWidth} height={imageHeight} quality={100} alt={item.title}/>
                                    <h3 className="name">{item.title}</h3>
                                    <div 
                                        className="text"
                                        dangerouslySetInnerHTML={{ __html: item.description }}>
                                    </div>
                                </div>
                            )
                        })}
                        {/* {additional && (
                            <div className="additional cd6 cm4">
                                <p>{additional}</p>
                            </div> 
                        )} */}
                    </div>
                </div>
            </section>
        )}

        if ( type === 5 ) {
            return (
                <section className='about about-3 flex flex-col'>
                    <div className="container text justify-between">
                        <div className="cd4 cm4">
                            <div className="title align-start">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="cd6 cm4">
                            <h3>{description}</h3>
                        </div>
                    </div>
                    <div className="dotsContent">
                        <div className="container dots flex-row">
                            <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                            <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                            <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                        </div>
                        <div className="container content flex-row">
                            {pointContent?.map((item, i) => {
                                return (
                                    <div className="info flex-col cd4 cm3" key={i}>
                                        {/* <Image src={item.iconLink} width={imageWidth} height={imageHeight} quality={100} alt={item.pointName}/> */}
                                        <h3 className="name">{item.title}</h3>
                                        <div 
                                            className="text"
                                            dangerouslySetInnerHTML={{ __html: item.description }}>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}
}

export default About
import React, { useContext } from 'react';
import Link from "next/link";
import useWindowDimensions from './hooks/useWindowDimensions'
import Button from './atoms/Button.jsx';
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl'

export default function ItemsCards(props) {

    const btnText = 'Записаться на консультацию'

    const [width] = useWindowDimensions()
    
    const { CardsBlog, slug, title, type, images, totalViews, sourceLink, sourceText } = props

    function scrollTo(par) {
      let el = document.getElementById(par)
      if (el) {
        el.scrollIntoView({ block: 'start' });
        width > 800 ? window.scrollBy(0, -70) : window.scrollBy(0, -50);
      }
    }

    if (type === 1) {
        return (
            <section className="ItemCards ItemCards-1">
                <div className="flex flex-col w-full">
                    <div className="itemCardsTitle">
                        <h4>{title}</h4>
                    </div>
                    <div className={"cards w-full flex-wrap flex" + (width > 800 ? ' flex-row' : ' flex-col ')}>
                        {CardsBlog?.map((m, i) => {
                            return <Link href="/" className={'cd6 cm4 pl0 pr0 ' + (i + 1 === CardsBlog.length ? ' ' : ' mbm')} key={i}>  
                                <div className={'flex flex-col cb-mid'} key={i}>
                                        <h3 className='mbs subtitle'>{m.subtitle}</h3>
                                        <p>{m.text}</p>
                                    </div>
                                </Link>
                        })}
                    </div>
                </div>
            </section>
        )
    }
    if (type === 2) {
        return (
            <section className="ItemCards ItemCards-2">
                <div className="flex flex-col w-full">
                    <div className={"cards w-full flex-wrap flex" + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {CardsBlog?.map((m, i) => {
                            return  <div className={'flex items-center cd6 cm4 pl0 pr0 flex-row my'} key={i}>
                                        <div className='image-wrapper mr'>
                                            <Image 
                                                src={'/images/bal.jpg'}
                                                width={800} 
                                                height={800} 
                                                quality={100} 
                                                alt={m.name}
                                                className='photo'
                                                >
                                            </Image>
                                        </div>
                                        { m.description && <p className=''>{m.description}</p> }
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
    if (type === 3) {
        return (
            <section className="ItemCards ItemCards-3">
                <div className="w-full flex flex-col">
                    <div className={"cards flex flex-wrap " + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {CardsBlog?.map((m, i) => {
                            return  <div className={'cardsItem flex pl0 pr0 flex-col cursor-pointer'} key={i}>
                                        <div className='image-wrapper relative mbs'>
                                            <Link href={`/articles/${slug}`}>
                                            <Image 
                                                src={findImageUrl(m.image, 'url')}
                                                width={800} 
                                                height={800} 
                                                quality={100} 
                                                alt={m.name}
                                                className='photo'
                                                />
                                            </Link>
                                            <Button
                                                type={3}
                                                text={sourceText}
                                                href={sourceLink}
                                                absolute={true}
                                            />
                                        </div>
                                        <Link href={`/articles/${slug}`}>
                                        <div className={'flex flex-col cb-mid'} key={i}>
                                            <h3 className='mbs subtitle'>{m.subtitle}</h3>
                                            <p className='description'>{m.description}</p>
                                        </div>
                                        </Link>
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
    if (type === 4) {
        return (
            <section className="ItemCards ItemCards-4">
                <div className="w-full flex flex-col">
                    <div className={"cards w-full flex " + (width > 800 ? ' flex-row flex-wrap ' : ' flex-col-reverse')}>
                        {CardsBlog?.map((m, i) => {
                            return  <div className={'cardsItem flex w-full pl0 pr0 justify-between ' + (width > 800 ? ' flex-row ' : ' flex-col-reverse ')} key={i}>
                                        <div className={'flex flex-col cd6 cm4 pl0 pr0 cb-mid'} key={i}>
                                            <h3 className='mbs subtitle'>{m.subtitle}</h3>
                                            <p className='description'>{m.description}</p>
                                            <div className="consultationButton cursor-pointer cb-mid flex w-full justify-center items-center">
                                                <Link href="/" onClick={() => {
                                                    const timer = setTimeout(() => {
                                                        scrollTo("form")
                                                    }, 1500);
                                                    return () => clearTimeout(timer);
                                                }}>{btnText}</Link>

                                            </div>
                                    </div>
                                    <div className='img-wrapper relative cm4 pl0 pr0 '>
                                        <Image 
                                            src={'/images/bal.jpg'}
                                            width={800} 
                                            height={800} 
                                            quality={100} 
                                            alt={m.name}
                                            className='photo'
                                            >
                                        </Image>
                                    </div>
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
    if (type === 5) {
        return (
            <section className="ItemCards ItemCards-5">
                <div className="container cd10 cm4 pl0 pr0 flex flex-col">
                    <div className={"cards w-full flex flex-wrap " + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {CardsBlog?.map((m, i) => {
                            return  <div className={'cardsItem flex w-full pl0 pr0 flex-col'} key={i}>
                                        <div className={'flex flex-col cb-mid'} key={i}>
                                            <div className="topInfo flex flex-row mbs">
                                                <p className={"categories " + (width > 800 ? ' mr' : ' ')}>{m.category}</p>
                                                <p className={"date " + (width > 800 ? ' mr' : ' ')}>{m.date}</p>
                                                <div className="flex flex-row items-center">
                                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1105_12282)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9114 6.374C14.9699 6.25139 14.9988 6.11679 14.9959 5.98098C14.9929 5.84517 14.9582 5.71195 14.8944 5.592C14.7676 5.36107 14.6225 5.14069 14.4604 4.933C14.3824 4.827 14.2944 4.708 14.1914 4.563C12.6664 2.402 10.4084 1 7.98141 1C5.57441 1 3.33441 2.381 1.80941 4.506C1.72791 4.61927 1.64557 4.73194 1.56241 4.844C1.35941 5.117 1.21441 5.313 1.06841 5.587C1.00369 5.70883 0.968524 5.84417 0.965745 5.98209C0.962966 6.12002 0.992651 6.25666 1.05241 6.381L1.05341 6.383C1.33441 6.929 1.66341 7.338 2.11841 7.901C3.63741 9.786 5.73941 11 7.98141 11C10.2644 11 12.4004 9.743 13.9214 7.803L14.0054 7.695C14.3904 7.205 14.6684 6.85 14.9114 6.374ZM0.185406 5.12C-0.0345939 5.45 -0.0875939 6.35 0.185406 6.839C0.555406 7.561 0.869406 7.949 1.28041 8.455L1.33941 8.528C3.13641 10.76 5.47541 12 7.98141 12C10.4864 12 12.9084 10.717 14.7094 8.42C14.7714 8.34 14.8314 8.264 14.8914 8.19C15.2114 7.789 15.4944 7.433 15.8034 6.83C16.1284 6.2 15.9984 5.5 15.7814 5.126C15.6208 4.83215 15.4326 4.55423 15.2194 4.296C15.1414 4.195 15.0664 4.099 14.9964 4C13.1934 1.448 10.4864 0 7.98041 0C5.47541 0 2.79941 1.41 0.995406 3.923C0.932406 4.01 0.868406 4.095 0.803406 4.181C0.570334 4.4761 0.362913 4.79057 0.183406 5.121L0.185406 5.12ZM9.99941 6C9.99941 6.53043 9.78869 7.03914 9.41362 7.41421C9.03855 7.78929 8.52984 8 7.99941 8C7.46897 8 6.96027 7.78929 6.58519 7.41421C6.21012 7.03914 5.99941 6.53043 5.99941 6C5.99941 5.46957 6.21012 4.96086 6.58519 4.58579C6.96027 4.21071 7.46897 4 7.99941 4C8.52984 4 9.03855 4.21071 9.41362 4.58579C9.78869 4.96086 9.99941 5.46957 9.99941 6ZM10.9994 6C10.9994 6.79565 10.6833 7.55871 10.1207 8.12132C9.55812 8.68393 8.79506 9 7.99941 9C7.20376 9 6.4407 8.68393 5.87809 8.12132C5.31548 7.55871 4.99941 6.79565 4.99941 6C4.99941 5.20435 5.31548 4.44129 5.87809 3.87868C6.4407 3.31607 7.20376 3 7.99941 3C8.79506 3 9.55812 3.31607 10.1207 3.87868C10.6833 4.44129 10.9994 5.20435 10.9994 6Z" fill="#494646"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1105_12282">
                                                        <rect width="16" height="12" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <p className='views'>{totalViews}</p>
                                                </div>
                                            </div>
                                            <h3 className='mbs subtitle'>{m.subtitle}</h3>
                                            <p className='mb description'>{m.description}</p>
                                        </div>                               
                                        <div className='image-wrapper relative mbs'>
                                            <Image 
                                                src={findImageUrl(m.image, 'url')}
                                                width={800} 
                                                height={800} 
                                                quality={100} 
                                                alt={m.name}
                                                className='photo'
                                                >
                                            </Image>

                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
    if (type === 6) {
        return (
            <section className="ItemCards ItemCards-6">
                <div className="container cd10 cm4 pl0 pr0 flex flex-col">
                    <div className={"cards w-full flex flex-wrap " + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {itemsCards?.map((m, i) => {
                            return  <div className={'cardsItem flex w-full pl0 pr0 flex-col'} key={i}>
                                        <div className='image-wrapper relative mbs'>
                                            <Image 
                                                src={'/images/person.jpg'}
                                                width={800} 
                                                height={800} 
                                                quality={100} 
                                                alt={m.name}
                                                className='photo'
                                                >
                                            </Image>
                                            <Button
                                                type={2}
                                                text={'Источник'}
                                                href="/"
                                                absolute={true}
                                            />
                                        </div>
                                        <div className={'flex flex-col cb-mid'} key={i}>
                                            <h3 className='mbs subtitle'>{m.subtitle}</h3>
                                            <p className='description'>{m.description}</p>
                                    </div>
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
    if (type === 7) {
        return (
            <section className="ItemCards ItemCards-5">
                <div className="container cd10 cm4 pl0 pr0 flex flex-col">
                    <div className={"cards w-full flex flex-wrap " + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {CardsBlog?.map((m, i) => {
                            return  <div className={'cardsItem flex w-full pl0 pr0 flex-col'} key={i}>
                                        <div className={'flex flex-col cb-mid'} key={i}>
                                            <div className="topInfo flex flex-row mbs">
                                                <p className={"categories " + (width > 800 ? ' mr' : ' ')}>{m.category}</p>
                                                <p className={"date " + (width > 800 ? ' mr' : ' ')}>{m.date}</p>
                                                <div className="flex flex-row items-center">
                                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1105_12282)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9114 6.374C14.9699 6.25139 14.9988 6.11679 14.9959 5.98098C14.9929 5.84517 14.9582 5.71195 14.8944 5.592C14.7676 5.36107 14.6225 5.14069 14.4604 4.933C14.3824 4.827 14.2944 4.708 14.1914 4.563C12.6664 2.402 10.4084 1 7.98141 1C5.57441 1 3.33441 2.381 1.80941 4.506C1.72791 4.61927 1.64557 4.73194 1.56241 4.844C1.35941 5.117 1.21441 5.313 1.06841 5.587C1.00369 5.70883 0.968524 5.84417 0.965745 5.98209C0.962966 6.12002 0.992651 6.25666 1.05241 6.381L1.05341 6.383C1.33441 6.929 1.66341 7.338 2.11841 7.901C3.63741 9.786 5.73941 11 7.98141 11C10.2644 11 12.4004 9.743 13.9214 7.803L14.0054 7.695C14.3904 7.205 14.6684 6.85 14.9114 6.374ZM0.185406 5.12C-0.0345939 5.45 -0.0875939 6.35 0.185406 6.839C0.555406 7.561 0.869406 7.949 1.28041 8.455L1.33941 8.528C3.13641 10.76 5.47541 12 7.98141 12C10.4864 12 12.9084 10.717 14.7094 8.42C14.7714 8.34 14.8314 8.264 14.8914 8.19C15.2114 7.789 15.4944 7.433 15.8034 6.83C16.1284 6.2 15.9984 5.5 15.7814 5.126C15.6208 4.83215 15.4326 4.55423 15.2194 4.296C15.1414 4.195 15.0664 4.099 14.9964 4C13.1934 1.448 10.4864 0 7.98041 0C5.47541 0 2.79941 1.41 0.995406 3.923C0.932406 4.01 0.868406 4.095 0.803406 4.181C0.570334 4.4761 0.362913 4.79057 0.183406 5.121L0.185406 5.12ZM9.99941 6C9.99941 6.53043 9.78869 7.03914 9.41362 7.41421C9.03855 7.78929 8.52984 8 7.99941 8C7.46897 8 6.96027 7.78929 6.58519 7.41421C6.21012 7.03914 5.99941 6.53043 5.99941 6C5.99941 5.46957 6.21012 4.96086 6.58519 4.58579C6.96027 4.21071 7.46897 4 7.99941 4C8.52984 4 9.03855 4.21071 9.41362 4.58579C9.78869 4.96086 9.99941 5.46957 9.99941 6ZM10.9994 6C10.9994 6.79565 10.6833 7.55871 10.1207 8.12132C9.55812 8.68393 8.79506 9 7.99941 9C7.20376 9 6.4407 8.68393 5.87809 8.12132C5.31548 7.55871 4.99941 6.79565 4.99941 6C4.99941 5.20435 5.31548 4.44129 5.87809 3.87868C6.4407 3.31607 7.20376 3 7.99941 3C8.79506 3 9.55812 3.31607 10.1207 3.87868C10.6833 4.44129 10.9994 5.20435 10.9994 6Z" fill="#494646"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1105_12282">
                                                        <rect width="16" height="12" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <p className='views'>{m.views}</p>
                                                </div>
                                            </div>
                                            <h3 className='mbs subtitle'>{m.subtitle}</h3>
                                            <p className='mb description'>{m.description}</p>
                                        </div>                               
                                        <div className='image-wrapper relative mbs'>
                                            <Image 
                                                src={'/images/bal.jpg'}
                                                width={800} 
                                                height={800} 
                                                quality={100} 
                                                alt={m.name}
                                                className='photo'
                                                >
                                            </Image>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }

}



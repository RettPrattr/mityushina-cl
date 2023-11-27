import useWindowDimensions from './hooks/useWindowDimensions'
import { React, useState, useEffect, } from 'react'
import Link from "next/link";
import findImageUrl from './utils/findImageUrl';
import Image from 'next/image';
import QuestionModal from './QuestionModal';


export default function BrandFooter(props){

    const [currentUrl, setCurrentUrl] = useState('/')

    const [show, setShow] = useState(false)
    const [width] = useWindowDimensions()
    const [questionModal, setQuestionModal] = useState(false)

    const { LayoutLinks, policy, rights, email, madeBy, agreement, bottomText, chubLogo, footerLogo } = props.props

    function scrollTo(par) {
        document.getElementById(par).scrollIntoView({ block: 'start' });
        width > 800 ? window.scrollBy(0, -70) : window.scrollBy(0, 0);
    }

    
    useEffect(() => {
            (async () => {
                if (typeof window !== "undefined") {
                    if (window.location.href) {
                        const curUrl = window.location.href
                        const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
                        const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
                        setCurrentUrl(clearUrl2)
                    }
                  }
              })()
    }, [])

        return(
            <footer className={"brandFooter"}>
                <QuestionModal isActive={questionModal} setIsActive={setQuestionModal}/>
                <div className={"container cd10 cm4 pl0 pr0 flex flex-col" }>
                    <div className={"flex items-start h-full" + (width > 800 ? ' flex-row justify-between ' : ' flex-col ' )}>
                        <div className={"flex footerCol footerCol-1 " + (width > 800 ? ' flex-col ' : ' flex-col ')}>
                            <div className="logo">
                                <Link href={'/'} className='flex items-center'>
                                    <Image quality={100} width={200} height={200} src={findImageUrl(footerLogo, 'url')} alt='logo' />
                                </Link>
                            </div>

                            {width > 800 ? <>
                                <p className="rightsText" dangerouslySetInnerHTML={{ __html: rights }}/>
                                <p className='websiteText'>{'© 2023 mityushina.ru'}</p>
                                <p className='bottomText' dangerouslySetInnerHTML={{ __html: bottomText }} />
                                </> : ''}
                        </div>
                        <div className="flex footerCol footerCol-2 flex-col layoutLinks">
                            {LayoutLinks?.map((n, i) => {
                                const indexLink = <a id={n.ident} onClick={() => {setShow(false); scrollTo(n.link)}} key={i} className={'layoutLink' + (n.ident === "aboutLink" && currentUrl !== "/blog" ? ' active ' : ' ')}  >{n.text}</a>;
                                const blogLink = <Link href="/" id={n.ident} onClick={() => {setShow(false);                                     
                                const timer = setTimeout(() => {
                                scrollTo(n.link)               
                            }, 1500);
                            return () => clearTimeout(timer);}} key={i} className={'layoutLink' + (n.ident === "aboutLink" && currentUrl !== "/blog" ? ' active ' : ' ')}  >{n.text}</Link>  
                            return n.href === "/blog" ? <Link key={i} className={'layoutLink ' }  href={n.href}>{n.text}</Link> : 
                             currentUrl === "/" ? indexLink : blogLink
                        })}
                        </div>
                        <div className="flex footerCol footerCol-3 flex-col">
                            <div className="consultationButton flex justify-center cb-mid cursor-pointer">
                                {width > 800 ? <a onClick={() => {setQuestionModal(!questionModal)}}>Задать вопрос психологу</a> : <Link href="/question">Задать вопрос психологу</Link>}
                            </div>
                            <a className='' href={"mailto:" + email}>{email}</a>
                            <div className="flex flex-row">
                                <a href={'https://instagram.com/mityushina_natalia?igshid=MzRlODBiNWFlZA=='} className='instLink' target='_blank' rel="noreferrer">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33832 11.0567C7.33832 9.02988 8.98042 7.38643 11.0066 7.38643C13.0328 7.38643 14.6758 9.02988 14.6758 11.0567C14.6758 13.0834 13.0328 14.7269 11.0066 14.7269C8.98042 14.7269 7.33832 13.0834 7.33832 11.0567ZM5.35484 11.0567C5.35484 14.179 7.88513 16.71 11.0066 16.71C14.1281 16.71 16.6584 14.179 16.6584 11.0567C16.6584 7.93428 14.1281 5.40326 11.0066 5.40326C7.88513 5.40326 5.35484 7.93428 5.35484 11.0567ZM15.5613 5.1791C15.5612 5.44041 15.6386 5.69587 15.7836 5.9132C15.9287 6.13052 16.1349 6.29994 16.3762 6.40004C16.6175 6.50013 16.883 6.5264 17.1393 6.47552C17.3955 6.42465 17.6309 6.29891 17.8157 6.11422C18.0005 5.92952 18.1263 5.69416 18.1774 5.4379C18.2285 5.18164 18.2024 4.91598 18.1026 4.67453C18.0027 4.43308 17.8335 4.22667 17.6163 4.08141C17.3992 3.93615 17.1439 3.85856 16.8826 3.85846H16.8821C16.5319 3.85862 16.1962 3.9978 15.9485 4.24542C15.7009 4.49303 15.5616 4.82885 15.5613 5.1791ZM6.55993 20.0183C5.48683 19.9695 4.90357 19.7907 4.51596 19.6396C4.00209 19.4395 3.63544 19.2012 3.24994 18.8161C2.86445 18.431 2.62582 18.0646 2.42665 17.5506C2.27555 17.163 2.0968 16.5794 2.04802 15.506C1.99466 14.3455 1.98401 13.9969 1.98401 11.0567C1.98401 8.1166 1.99554 7.76896 2.04802 6.60747C2.09689 5.53406 2.27696 4.9516 2.42665 4.56291C2.6267 4.04888 2.86497 3.68213 3.24994 3.29652C3.63491 2.91091 4.00121 2.67222 4.51596 2.47299C4.9034 2.32185 5.48683 2.14305 6.55993 2.09425C7.72012 2.04088 8.06863 2.03022 11.0066 2.03022C13.9446 2.03022 14.2934 2.04176 15.4546 2.09425C16.5277 2.14314 17.11 2.32326 17.4986 2.47299C18.0124 2.67222 18.3791 2.91144 18.7646 3.29652C19.1501 3.6816 19.3878 4.04888 19.5879 4.56291C19.739 4.95045 19.9177 5.53406 19.9665 6.60747C20.0199 7.76896 20.0305 8.1166 20.0305 11.0567C20.0305 13.9969 20.0199 14.3445 19.9665 15.506C19.9176 16.5794 19.738 17.1629 19.5879 17.5506C19.3878 18.0646 19.1495 18.4314 18.7646 18.8161C18.3796 19.2008 18.0124 19.4395 17.4986 19.6396C17.1111 19.7908 16.5277 19.9696 15.4546 20.0183C14.2944 20.0717 13.9459 20.0824 11.0066 20.0824C8.06731 20.0824 7.71977 20.0717 6.55993 20.0183ZM6.4688 0.11355C5.29708 0.166926 4.49642 0.352771 3.79719 0.624932C3.07304 0.90599 2.46002 1.28305 1.84744 1.89484C1.23485 2.50664 0.858867 3.1208 0.577891 3.84516C0.305807 4.54503 0.120016 5.34548 0.066656 6.51754C0.0124154 7.69145 0 8.06675 0 11.0567C0 14.0466 0.0124154 14.4219 0.066656 15.5958C0.120016 16.7679 0.305807 17.5683 0.577891 18.2681C0.858867 18.9921 1.23494 19.6069 1.84744 20.2185C2.45993 20.83 3.07304 21.2065 3.79719 21.4884C4.49774 21.7605 5.29708 21.9464 6.4688 21.9998C7.64298 22.0531 8.01756 22.0664 11.0066 22.0664C13.9956 22.0664 14.3708 22.054 15.5444 21.9998C16.7162 21.9464 17.5163 21.7605 18.216 21.4884C18.9397 21.2065 19.5532 20.8303 20.1658 20.2185C20.7783 19.6067 21.1535 18.9921 21.4353 18.2681C21.7074 17.5683 21.8941 16.7678 21.9465 15.5958C21.9999 14.421 22.0123 14.0466 22.0123 11.0567C22.0123 8.06675 21.9999 7.69145 21.9465 6.51754C21.8932 5.3454 21.7074 4.54459 21.4353 3.84516C21.1535 3.12125 20.7774 2.5076 20.1658 1.89484C19.5541 1.28208 18.9397 0.90599 18.2169 0.624932C17.5163 0.352771 16.7161 0.166045 15.5453 0.11355C14.3717 0.0601748 13.9965 0.046875 11.0075 0.046875C8.01844 0.046875 7.64298 0.059294 6.4688 0.11355Z" fill="white"/>
                                    </svg>
                                </a>
                                <a href={'https://t.me/mityushina_natalia'} className='tgLink' target='_blank' rel="noreferrer">
                                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.24088 8.2201C1.24088 8.2201 10.1925 4.44981 13.2971 3.1222C14.4873 2.5912 18.5233 0.891847 18.5233 0.891847C18.5233 0.891847 20.3861 0.148447 20.2308 1.95392C20.179 2.6974 19.7651 5.29941 19.3512 8.1139C18.7302 12.0967 18.0576 16.4511 18.0576 16.4511C18.0576 16.4511 17.9541 17.6725 17.0744 17.8849C16.1948 18.0973 14.7459 17.1415 14.4873 16.929C14.2802 16.7698 10.6065 14.3801 9.26115 13.2118C8.89893 12.8932 8.485 12.256 9.31285 11.5125C11.1757 9.76011 13.4006 7.5829 14.7459 6.20222C15.3669 5.56495 15.9878 4.07807 13.4006 5.88355C9.72685 8.48563 6.10479 10.9284 6.10479 10.9284C6.10479 10.9284 5.27687 11.4594 3.72457 10.9814C2.17221 10.5036 0.361182 9.86631 0.361182 9.86631C0.361182 9.86631 -0.880594 9.06977 1.24088 8.2201Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex footerCol footerCol-4 flex-col justify-between">
                            <div className="agreementAndPolicy flex flex-col">
                                <Link href="/offer">{agreement}</Link>
                                <Link href="/privacy">{policy}</Link>
                            </div>
                            {width > 800 ? '' : <div className="rights flex flex-col"><p className='pb0 mb0'>{'© 2023 mityushina.ru'}</p><p dangerouslySetInnerHTML={{__html: rights}}/></div>}
                            <div className="madeBy flex flex-row items-center">
                                <p className='mrs'>{madeBy}</p>
                                <Link href="https://www.chub1.com/" target='_blank' rel="noreferrer"><Image quality={100} width={200} height={200} className='chub-logo' src={findImageUrl(chubLogo, 'url')} alt='chub-logo'/></Link>
                            </div>
                        </div>
                    </div>
                    { width < 800 &&
                    <div className={"bottomText " + (width > 800 ? "text-center" : "text-left")}>
                        <p dangerouslySetInnerHTML={{ __html: bottomText }}/>
                    </div> }
                </div>
            </footer>
        )
}
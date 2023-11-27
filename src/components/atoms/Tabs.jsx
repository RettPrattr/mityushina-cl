import React, { useState, useMemo, useEffect } from 'react'
// import Project from '../pages/projects/Project'
import axios from 'axios';
import { values } from 'lodash'
import Image from 'next/image';
import Link from "next/link";
import useWindowDimensions from '../hooks/useWindowDimensions'
import AutoSlider from '@/components/atoms/AutoSlider'
import findImageUrl from '@/components/utils/findImageUrl'



const TabsFilter = (props) => {



    const {title, tabsDataPath, tabsCategoriesPath, type} = props

    // const {commonProps, optionalProps, titleContent} = Content

    const [width, height] = useWindowDimensions();




    const getContent = async () => {
        await axios.get(`${process.env.API_LINK}/api/${tabsDataPath}/?populate=deep&image&sort[0]=id`)
        .then((response) => {
            // console.log(response, "YYYYYYYYYYYYY")
            const content = response.data
            console.log("RESP PROJECT" , content?.data)
            tabsDataPath === "fake-infos" ? setActualContent(content.data[0]) : setActualContent(content?.data)
            setContent(content.data)
        })
    }

    const getCategories = async () => {
        await axios.get(`${process.env.API_LINK}/api/${tabsCategoriesPath}/?populate=*`)
        .then((response) => {
            // console.log(response, "YYYYYYYYYYYYY")
            const categories = response.data
            setCategories(categories)
            setActiveTab(categories.data[3])
        })
    }

    useEffect(() => {
        getContent()
        getCategories()
    }, [])


    //// СДЕЛАТЬ ТУТ ПОТОМ УСЛОВИЕ ДЛЯ ОПРЕДЕЛЕНИЯ СПИСКА КАТЕГОРИЙ


    const [actualContent, setActualContent] = useState('')
    const [activeTab, setActiveTab] = useState('');
    const [categories, setCategories] = useState('')
    const [content, setContent] = useState("")


    // console.log("PROJECTS", projects)


    const handleClick = (el) => {
        console.log(el, content)
        setActiveTab(el)
        let tempFilter = [];
        let tempEl;
        if (el.attributes.name === "All") {setActualContent(content)}
        // console.log(typeCategories, actualContent, "TVAR")
        if (el.attributes.name !== 'All') {
            content?.map((item) => {
                if (tabsCategoriesPath === "fake-categories") {
                    item?.attributes.fake_categories?.data?.map((obj) => {
                        // if (Object.values(obj).includes(el.attributes.name) === true) {
                        // 	tempFilter.push(item)
                        // }
                        // console.log(obj.attributes.name, el.attributes.name, "HANDLE")
                        if (obj?.attributes.name === el?.attributes.name) {
                            tempEl = item
                        }
                        return tempEl
                    })
                } else if (tabsCategoriesPath === "main-categories") {
                    item?.attributes.main_categories?.data?.map((obj) => {
                        // if (Object.values(obj).includes(el.attributes.name) === true) {
                        // console.log("MAIN", obj, el)
                        // 	tempFilter.push(item)
                        // }
                        //console.log(obj?.attributes.name, "HANDLE", el?.attributes.name)
                        if (obj?.attributes.name === el?.attributes.name) {
                            tempFilter.push(item)
                        }
                        return tempFilter
                    })
                }
            })
            //console.log(tempFilter, "FILTERRRRRR")
            tabsCategoriesPath === "main-categories" ? setActualContent(tempFilter) : setActualContent(tempEl)
        }


    }



	// const handleClick = (el) => {
	// 	setActiveTab(el)
    //     console.log(Content[0].main_categories.data[0].attributes.name)
	// 	// let tempFilter = Content?.filter(f => f.main_categories.data.name === el.attributes.name)
    //     let tempFilter = Content?.filter(f => f.main_categories?.data?.attributes.name === el.attributes.name)
	// 	setActualContent(tempFilter)
    //     // console.log(el.attributes.name, Content, tempFilter)
	// }

    if (type === 1 && actualContent) {
        return (
            <div className='flex flex-col tabs tabs-1 container'>
                <div className="title cd12">
                    <h2>{title}</h2>
                </div>
                <div className={'flex-row flex tabs-nav cd12' + (width > 800 ? ' ' : ' flex-wrap')}>
                    {categories?.data?.map((item, i) => (
                        <li key={i} className='tabs-item' >
                            <a className={`font-1-bold tabs-button ${activeTab !== null && (activeTab === item) ? 'active' : ''}`} onClick={() => handleClick(item)}>
                                {item.attributes.name}
                            </a>
                        </li>
                    ))}
                </div>
                {/* <div className={"flex flex-row-" + (activeTab !== dataAboutImg.data.attributes.Tabs[0].CategoryName ? 'reverse tabs-content-reverse' : ' tabs-content')}>
                    <div className="photo50">
                        <Image
                            src={item.src}
                            width={700}
                            height={400}
                            quality={100}
                            alt={''}>
                        </Image>
                    </div>
                    <div className="text50 flex">
                        <p className='font-1'>{actualContent[0].TextOfTab}</p>
                    </div>
                </div> */}
                <div className="flex flex-row tabsItems-container">
                    {actualContent?.map((item, i) => {
                            // console.log(item.attributes.images, findImageUrl(item.attributes.images, 'url'), "TABS IMAGES")
                            return  <Link key={i} className="cd6 cm4 relative t0 l0 tabItem flex flex-col justify-between" href={`projects/${item.attributes.slug}`}>

                                        <div className="bc z-0 h-full relative ov-hidden">
                                            <div className="shadow absolute t0 h-full"></div>
                                            <Image
                                                src={findImageUrl(item.attributes.images, 'url')}
                                                width={2000}
                                                height={2000}
                                                quality={100}
                                                alt={''}>
                                            </Image>
                                            {/* <AutoSlider 
                                                images={item.images}
                                            /> */}
                                        </div>
                                        <div className={"top-content t0 absolute z-100 flex flex-row " + (width > 800 ? ' mm' : ' m')}>
                                                {item?.attributes.commonProps?.props.map((opt, i) => {
                                                    return <div key={i} className='flex flex-row'>
                                                                <p>{opt}</p>
                                                                <span className='dot'></span>
                                                            </div>
                                                })}
                                        </div>
                                        <div className={"bottom-content b0 absolute z-100 flex flex-col" + (width > 800 ? ' mm' : ' m')}>
                                            <h3 className={(width > 800 ? '' : 'mbs')}>{item.title}</h3>
                                            <div className="optionalProps flex flex-row flex-wrap">
                                                {item?.attributes.optionalProps?.props.map((opt, i) => {
                                                    return <div key={i} className='flex flex-row'>
                                                                <p>{opt}</p>
                                                                <span className='dot'></span>
                                                            </div>
                                                })}
                                            </div>
                                        </div>
                                    </Link>
                    })}
                </div>
            </div>
          )
    }
    if (type === 2 && actualContent) {
        return (
            <div className='flex flex-col tabs tabs-2 container'>
                <div className={'flex-row flex tabs-nav cd12 cm3 ' + (width > 800 ? ' mb' : ' flex-wrap')}>
                    {categories?.data?.map((item, i) => (
                        <li key={i} className={'tabs-item' + (width > 800 ? '' : '')} >
                            <a className={`font-1-bold tabs-button ${activeTab !== null && (activeTab === item) ? 'active' : ''}`} onClick={() => handleClick(item)}>
                                {item.attributes.name}
                            </a>
                        </li>
                    ))}
                </div>
                {/* <div className={"flex flex-row-" + (activeTab !== dataAboutImg.data.attributes.Tabs[0].CategoryName ? 'reverse tabs-content-reverse' : ' tabs-content')}>
                    <div className="photo50">
                        <Image
                            src={item.src}
                            width={700}
                            height={400}
                            quality={100}
                            alt={''}>
                        </Image>
                    </div>
                    <div className="text50 flex">
                        <p className='font-1'>{actualContent[0].TextOfTab}</p>
                    </div>
                </div> */}
                <div className="flex flex-row tabsItems-container">
                    <div className={"flex items-center" + (width > 800 ? ' flex-row' : ' flex-col')}>
                        <div className="cd6 cm4">
                            <Image 
                                quality={100} 
                                width={2000} 
                                height={2000} 
                                className={'photo'} 
                                src={findImageUrl(actualContent?.attributes.images, 'url')} 
                                alt={''}>

                            </Image>
                        </div>
                        <div 
                        className="descriptionRich cd6 cm4 pr0 mt"
                        dangerouslySetInnerHTML={{ __html: actualContent?.attributes.descriptionRich }}>
                        </div>
                    </div>
                    {/* {actualContent?.map((item, i) => {
                        return <div key={i} className={"flex items-center" + (width > 800 ? ' flex-row' : ' flex-col')}>
                            <div className="cd6 cm4">
                                <Image 
                                    quality={100} 
                                    width={2000} 
                                    height={2000} 
                                    className={'photo'} 
                                    src={findImageUrl(item.attributes.images, 'url')} 
                                    alt={''}>

                                </Image>
                            </div>
                            <div 
                            className="descriptionRich cd6 cm4 pr0 mt"
                            dangerouslySetInnerHTML={{ __html: item.attributes.descriptionRich }}>
                            </div>
                    </div>
                    })} */}
                </div>
            </div>
          )
    }
}

export default TabsFilter



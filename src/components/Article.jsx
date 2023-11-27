import React from 'react'
import Link from "next/link";
import useWindowDimensions from './hooks/useWindowDimensions'
import Button from './atoms/Button.jsx';
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl'
import findValue from './utils/findValue'


// const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel libero quis elit malesuada vestibulum sit amet et tortor. Curabitur vel sodales ex. Fusce lobortis dui est, at blandit eros egestas in. Donec viverra, justo eget tincidunt commodo, nisl sem eleifend lacus, at maximus lacus elit et neque. In eu risus pretium, dignissim dui eu, ornare nunc. Duis enim elit.'
// const text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel libero quis elit malesuada vestibulum sit amet et tortor. Curabitur vel sodales ex. Fusce lobortis dui est, at blandit eros egestas in. Donec viverra, justo eget tincidunt commodo, nisl sem eleifend lacus, at maximus lacus elit et neque. In eu risus pretium, dignissim dui eu, ornare nunc. Duis enim elit.'
// const text3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel libero quis elit malesuada vestibulum sit amet et tortor. Curabitur vel sodales ex. Fusce lobortis dui est, at blandit eros egestas in. Donec viverra, justo eget tincidunt commodo, nisl sem eleifend lacus, at maximus lacus elit et neque. In eu risus pretium, dignissim dui eu, ornare nunc. Duis enim elit.'
// const highlightedText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum dapibus eros quis lacinia. Vivamus accumsan dictum sem vitae semper. Morbi varius ante tempor nisi tempor volutpat. Sed facilisis lacinia.'
// const highlightedText2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum dapibus eros quis lacinia. Vivamus accumsan dictum sem vitae semper. Morbi varius ante tempor nisi tempor volutpat. Sed facilisis lacinia.'
// const imageText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales neque erat, ut laoreet risus euismod ut. Integer eu sollicitudin mi, at mattis libero. Aenean neque turpis, malesuada vitae gravida vel, feugiat sed diam. Phasellus ut enim vitae diam mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales neque erat, ut laoreet risus euismod ut. Integer eu sollicitudin mi, at mattis libero. Aenean neque turpis, malesuada vitae gravida vel, feugiat sed diam. Phasellus ut enim vitae diam mattis.'
// const customText = 'Привычка является процессом, с помощью которого убеждение трансформируется в наклонности, а мысль переходит в действие'
// const sourceText = 'журнал «Московский фигурист»'
// const sourceHref = '/'

const Article = (props) => {


    const {text1, text2, text3, highlightedText1, highlightedText2, imageText, customText, sourceText, sourceHref, customIcon, imageWithText, image, text4, category, date, views, totalViews} = props
    const [width] = useWindowDimensions()


  return (
      <section className={'article container cd10 pl0 pr0 cm4 flex ' + (width > 800 ? ' flex-row ' : ' flex-col')}>
            {width < 800 ? <div className="top flex flex-col mb">
                <p className='mb'>Источник:</p>
                <Link href={sourceHref}>{sourceText}</Link>
            </div> : ''}
          <div className="left-side flex flex-col ">
                {highlightedText1 && <div className="highlightedText highlightedText-1 mb">
                  <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: highlightedText1 }}></div>
              </div>}
                {text1 && <div className="text text-1 mb">
                  <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: text1 }}></div>
              </div>}
              <div className={"imageWithText imageWithText-1 mb flex " + (width > 800 ? ' flex-row ' : ' flex-col ')}>
                  <div className="image cd4 cm4 pl0 pr0 mr">
                      <Image quality={100} width={1000} height={1000} className={'photo '} src={findImageUrl(imageWithText, 'url')} alt={''}></Image>
                  </div>
                  <div className="imageText cd8 cm4 pl0 pr0">
                  <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: imageText }}></div>
                  </div>
              </div>
              {text2 && <div className="text text-2 mb">
                  <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: text2 }}></div>
              </div>}
              {highlightedText2 && <div className="highlightedText highlightedText-1 mb">
                  <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: highlightedText2 }}></div>
              </div>}
              {text3 && <div className="text text-3 mb">
                  <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: text3 }}></div>
              </div>}
                {image.data && <div className="image image-1 mb flex justify-center">
                  <div className="image cd4 cm4 pl0 pr0">
                      <Image quality={100} width={1000} height={1000} className={'photo '} src={findImageUrl(image, 'url')} alt={''}></Image>
                  </div>
              </div>}
              {text4 && <div className="text text-4 mb">
                  <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: text4 }}></div>
              </div>}
              <div className="tags flex flex-row ">
                <div className="bottomInfo flex flex-row mbs">
                    <p className={"categories " + (width > 800 ? ' mr' : ' mrs ')}>Теги: {category}</p>
                    <div className="flex flex-row items-center">
                        <p className='views'>{totalViews}</p>
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
                        
                    </div>
                </div>
              </div>
          </div>
            {width > 800 ? <div className={"right-side flex flex-col mb" + (width > 800 ? '' : ' mt')}>
                <div className="top flex flex-col mb">
                        <p className='mb'>Источник:</p>
                        <Link href={sourceHref}>{sourceText}</Link>
                </div>
              <div className="bottom flex flex-col mt">
                <Image 
                    src={findImageUrl(customIcon, 'url')}
                    width={800} 
                    height={800} 
                    quality={100} 
                    alt={''}
                    className='photo mb'
                    >
                </Image>
                <div className="customText">
                    <p dangerouslySetInnerHTML={{ __html: customText }}></p>
                </div>
              </div>
          </div> : ''}
          <div className={"flex w-full allArticlesLink ptm pbs " + (width > 800 ? ' justify-end' : ' justify-start')} >
                <Link href="/blog">
                    Все статьи
                </Link>
          </div>
      </section>
  )
}

export default Article

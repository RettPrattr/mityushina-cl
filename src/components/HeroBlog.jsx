import useWindowDimensions from './hooks/useWindowDimensions'
import { React, useState, useEffect, useRef } from 'react'


// function useIsInViewport(ref) {
//     const [isIntersecting, setIsIntersecting] = useState(false);
  
//     const observer = useMemo(
//       () =>
//         new IntersectionObserver(([entry]) =>
//           setIsIntersecting(entry.isIntersecting),
//         ),
//       [],
//     );
  
//     useEffect(() => {
//       observer.observe(ref.current);
  
//       return () => {
//         observer.disconnect();
//       };
//     }, [ref, observer]);
  
//     return isIntersecting;
//   }


  

const HeroBlog = () => {

    const ref = useRef(null);

    const isInViewport = useIsInViewport(ref);


    const [current, setCurrent] = useState()
    const [tagsIsOpen, setTagsOpen] = useState(false)
    const [searchIsOpen, setSearchOpen] = useState(false)
    const [searchInput, setSearchInput] = useState("");

    const [actualContent, setActualContent] = useState('')
    const [activeTab, setActiveTab] = useState('');
    const [categories, setCategories] = useState('')
    const [content, setContent] = useState("")
    
    // const [currentUrl, setCurrentUrl] = useState('/blog')

    const [width] = useWindowDimensions()

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
    //   if (searchInput.length > 0) {
    //       countries.filter((country) => {
    //       return country.name.match(searchInput);
    //   });
    //   }

    // useEffect(() => {
	// // 	if (window.location.href) {
	// // 		const curUrl = window.location.href
	// // 		const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
	// // 		const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
	// // 		setCurrentUrl(clearUrl2)
    // //   // console.log(currentUrl, "URL")
	// // 	}
    //     if (currentUrl === "/blog") {
    //         var publicationsLink = document.getElementById("publicationsLink");
    //         var aboutLink = document.getElementById("aboutLink");
    //         var priceLink = document.getElementById("priceLink");
    //         var blogLink = document.getElementById("blogLink");
    //         console.log('WORK1', blogLink)
    //         priceLink.classList.remove('active')
    //         publicationsLink.classList.remove('active')
    //         aboutLink.classList.remove('active')
    //         blogLink.classList.add('active')
    //       }
    // }, [])


    const handleTags = (el) => {
        setCurrent(el)

    }

    //console.log(isInViewport, " IS IN VIEW ")

    useEffect(() => {
        //console.log(isInViewport, " IS IN VIEW ")
    }, [isInViewport])



    const title = 'Блог'

    const blogCategories = ['Популярное', 'Новое', '#Воспитание', '#Психоанализ', '#Спорт', '#Психология' ]

  return (
    <section ref={ref} id="heroBlog" className='heroBlog flex flex-col cd10 cm4 pl0 pr0 container'>
        <div className="left-side pl0 pr0 cd3 cm4">
            <div className="title w-full flex flex-row justify-between items-center ">
                <h2>{title}</h2>
                {width > 800 ? ' ' : <div className="svg-container flex flex-row">
                    {tagsIsOpen ? <div className="open mr cursor-pointer" onClick={() => setTagsOpen(false)}>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.9868 0.995961L0.987462 0.99534C1.03198 0.953558 1.12583 0.886658 1.45447 0.845213C1.80111 0.801498 2.27175 0.8 3 0.8H17C17.7288 0.8 18.1996 0.801499 18.5463 0.845213C18.875 0.886668 18.9681 0.95354 19.0119 0.994717L19.0132 0.995961C19.0507 1.03105 19.1122 1.09915 19.1531 1.38389C19.1981 1.69716 19.2 2.12692 19.2 2.814V3.504C19.2 4.03931 19.199 4.38067 19.1718 4.64351C19.1465 4.88697 19.1038 4.99802 19.0554 5.07806L19.0547 5.07923C19.005 5.16172 18.9199 5.25937 18.7012 5.41115C18.4699 5.57168 18.1531 5.75076 17.6659 6.02466L17.6655 6.02489L14.7525 7.66489L14.7518 7.66533C14.7172 7.6848 14.6834 7.70391 14.6501 7.72267C14.1094 8.02754 13.7298 8.24162 13.4442 8.48804C12.8542 8.9841 12.4457 9.662 12.2826 10.4154C12.1996 10.7879 12.1998 11.2053 12.2 11.7799C12.2 11.8101 12.2 11.8408 12.2 11.872V14.542C12.2 15.5251 12.1976 16.1657 12.1263 16.6183C12.0589 17.0457 11.958 17.1144 11.9084 17.1454L11.9076 17.1458C11.8428 17.1864 11.7013 17.2485 11.2278 17.1361C10.7424 17.0209 10.1 16.772 9.13764 16.3961C8.67482 16.2149 8.38514 16.1005 8.17546 15.9921C7.98065 15.8915 7.92827 15.8316 7.90435 15.7979L7.90373 15.7971C7.88282 15.7677 7.84852 15.7107 7.82617 15.518C7.80124 15.303 7.8 15.016 7.8 14.543V11.873C7.8 11.8416 7.80001 11.8107 7.80002 11.7802C7.80025 11.2048 7.80042 10.7868 7.71701 10.4147C7.54665 9.64681 7.16159 9.01354 6.56255 8.49397C6.27348 8.24294 5.88994 8.02723 5.3407 7.71833C5.31014 7.70115 5.27907 7.68367 5.24747 7.66589C5.24745 7.66588 5.24743 7.66587 5.24742 7.66586L2.33447 6.02589L2.33431 6.0258C1.84724 5.75172 1.5305 5.57208 1.29965 5.4114C1.08144 5.25951 0.995409 5.16112 0.944586 5.07706C0.896089 4.99686 0.853437 4.88594 0.828225 4.64303C0.80099 4.38063 0.8 4.03983 0.8 3.505V2.815C0.8 2.12742 0.801929 1.69739 0.846892 1.38398C0.887761 1.09911 0.949347 1.03103 0.9868 0.995961L0.9868 0.995961Z" fill="#494646" stroke="#494646" strokeWidth="1.6"/>
                        </svg>
                    </div> : <div className="open mr cursor-pointer" onClick={() => setTagsOpen(true)}>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.9868 0.995961L0.987462 0.99534C1.03198 0.953558 1.12583 0.886658 1.45447 0.845213C1.80111 0.801498 2.27175 0.8 3 0.8H17C17.7288 0.8 18.1996 0.801499 18.5463 0.845213C18.875 0.886668 18.9681 0.95354 19.0119 0.994717L19.0132 0.995961C19.0507 1.03105 19.1122 1.09915 19.1531 1.38389C19.1981 1.69716 19.2 2.12692 19.2 2.814V3.504C19.2 4.03931 19.199 4.38067 19.1718 4.64351C19.1465 4.88697 19.1038 4.99802 19.0554 5.07806L19.0547 5.07923C19.005 5.16172 18.9199 5.25937 18.7012 5.41115C18.4699 5.57168 18.1531 5.75076 17.6659 6.02466L17.6655 6.02489L14.7525 7.66489L14.7518 7.66533C14.7172 7.6848 14.6834 7.70391 14.6501 7.72267C14.1094 8.02754 13.7298 8.24162 13.4442 8.48804C12.8542 8.9841 12.4457 9.662 12.2826 10.4154C12.1996 10.7879 12.1998 11.2053 12.2 11.7799C12.2 11.8101 12.2 11.8408 12.2 11.872V14.542C12.2 15.5251 12.1976 16.1657 12.1263 16.6183C12.0589 17.0457 11.958 17.1144 11.9084 17.1454L11.9076 17.1458C11.8428 17.1864 11.7013 17.2485 11.2278 17.1361C10.7424 17.0209 10.1 16.772 9.13764 16.3961C8.67482 16.2149 8.38514 16.1005 8.17546 15.9921C7.98065 15.8915 7.92827 15.8316 7.90435 15.7979L7.90373 15.7971C7.88282 15.7677 7.84852 15.7107 7.82617 15.518C7.80124 15.303 7.8 15.016 7.8 14.543V11.873C7.8 11.8416 7.80001 11.8107 7.80002 11.7802C7.80025 11.2048 7.80042 10.7868 7.71701 10.4147C7.54665 9.64681 7.16159 9.01354 6.56255 8.49397C6.27348 8.24294 5.88994 8.02723 5.3407 7.71833C5.31014 7.70115 5.27907 7.68367 5.24747 7.66589C5.24745 7.66588 5.24743 7.66587 5.24742 7.66586L2.33447 6.02589L2.33431 6.0258C1.84724 5.75172 1.5305 5.57208 1.29965 5.4114C1.08144 5.25951 0.995409 5.16112 0.944586 5.07706C0.896089 4.99686 0.853437 4.88594 0.828225 4.64303C0.80099 4.38063 0.8 4.03983 0.8 3.505V2.815C0.8 2.12742 0.801929 1.69739 0.846892 1.38398C0.887761 1.09911 0.949347 1.03103 0.9868 0.995961L0.9868 0.995961Z" stroke="#494646" strokeWidth="1.6"/>
                        </svg>
                    </div>}



                    {!searchIsOpen ? <div onClick={() => setSearchOpen(true)} className="searchMob cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 15L19 19M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z" stroke="#494646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                    </div> : ''}
                </div>}
            </div>
            {searchIsOpen ? <div className="search flex w-full flex-row items-center mb">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                            type="text"
                            placeholder="Поиск"
                            onChange={handleChange}
                            value={searchInput} 
                    />
                    <div onClick={() => setSearchOpen(false)} className="searchClose cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9085 5.41467L18.5872 6.09339L6.09669 18.583L5.41797 17.9048L17.9085 5.41467Z" fill="#363636"/>
                            <path d="M6.09669 5.41467L18.5872 17.9043L17.9085 18.5835L5.41797 6.09387L6.09669 5.41467Z" fill="#363636"/>
                        </svg>
                    </div>
                </div> : ''}
            {width < 800 ? <div className={"blogCategories flex flex-wrap" + (width > 800 ? ' flex-col ' : ' flex-row ')}>
                {tagsIsOpen === true && blogCategories?.map((bc, i) => {
                    return <div key={i} onClick={()=> setCurrent(bc)} className={"contextItem categoryItem withHover сb-mid flex items-center justify-center mrs " + (width > 800 ? ' ' : ' mbs ')}>
                        <p>{bc}</p>
                    </div>
                })}
            </div> : <div className={"blogCategories flex flex-wrap" + (width > 800 ? ' flex-col ' : ' flex-row ')}>
                {width > 800 ? <div className="search flex flex-row items-center mb">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                            type="text"
                            placeholder="Поиск"
                            onChange={handleChange}
                            value={searchInput} 
                    />
                </div> : ''}
                {blogCategories?.map((bc, i) => {
                    return <div key={i} onClick={()=> setCurrent(bc)} className={"contextItem categoryItem withHover сb-mid flex items-center justify-center mr " + (width > 800 ? ' mbs ' : ' mbs ')}>
                        <p>{bc}</p>
                    </div>
                })}
            </div>}
        </div>
        <div className="right-side flex flex-col cd7 cm4"></div>
    </section>
  )
}

export default HeroBlog

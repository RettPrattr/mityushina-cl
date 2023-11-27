import React, { useEffect } from 'react'
import Image from 'next/image'

const FixedSvg = () => {


  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") { 
        //console.log(window.scrollY, "SCROLL Y")
        var targetHeroBlog = document.getElementById("heroBlog");
        var fixedSvg = document.getElementById("fixedSvg");
        window.addEventListener("scroll", function() {
          if (targetHeroBlog && targetHeroBlog.offsetTop) { 
            // const offsetBottom = targetPrice.offsetTop + targetPrice.offsetHeight
            if (window.scrollY >= targetHeroBlog.offsetTop + 300) { 
              if (fixedSvg) {
                //console.log("SHOW")
                fixedSvg.classList.remove("hide")
              }
            } else {
              if (fixedSvg) {
                fixedSvg.classList.add("hide")
                //console.log("HIDE")
              }
            }
          } 
    
    
        })
      }
    })()
      // console.log("WORK")

  }, [])


  return (
    <section id="fixedSvg" className='fixedSvg hide'>
        <div className="">
            <Image
                className=''
                src='/images/white-logo.svg'
                // src={findImageUrl(images, 'url')}                                    
                width={700}
                height={400}
                quality={100}
                alt={''}
            />
        </div>
    </section>
  )
}

export default FixedSvg

import useWindowDimensions from './hooks/useWindowDimensions';
import Image from 'next/image'
import Flickity from 'react-flickity-component'
import findImageUrl from './utils/findImageUrl';



export default function SliderBlock (props) {

    const { images } = props

    const [width, height] = useWindowDimensions();

    //console.log("IMAGES", images)



    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
        // autoPlay: 2000
    }

    if (images?.data?.length === 1) {
        return (
            <section className={'SliderBlock'}>      
                
            <div
                className={'relative'} // default ''
            >
            {images?.data?.map((s, i) => {
                // console.log(slide.attributes.Slider)
                return (
                    // <div className="slider-slide">
                        <div key={i} className={'flex slider one-photo cd12 w-full items-center justify-center' + (width > 800 ? ' flex-row mx' : ' flex-col')}>
                            {/* <div className={"title cd4 cm4 flex flex-col justify-end" + (width > 800 ? '  mbl' : ' mb mt')}>
                                <Image quality={100} width={1000} className='logo mb' height={100} src='/images/image.webp'></Image>
                                <h2>{s.title}</h2>
                            </div> */}
                            <div className="cd12">
                                <Image
                                    className='photo'
                                    src={findImageUrl(s.attributes, 'url')}                               
                                    width={700}
                                    height={400}
                                    quality={100}
                                    alt={''}
                                />
                            </div>
                            {/* <div className={"description cd4 cm4 mtl" + + (width > 800 ? '  mtl' : ' mt mbm')}>
                                <h4>{s.description}</h4>
                            </div> */}
                        </div>
                    // {/* </div> */}
                )
            })}
            </div>
        </section>
        )
    } else if (images?.data?.length > 1) {
        return (
            <section className={'SliderBlock'}>      
                    
                <Flickity
                    className={'carousel relative'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate={true}
                >
                {images?.data?.map((s, i) => {
                    // console.log(slide.attributes.Slider)
                    return (
                        // <div className="slider-slide">
                            <div key={i} className={'flex slider w-full items-center justify-center' + (width > 800 ? ' flex-row mx' : ' flex-col')}>
                                {/* <div className={"title cd4 cm4 flex flex-col justify-end" + (width > 800 ? '  mbl' : ' mb mt')}>
                                    <Image quality={100} width={1000} className='logo mb' height={100} src='/images/image.webp'></Image>
                                    <h2>{s.title}</h2>
                                </div> */}
                                <div className="con">
                                    <Image
                                        className='photo'
                                        src={findImageUrl(s.attributes, 'url')}                               
                                        width={700}
                                        height={400}
                                        quality={100}
                                        alt={''}
                                    />
                                </div>
                                {/* <div className={"description cd4 cm4 mtl" + + (width > 800 ? '  mtl' : ' mt mbm')}>
                                    <h4>{s.description}</h4>
                                </div> */}
                            </div>
                        // {/* </div> */}
                    )
                })}
                </Flickity>
            </section>
        )
    }

    
}
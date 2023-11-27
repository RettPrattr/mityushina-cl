import useWindowDimensions from './hooks/useWindowDimensions'
import Image from 'next/image'
import Button from '../components/atoms/Button'
import Header from './Header';
import Flickity from 'react-flickity-component'
import findImageUrl from '@/components/utils/findImageUrl'

export default function PromoCover(props) {

    const { type, title, subtitle, text, slides, logo, image } = props

    const [width, height] = useWindowDimensions();



    // const slideNoSlider = [
    //     {
    //         src: 'case-inc88-slider-1',
    //         description: 'Lorem ipsum lorem ipsum dolores el amet de candido',
    //         title: 'Коллаборация ТЦ Неглинная и Сандуны'
    //     },
    //     {
    //         src: 'case-inc88-slider-2',
    //         description: 'We are creating a smarter, greener energy future, today',
    //         title: 'Коллаборация Капустин и Сандуны'
    //     },
    //     {
    //         src: 'case-inc88-slider-3',
    //         description: 'Technology that brings the utility to the customer',
    //         title: 'Коллаборация ТЦ Неглинная и Капустин'
    //     }
    // ]

    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
        // autoPlay: 2000
    }


    if (type === 1) {
        return (
            <section className={"promoCover promoCover-1 ov-hidden flex relative h-screen "  + (width > 800 ? ' flex-row' : ' flex-col-reverse')}>
                <div className='container cd6 cm4'>
                    <div className={"w-full flex flex-col container justify-between " + (width > 800 ? ' h-screen' : ' ')}>
                        {/* <div className="promo-header w-full flex flex-row">
                            <div className="logo-container">
                                <Image 
                                    quality={100} 
                                    width={1000} 
                                    className='logo' 
                                    height={100} 
                                    src='/images/image.webp'
                                >
                                </Image>
                            </div>
                        </div> */}

                        <div className="flex flex-col cm4 mtl promo-text-content">
                            <h3>{subtitle}</h3>
                            <h1>{title}</h1>
                            <p className={(width > 800 ? ' mt w-half' : 'mt w-full')}>{text}</p>
                        </div>
                        <Button
                            type={1}
                            className="mb0"
                            
                            
                            text="button"
                        />
                    </div>
                </div>
                <div className={"cd6 cm4 promo-image " + (width > 800 ? ' mb' : ' ')}>
                    <Image className={width > 800 ? 'two-angles-border' : 'base-br'} quality={100} width={2000} height={2000} src={findImageUrl(image, 'url')} alt={title}></Image>
                </div>
            </section>
        )
    }


    if (type === 2) {
        return (
            <section className='promoCover promoCover-2'>

                {slides?.length < 2 
                    ? <div className='flex flex-row container'>
                        <div className="title cd4 cm4 flex flex-col justify-end mbl">
                            <Image quality={100} width={1000} className='logo mb' height={100} src={findImageUrl(slides[0].logo, 'url')} alt={''}></Image>
                            <h2>{slides[0].title}</h2>
                        </div>
                        <div className="con cd4 cm4">
                            <Image
                                src={findImageUrl(slides[0].image, 'url')}
                                width={700}
                                height={400}
                                quality={100}
                                alt={''}
                            />
                        </div>
                        <div className="description cd4 cm4 mtl">
                            <h4>{slides[0].description}</h4>
                        </div>
                    </div>
                    :
                            <Flickity
                                className={'carousel relative'} // default ''
                                elementType={'div'} // default 'div'
                                options={flickityOptions} // takes flickity options {}
                                disableImagesLoaded={false} // default false
                                reloadOnUpdate={true}
                            >
                            {slides?.map((s, i) => {
                                // console.log(slide.attributes.Slider)
                                return (
                                    // <div className="slider-slide">
                                        <div key={i} className={'flex slider ' + (width > 800 ? ' flex-row' : ' flex-col')}>
                                            <div className={"title cd4 cm4 flex flex-col justify-end z-100" + (width > 800 ? '  mbl' : ' mb mt')}>
                                                <Image quality={100} width={1000} className='logo mb' height={100} src={findImageUrl(s.logo, 'url')} alt={''}></Image>
                                                <h2>{s.title}</h2>
                                            </div>
                                            <div className="con cd4 cm4 base-br">
                                                <Image
                                                    src={findImageUrl(s.image, 'url')}                                    
                                                    width={700}
                                                    height={400}
                                                    quality={100}
                                                    alt={''}
                                                />
                                            </div>
                                            <div className={"description cd4 cm4  " + (width > 800 ? '  mtl' : ' my')}>
                                                <h4>{s.description}</h4>
                                            </div>
                                        </div>
                                    // {/* </div> */}
                                )
                            })}
                        </Flickity>
                }
            </section>
        )
    }

    if (type === 3) {
        return (
            <section className="promoCover promoCover-3 relative">
                {slides?.length < 2 ? <div className='flex flex-row container'>
                    <div className="absolute t0 l0 w-full">
                        <Image
                            src={findImageUrl(slides[0].images, 'url')}
                            width={700}
                            height={400}
                            quality={100}
                            alt={''}
                        />
                    </div>
                    <div className="title cd4 cm4 flex flex-col justify-end mbl">
                        <Image quality={100} width={1000} className='logo mb' height={100} src={findImageUrl(slides[0].logo, 'url')} alt={''}></Image>
                        <h2>{slides[0].title}</h2>
                    </div>
                    <div className="description cd4 cm4 mtl">
                        <h4>{slides[0].description}</h4>
                    </div>
                </div> :
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate={true}
                    >
                        {slides?.map((s, i) => {
                            // console.log(slide.attributes.Slider)
                            return (
                                <div key={i} className={'flex ' + (width > 800 ? ' flex-row ' : ' flex-col ')}>
                                    <div className={"title cd4 cm4 flex flex-col justify-end " + (width > 800 ? ' mbl' : ' mb')}>
                                        <Image quality={100} width={1000} className='logo mb' height={100} src={findImageUrl(s.logo, 'url')} alt={''}></Image>
                                        <h2>{s.title}</h2>
                                    </div>
                                    <div className="con cd4 cm4">
                                        <Image
                                            src={findImageUrl(s.image, 'url')}  
                                            width={700}
                                            height={400}
                                            quality={100}
                                            alt={''}
                                        />
                                    </div>
                                    <div className={"description cd4 cm4 " + (width > 800 ? ' mtl' : ' mt')}>
                                        <h4>{s.description}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </Flickity>
                }
            </section>
        )
    }
}
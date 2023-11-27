import React from 'react';
import useWindowDimensions from './hooks/useWindowDimensions'


function Quote(props) {

    const { text1, text2, text3, text4, text3_1mob, text3_2mob, text3_3mob } = props

    // const text1 = 'Успехам в спорте сопутствует'
    // const text2 = 'постоянный стресс,'
    // const text3 = 'который может нивелировать «точка опоры» — своевременный контакт'
    // const text4 = 'со спортивным психологом.'

    const [width] = useWindowDimensions()

    
    //console.log("TEXT")

    // TYPE 1
    return (
        <section className={'quote flex flex-col  '}>
            <div className="cd10 cm4 container">
            <div className="text w-full flex flex-col">
                    <p className='text1'>{text1}</p>
                    <div className={"text-center text2 " + (width > 800 ? ' ' : '  w-full  text-right')}>
                        <p className=''>{text2}</p>
                    </div>
                    {width > 800 ? 
                        <div className="text3 text-end" dangerouslySetInnerHTML={{ __html: text3 }} /> 
                        :
                        <div className="">
                            <p className='text3_1'>{text3_1mob}</p>   
                        <div className="w-full text-center" dangerouslySetInnerHTML={{ __html: text3_2mob }}/>
                            {/* <p 
                                className="text3_2"
                                dangerouslySetInnerHTML={{ __html: text3_2mob }}>
                            </p> */}
                        <p className='text3_3'>{text3_3mob}</p>
                    </div>}
                    <p className={'text4 ' + (width > 800 ? 'text-center' : "text-start" )}>{text4}</p>
                    
                </div>
            </div>
        </section>
    )
}

export default Quote
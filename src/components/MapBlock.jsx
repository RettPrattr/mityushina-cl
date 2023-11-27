// import fb from '../assets/svg/socials/fb.svg'
// import inst from '../assets/svg/socials/inst.svg'
// import tg from '../assets/svg/socials/tg.svg'
// import vk from '../assets/svg/socials/vk.svg'
// import wa from '../assets/svg/socials/wa.svg'
// import mark from '../assets/svg/map-icon.svg'
// import mask from '../assets/svg/map-mask.svg'
// import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import SocialIcons from './atoms/SocialIcons.jsx';




export default function MapBlock(props) {

    const { title, description, phoneNumber, email, address } = props

 


    // console.log(props.data2)

    const defaultState = {
        center: [55.710129, 37.654610],
        zoom: 15,
        controls: []
    }



    return (
        <section className="map cd12 relative">
            <div className="container flex items-center flex-row w-full justify-between">
                <div className={'map__info cd5 cm4'}>
                    <h2 className="map__title">{title}</h2>
                    <p className="map__text">{description} </p>
                    <div className="map__group">
                        <div className="map__group-title">Телефон</div>
                        <a href={'tel:' + phoneNumber} className="map__group-link">{phoneNumber}</a>
                    </div>
                    <div className="map__group">
                        <div className="map__group-title">Почта</div>
                        <a href={"mailto:" + email} className="map__group-link">{email}</a>
                    </div>
                    <div className="map__group">
                        <p className="map__group-title">Адрес</p>
                        <p className="map__group-link">
                            {address}
                        </p>
                    </div>
                    <div className="map__group">
                        <div className="map__group-title">Мессенджеры и социальные сети</div>
                        <div className="map__group-socials flex">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
                <div className={'map__map relative w-full cd7 cm4'}>
                    {/* <img src={mask.src} className='map__mask block absolute' /> */}
                    <YMaps height={'440px'} query={{ apikey: 'fe365efb-ab51-440e-a7d1-c6b999dd3f87' }}>
                        <Map height={'440px'} defaultState={defaultState}>
                            <Placemark
                                geometry={[55.710129, 37.654610]}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageSize: [46, 69]
                                }} />
                            <ZoomControl options={{ float: "right" }} />
                        </Map>
                    </YMaps>


                </div>
            </div>
        </section>
    )
}
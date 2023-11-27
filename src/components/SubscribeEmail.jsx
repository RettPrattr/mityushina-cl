import React from 'react';
import Link from "next/link";
import useWindowDimensions from './hooks/useWindowDimensions'
import Button from './atoms/Button.jsx';
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage, useFormik, dirty, isValid } from 'formik';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";


export default function SubscribeEmail () {
    const [width] = useWindowDimensions()


    const title = 'Получите 1 час парковки в ТЦ Неглинная'

    const description = 'Оставьте свой e-mail, и вам сразу же придет qr-код на бесплатную парковку. А в дальнейшем мы будем делиться самыми свежими новостями, актуальными событиями и выгодными акциями'


    const schema = Yup.object({
		email: Yup.string()
				.min(16, 'Введите номер полностью')
				.test('existenceNumber',
					function(value) {

						// const arr = await fetchStrapiPhones()



						let emailsArr = ['dmitriikap@ya.ru'];
						
						// phonesData.data?.map((item) => {
						// 	phonesArr.push(item.attributes.phonenumber)
						// 	return phonesArr
						// })

						const booleanResult = !emailsArr.includes(value)
						// console.log(phonesData)
						// console.log(phonesArr)
						// console.log(booleanResult)
						// console.log(arr)
						return booleanResult === true ? true : this.createError({
							message: `Вы уже подписаны`,
							path: 'email', // Fieldname
						  })

					} 
				)
	  })


    return (
        <section className="SubscribeEmail">
            <div className="container flex flex-row">
                <div className="left flex flex-col">
                    <h3></h3>
                    <h2></h2>
                    <p></p>
                    <div className="input-and-submit">

                    </div>
                    <p className="small conditions">

                    </p>
                </div>
            </div>
        </section>
    )
}
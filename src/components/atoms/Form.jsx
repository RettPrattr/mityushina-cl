import { useFormik } from 'formik';
import * as Yup from "yup";
import { motion } from "framer-motion";
import MaskedInput from "react-text-mask";
import useWindowDimensions from '../hooks/useWindowDimensions';
import Link from 'next/link'
import Image from 'next/image'
import { AllContexts } from '@/components/context/Context'
import { useState, useEffect, useContext } from 'react';
import Button from './Button';
import { useRouter } from 'next/router';
import uidGeneration from '../utils/uidGeneration';


const phoneNumberMask = [
	// "+", "7", " ",
	/[\+]/,
	/[1-9]/,
	" ",
	/\d/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/
  ];

const Form = (props) => {

    const { title1, title2, email, agreement1, agreement2} = props


    const [togglePopup, setTogglePopup] = useState(false)
    const [isSchemaValid, setIsSchemaValid] = useState(false)

    const [disableInput1, setDisableInput1] = useState(true)
    const [focused1, setFocused1] = useState(false)
    const onFocus1 = () => setFocused1(true)
    const onBlur1 = () => setFocused1(false)
    const [onBlurOnce1, setOnBlurOnce1] = useState(false)

    const [disableInput2, setDisableInput2] = useState(true)
    const [focused2, setFocused2] = useState(false)
    const onFocus2 = () => { setFocused2(true) }
    const onBlur2 = () => setFocused2(false)
    const [onBlurOnce2, setOnBlurOnce2] = useState(false)

    const [disableInput3, setDisableInput3] = useState(true)
    const [focused3, setFocused3] = useState(false)
    const onFocus3 = () => setFocused3(true)
    const onBlur3 = () => setFocused3(false)
    const [onBlurOnce3, setOnBlurOnce3] = useState(false)

    const [disableInput4, setDisableInput4] = useState(true)
    const [focused4, setFocused4] = useState(false)
    const onFocus4 = () => setFocused4(true)
    const onBlur4 = () => setFocused4(false)
    const [onBlurOnce4, setOnBlurOnce4] = useState(false)

    const [disableInput5, setDisableInput5] = useState(true)
    const [focused5, setFocused5] = useState(false)
    const onFocus5 = () => setFocused5(true)
    const onBlur5 = () => setFocused5(false)
    const [onBlurOnce5, setOnBlurOnce5] = useState(false)

    const [inputValue, setInputValue] = useState('');


    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            setReasons([...reasons, {id: 110, text: inputValue}])
            setInputValue('')
        }
    }



    const [onBlurOnce6, setOnBlurOnce6] = useState(false)

    const [pseudoBtnDisable, setPseudoBtnDisable] = useState(false)


    const [ratesOnBlurOnce, setRatesOnBlurOnce] = useState(false)

    const [submitDelay, setSumbitDelay] = useState()
 
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const [choosenItems, setChoosenItems] = useState([''])
    const [currentUrl, setCurrentUrl] = useState('')

    const [width, height] = useWindowDimensions();

    const {reasons, setReasons, rates, setRate, setIsActive, setOrder} = useContext(AllContexts)

    const [showRates, setIsShowRates] = useState(false)

    const [listOfRates, setListOfRates] = useState([])


    const schema = Yup.object({
        name: Yup.string()
            .min(3, 'Минимальное количество символов: 3')
            .required('Обязательное поле'),
        age: Yup.number(),
        email: Yup.string().email('Введите корректный адрес')
            .min(6, 'Минимальное количество символов: 6')
            .required('Обязательное поле'),
        agreement2: Yup.boolean()
            .required()
            .oneOf([true]),
        mobilephone: Yup.string()
            .min(16, 'Введите номер полностью')
            .required('Обязательное поле')
    })


    async function fetchData() {
        const response = await fetch(`${process.env.API_LINK}/api/rates/?slug=&populate=deep,20&populate=image`)
        const data = await response.json()
        const ratesRes = data?.data[0]?.attributes.Rates
        return {ratesRes}
    }


    useEffect(() => {
        if (window.location.href) {
            const curUrl = window.location.href
            const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
            const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
            setCurrentUrl(clearUrl2)
        }
        (async () => {
            const data = await fetchData()
            setListOfRates(data.ratesRes)
          })()

    }, [])

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            mobilephone: '',
            email: '',
            agreement1: false,
            agreement2: false
        },
        validationSchema: schema,
        onSubmit: function (values) {
            setOrder({
                name: values?.name,
                age: values?.age,
                phoneNumber: values?.mobilephone,
                email: values?.email,
                tariff: rates[0],
                reasons: reasons,
                mailing: values?.agreement1,
                uid: uidGeneration()
            })

            setIsActive(true)
            if (width < 800) {window.scrollTo(0, 0)}
        }
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisableInput1(false)
            setDisableInput2(false)
            setDisableInput3(false)
            setDisableInput4(false)
            setDisableInput5(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [])


    const handleSchemaValue = (nameForm, numberForm, emailForm, agreementForm2) => {

        const obj = {
            name: nameForm,
            mobilephone: numberForm,
            email: emailForm,
            agreement2: agreementForm2,
        }

        setIsSchemaValid(schema.isValidSync(obj))

    }


    const resettingTimeout = (arg) => {
        arg === true ? setSumbitDelay(false) : ''
        const timer = setTimeout(() => {
            setSumbitDelay(true) 
        }, 3000);
        return () => clearTimeout(timer);
    }


    useEffect(() => {
        const timerFirst = setTimeout(() => {
            setSumbitDelay(true)
        }, 3000);
        return () => clearTimeout(timerFirst);
    }, [])

    const submitBtnHandler = () => {setTogglePopup(!togglePopup)}

    const firstChoiseHandler = (el) => {

        const item = document.getElementById(el)

        item.classList.contains("active") ? item.classList.remove("active") : item.classList.add("active")

        let arr = choosenItems

        if (arr?.includes(el)) {
            arr = arr.filter(item => item !== el)
            setChoosenItems(arr)
        } else {
            arr.push(el)
            setChoosenItems(arr)
        }


    }

    const removeReasonItem = (r, arr) => {
        let newArr = arr.filter(f => f !== r)
        setReasons(newArr)
    } 

    const removeRateItem = (r, arr) => {
        let newArr = arr.filter(f => f !== r)
        setRate(newArr)
    } 

    const addRateItem = (r) => {
        let newArr = [r]
        setRate(newArr)
    } 

    const secondChoiseHandler = (el) => {
        const allItemsNL = document.querySelectorAll('.secondChoise')
        const allItemsArr = Array.from(allItemsNL)
        allItemsArr.map((i) => i.classList.remove('active'))
        const item = document.getElementById(el)
        item.classList.contains("active") ? item.classList.remove("active") : item.classList.add("active")
    }


    return (
        <section id="form" className={"flex flex-col form container cd10 cm4" + (width > 800 ? ' mym ' : ' my ')}>
            {width > 800 ? <div className="cd10 cm4 title flex flex-col">
                <h2 className='title1'>{title1}</h2>
                <h2 className='title2'>{title2}</h2>
            </div> : <div className="cd10 cm4 title flex flex-col">
                <h2 className='title1'>{title1 + ' ' + title2}</h2>
            </div>}
            <div className="flex flex-row w-full">
                {width > 800 ? <div className="formLeftSide flex flex-col cd6 cm4">
                    <div className="flex flex-col">
                        <Link href={'/'} className='flex items-center logo'>
                            <Image quality={100} width={100} className='' height={100} src={'/images/darkedBlackLogo.svg'} alt=''/>
                        </Link>
                        <a className='email' href={"mailto:" + email}>{email}</a>
                        <div className="socialLinks flex flex-row">
                            <a href={''} className='instLink'>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.33832 11.0567C7.33832 9.02988 8.98042 7.38643 11.0066 7.38643C13.0328 7.38643 14.6758 9.02988 14.6758 11.0567C14.6758 13.0834 13.0328 14.7269 11.0066 14.7269C8.98042 14.7269 7.33832 13.0834 7.33832 11.0567ZM5.35484 11.0567C5.35484 14.179 7.88513 16.71 11.0066 16.71C14.1281 16.71 16.6584 14.179 16.6584 11.0567C16.6584 7.93428 14.1281 5.40326 11.0066 5.40326C7.88513 5.40326 5.35484 7.93428 5.35484 11.0567ZM15.5613 5.1791C15.5612 5.44041 15.6386 5.69587 15.7836 5.9132C15.9287 6.13052 16.1349 6.29994 16.3762 6.40004C16.6175 6.50013 16.883 6.5264 17.1393 6.47552C17.3955 6.42465 17.6309 6.29891 17.8157 6.11422C18.0005 5.92952 18.1263 5.69416 18.1774 5.4379C18.2285 5.18164 18.2024 4.91598 18.1026 4.67453C18.0027 4.43308 17.8335 4.22667 17.6163 4.08141C17.3992 3.93615 17.1439 3.85856 16.8826 3.85846H16.8821C16.5319 3.85862 16.1962 3.9978 15.9485 4.24542C15.7009 4.49303 15.5616 4.82885 15.5613 5.1791V5.1791ZM6.55993 20.0183C5.48683 19.9695 4.90357 19.7907 4.51596 19.6396C4.00209 19.4395 3.63544 19.2012 3.24994 18.8161C2.86445 18.431 2.62582 18.0646 2.42665 17.5506C2.27555 17.163 2.0968 16.5794 2.04802 15.506C1.99466 14.3455 1.98401 13.9969 1.98401 11.0567C1.98401 8.1166 1.99554 7.76896 2.04802 6.60747C2.09689 5.53406 2.27696 4.9516 2.42665 4.56291C2.6267 4.04888 2.86497 3.68213 3.24994 3.29652C3.63491 2.91091 4.00121 2.67222 4.51596 2.47299C4.9034 2.32185 5.48683 2.14305 6.55993 2.09425C7.72012 2.04088 8.06863 2.03022 11.0066 2.03022C13.9446 2.03022 14.2934 2.04176 15.4546 2.09425C16.5277 2.14314 17.11 2.32326 17.4986 2.47299C18.0124 2.67222 18.3791 2.91144 18.7646 3.29652C19.1501 3.6816 19.3878 4.04888 19.5879 4.56291C19.739 4.95045 19.9177 5.53406 19.9665 6.60747C20.0199 7.76896 20.0305 8.1166 20.0305 11.0567C20.0305 13.9969 20.0199 14.3445 19.9665 15.506C19.9176 16.5794 19.738 17.1629 19.5879 17.5506C19.3878 18.0646 19.1495 18.4314 18.7646 18.8161C18.3796 19.2008 18.0124 19.4395 17.4986 19.6396C17.1111 19.7908 16.5277 19.9696 15.4546 20.0183C14.2944 20.0717 13.9459 20.0824 11.0066 20.0824C8.06731 20.0824 7.71977 20.0717 6.55993 20.0183V20.0183ZM6.4688 0.11355C5.29708 0.166926 4.49642 0.352771 3.79719 0.624932C3.07304 0.90599 2.46002 1.28305 1.84744 1.89484C1.23485 2.50664 0.858867 3.1208 0.577891 3.84516C0.305807 4.54503 0.120016 5.34548 0.066656 6.51754C0.0124154 7.69145 0 8.06675 0 11.0567C0 14.0466 0.0124154 14.4219 0.066656 15.5958C0.120016 16.7679 0.305807 17.5683 0.577891 18.2681C0.858867 18.9921 1.23494 19.6069 1.84744 20.2185C2.45993 20.83 3.07304 21.2065 3.79719 21.4884C4.49774 21.7605 5.29708 21.9464 6.4688 21.9998C7.64298 22.0531 8.01756 22.0664 11.0066 22.0664C13.9956 22.0664 14.3708 22.054 15.5444 21.9998C16.7162 21.9464 17.5163 21.7605 18.216 21.4884C18.9397 21.2065 19.5532 20.8303 20.1658 20.2185C20.7783 19.6067 21.1535 18.9921 21.4353 18.2681C21.7074 17.5683 21.8941 16.7678 21.9465 15.5958C21.9999 14.421 22.0123 14.0466 22.0123 11.0567C22.0123 8.06675 21.9999 7.69145 21.9465 6.51754C21.8932 5.3454 21.7074 4.54459 21.4353 3.84516C21.1535 3.12125 20.7774 2.5076 20.1658 1.89484C19.5542 1.28208 18.9397 0.90599 18.2169 0.624932C17.5163 0.352771 16.7161 0.166045 15.5453 0.11355C14.3717 0.0601748 13.9965 0.046875 11.0075 0.046875C8.01844 0.046875 7.64298 0.059294 6.4688 0.11355Z" fill="#494646" />
                                </svg>
                            </a>
                            <a href={''} className='tgLink'>
                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.24088 8.2201C1.24088 8.2201 10.1925 4.44981 13.2971 3.1222C14.4873 2.5912 18.5233 0.891847 18.5233 0.891847C18.5233 0.891847 20.3861 0.148446 20.2308 1.95392C20.179 2.6974 19.7651 5.29941 19.3512 8.1139C18.7302 12.0967 18.0576 16.4511 18.0576 16.4511C18.0576 16.4511 17.9541 17.6725 17.0744 17.8849C16.1948 18.0973 14.7459 17.1415 14.4873 16.929C14.2802 16.7698 10.6065 14.3801 9.26115 13.2118C8.89893 12.8932 8.485 12.256 9.31285 11.5125C11.1757 9.76011 13.4006 7.5829 14.7459 6.20222C15.3669 5.56495 15.9878 4.07807 13.4006 5.88355C9.72685 8.48563 6.10479 10.9284 6.10479 10.9284C6.10479 10.9284 5.27687 11.4594 3.72457 10.9814C2.17221 10.5036 0.361182 9.86631 0.361182 9.86631C0.361182 9.86631 -0.880594 9.06977 1.24088 8.2201Z" fill="#494646" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div> : ''}
                <form onSubmit={formik.handleSubmit} id="tg" className='formRightSide cd5 cm4 '>
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>

                            <input
                                disabled={disableInput1}
                                autoComplete="off"
                                type="text"
                                name="name"
                                id="name"
                                placeholder=" "
                                className={'' + (formik.errors.name && onBlurOnce1 === true ? ' invalid ' : ' ')}
                                onFocus={(e) => {
                                    onFocus1(e)
                                    setDisableInput2(true)
                                    setDisableInput3(true)
                                    setDisableInput4(true)
                                    setDisableInput5(true)
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(e.target.value, formik.values.mobilephone, formik.values.email, formik.values.agreement1, formik.values.agreement2)
                                    }, 100);
                                    return () => clearTimeout(timer);
                                }
                                }
                                onBlur={(e) => {
                                    onBlur1(e)
                                    setDisableInput2(false)
                                    setDisableInput3(false)
                                    setDisableInput4(false)
                                    setDisableInput5(false)
                                    setOnBlurOnce1(true)
                                }}
                                value={formik.values.name}
                            />
                            <label
                                className={(focused1 === false && formik.values.name === '' ? 'label' : 'label animate') + (formik.errors.name && onBlurOnce1 === true ? ' invalid ' : ' ')}
                                htmlFor="name">
                                Ваше ФИО
                            </label>
                            <br />
                        </div>
                    </div>
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>

                            <input
                                disabled={disableInput2}
                                autoComplete="off"
                                type="text"
                                name="age"
                                id="age"
                                className={(formik.errors.age && onBlurOnce2 === true ? ' invalid ' : ' ')}
                                placeholder=" "
                                onFocus={(e) => {
                                    onFocus2(e)
                                    setDisableInput1(true)
                                    setDisableInput3(true)
                                    setDisableInput4(true)
                                    setDisableInput5(true)
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(formik.values.name, formik.values.mobilephone, formik.values.email, formik.values.agreement1, formik.values.agreement2)                                    
                                    }, 100);
                                    return () => clearTimeout(timer);
                                }
                                }
                                onBlur={(e) => {
                                    onBlur2(e)
                                    setDisableInput1(false)
                                    setDisableInput3(false)
                                    setDisableInput4(false)
                                    setDisableInput5(false)
                                    setOnBlurOnce2(true)
                                }}
                                value={formik.values.age}
                            />
                            <label
                                className={(focused2 === false && formik.values.age === '' ? 'label' : 'label animate') + (formik.errors.age && onBlurOnce2 === true ? ' invalid ' : ' ')}
                                htmlFor="age">
                                Возраст ребёнка
                            </label>
                            <br />
                        </div>
                    </div>
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>
                                <div className='input-container w-full relative'>
                                    <input
                                        disabled={disableInput5}
                                        autoComplete="off"
                                        type="text"
                                        name="reasons"
                                        id="reasons"
                                        placeholder=" "
                                        onFocus={(e) => {
                                            onFocus5(e)
                                            setDisableInput1(true)
                                            setDisableInput2(true)
                                            setDisableInput3(true)
                                            setDisableInput4(true)
                                        }}
                                        onChange={(e) => {setInputValue(e.target.value)}}
                                        onBlur={(e) => {
                                            onBlur5(e)
                                            setDisableInput1(false)
                                            setDisableInput3(false)
                                            setDisableInput4(false)
                                            setDisableInput2(false)
                                            setOnBlurOnce5(true)
                                            if (inputValue !== '') {setReasons([...reasons, {id: 110, text: inputValue}]); setInputValue('')}
                                        }}
                                        onKeyDown={handleEnterKeyPress}
                                        value={inputValue}
                                    />
                                    <span
                                        className={(focused5 === false ? 'label' : 'label animate')}
                                        htmlFor="reasons"
                                    >
                                        Причины
                                    </span>
                                </div> 
                            {reasons?.map((r, i) => {
                                return <div key={i} className="reasons flex flex-row mts">
                                    <div className="reason-item contextItem flex flex-row items-center justify-center">
                                        <p>{r.text}</p>
                                        <div className="remove" onClick={() => removeReasonItem(r, reasons)} >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9244 4.51221L15.49 5.07781L5.08123 15.4858L4.51562 14.9206L14.9244 4.51221Z" fill="#363636"/>
                                                <path d="M5.08123 4.51221L15.49 14.9202L14.9244 15.4862L4.51562 5.07821L5.08123 4.51221Z" fill="#363636"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>
                            <input
                                autoComplete="off"
                                type="text"
                                name="rate"
                                id="rate"
                                placeholder=" "
                                readOnly
                                style={{cursor: "pointer"}}
                            />
                            {rates.length === 0 ?  <div onClick={() => setIsShowRates(!showRates)} className={"showRates flex flex-row" + (showRates ? ' open ' : ' ') + ( ratesOnBlurOnce && rates.length ===  0 ? ' invalid ' : ' ') }>
                                <label
                                    className={'labelStatic'}
                                    htmlFor="rate"
                                    >
                                        Выберите тариф
                                </label>
                                <div className={"svgShowRates" + (showRates ? ' show ' : ' ')}>
                                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8L9.79487 15L2 8" stroke="#494646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div> : <label
                                className={'labelStatic'}
                                htmlFor="rate"
                                >
                                 Тариф
                            </label>}

 
                            {rates?.map((r, i) => {
                                return <div key={i} className="rates-form flex flex-row mts">
                                    <div className="rate-item-form contextItem flex flex-row items-center justify-center">
                                        <p>{r.subtitle}</p>
                                        <div className="remove" onClick={() => removeRateItem(r, rates)} >
                                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9244 4.51221L15.49 5.07781L5.08123 15.4858L4.51562 14.9206L14.9244 4.51221Z" fill="#363636"/>
                                                <path d="M5.08123 4.51221L15.49 14.9202L14.9244 15.4862L4.51562 5.07821L5.08123 4.51221Z" fill="#363636"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    
                    {showRates ? <div className="flex flex-row flex-wrap">
                        {listOfRates?.map((r, i) => {
                            return <div key={i}
                                className={"rate-item-form contextItem withHover flex flex-row items-center justify-center mrs" + (width > 800 ? '' : ' mbs ')}
                                onClick={() => { addRateItem(r); setIsShowRates(false) }}>
                                <p>{r.subtitle}</p>
                            </div>
                        })}
                    </div> : ' '}
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>

                            <input
                                disabled={disableInput3}
                                autoComplete="off"
                                type="text"
                                name="email"
                                id="email"
                                placeholder=" "
                                className={'' + (formik.errors.email && onBlurOnce3 === true ? ' invalid ' : ' ')}
                                onFocus={(e) => {
                                    onFocus3(e)
                                    setDisableInput2(true)
                                    setDisableInput1(true)
                                    setDisableInput4(true)
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(formik.values.name, formik.values.mobilephone, e.target.value, formik.values.agreement2)                                    
                                    }, 100);
                                    return () => clearTimeout(timer);
                                }
                                }
                                onBlur={(e) => {
                                    onBlur3(e)
                                    setDisableInput2(false)
                                    setDisableInput1(false)
                                    setDisableInput4(false)
                                    setOnBlurOnce3(true)
                                }}
                                value={formik.values.email}
                            />
                            <label
                                className={(focused3 === false && formik.values.email === '' ? 'label' : 'label animate') + (formik.errors.email && onBlurOnce3 === true ? ' invalid ' : ' ')}
                                htmlFor="email">
                                Email
                            </label>
                            <br />
                        </div>
                    </div>
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>

                            <MaskedInput
                                disabled={disableInput4}
                                guide={false}
                                autoComplete="off"
                                mask={phoneNumberMask}
                                type="tel"
                                name="mobilephone"
                                id="mobilephone"
                                placeholder=" "
                                className={'' + (formik.errors.mobilephone && onBlurOnce4 === true ? ' invalid ' : ' ')}
                                onFocus={(e) => {
                                    onFocus4(e)
                                    setDisableInput1(true)
                                    setDisableInput2(true)
                                    setDisableInput3(true)
                                    if (!formik.values.mobilephone?.startsWith('+')) {
                                        formik.setFieldValue('mobilephone', '+7 ')
                                    }
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(formik.values.name, e.target.value, formik.values.email, formik.values.agreement2)                                    
                                    }, 100);
                                    return () => clearTimeout(timer);
                                }
                                }
                                onBlur={(e) => {
                                    onBlur4(e)
                                    setDisableInput1(false)
                                    setDisableInput2(false)
                                    setDisableInput3(false)
                                    setOnBlurOnce4(true)
                                }}
                                value={formik.values.mobilephone.replace(/_/g, " ")}
                            />
                            <label
                                className={(focused4 === false && formik.values.mobilephone === '' ? 'label ' : 'label animate') + (formik.errors.mobilephone && onBlurOnce4 === true ? ' invalid ' : ' ')}
                                htmlFor="mobilephone">Номер телефона
                            </label>
                            <br />
                        </div>
                    </div>
                    <div className="checkbox-field first flex items-center">
                        <input
                            type="checkbox"
                            name="agreement1"
                            id="agreement1"
                            checked={isChecked1}
                            onChange={(e) => {
                                setIsChecked1((prev) => !prev); 
                                formik.handleChange(e)
                                const timer = setTimeout(() => {
                                    handleSchemaValue(formik.values.name, formik.values.mobilephone, formik.values.email, formik.values.agreement2)                                    
                                }, 100);
                                return () => clearTimeout(timer);
                                }
                            }
                            className={'checkboxInput checkboxInput-1'}
                            value={formik.values.agreement1}
                        />

                        <label htmlFor="agreement" className={'checkboxLabel'}>
                            {agreement1}
                        </label>
                    </div>
                    <div className="flex flex-row" style={{ marginBottom: '20px '}}>
                    <div className="checkbox-field second flex items-center">
                    <input
                            type="checkbox"
                            name="agreement2"
                            id="agreement2"
                            checked={isChecked2}
                            onChange={(e) => {
                                setIsChecked2((prev) => !prev); 
                                formik.handleChange(e)
                                const timer = setTimeout(() => {
                                    handleSchemaValue(formik.values.name, formik.values.mobilephone, formik.values.email, e.target.value)                                    
                                }, 100);
                                return () => clearTimeout(timer);
                                }
                            }
                            className={'checkboxInput checkboxInput-2' + (!isChecked2 && onBlurOnce6 ? ' invalid ' : ' ')}
                            value={formik.values.agreement2}
                        />
                    </div>
                    <label htmlFor="agreement" className={'checkboxLabel' + (!isChecked2 && onBlurOnce6 ? ' invalid ' : ' ')} >
                        Я подтверждаю свое согласие с условиями (обязательное поле) <Link href="/privacy">политикой конфиденциальности</Link> и <Link href="/offer">договором оферты</Link> 
                    </label>
                    </div>
                    <div className="price mb">
                        {rates !== '[]' ? <p>{rates[0]?.price}</p> : ''}
                    </div>
                    <div className="relative buttonsForm">
                        <Button
                            type={1}
                            onClick={() => {
                                const timer = setTimeout(() => {
                                    resettingTimeout(submitDelay); 
                                }, 100);
                                return () => clearTimeout(timer);

                            }}
                            text={'Выбрать дату'}
                            disabled={submitDelay === true && isSchemaValid ? false : true}
                            className={' formPayButton green pb relative ' + (submitDelay && isSchemaValid === true ? "" : "disabled")}
                        />
                    {isSchemaValid ? '' :  <div 
                            id="pseudo"
                            onClick={(e) => {
                            setOnBlurOnce2(true); 
                            setOnBlurOnce6(true); 
                            setOnBlurOnce1(true); 
                            setOnBlurOnce3(true); 
                            setOnBlurOnce4(true);
                            setRatesOnBlurOnce(true);
                            formik.handleChange(e)
   
                            const timer = setTimeout(() => {
                                setPseudoBtnDisable(true)
                                handleSchemaValue(formik.values.name, formik.values.mobilephone, formik.values.email, formik.values.agreement2)                                                             
                            }, 200);
                            return () => clearTimeout(timer);
                        }} 
                            className={"pseudoButton" + (pseudoBtnDisable ? " remove " : ' ')}>

                            Pseudo
                        </div>}
                    </div>
                    <motion.div
                        className={"flex flex-col popup " + (togglePopup === true ? 'active' : '')}>
                        <div className="popup-container flex flex-col">
                            <div className='ok-button-container flex justify-end'>
                                <button
                                    className='action action--light '
                                    onClick={() => setTogglePopup(!togglePopup)}
                                >OK</button>
                            </div>
                        </div>
                    </motion.div>
                </form>
            </div>
        </section>
    );


}

export default Form
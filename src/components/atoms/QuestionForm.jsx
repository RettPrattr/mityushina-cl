import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { motion } from "framer-motion";
import MaskedInput from "react-text-mask";
import useWindowDimensions from '../hooks/useWindowDimensions';
import Link from 'next/link'
import { useState, useEffect, useContext} from 'react';
import Button from './Button';
import { AllContexts } from '../context/Context';


const phoneNumberMask = [
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

const QuestionForm = () => {

    const [togglePopup, setTogglePopup] = useState(false)
    const [isSchemaValid, setIsSchemaValid] = useState(false)

    const [disableInput1, setDisableInput1] = useState(true)
    const [focused1, setFocused1] = useState(false)
    const onFocus1 = () => setFocused1(true)
    const onBlur1 = () => setFocused1(false)
    const [onBlurOnce1, setOnBlurOnce1] = useState(false)

    const [disableInput3, setDisableInput3] = useState(true)
    const [focused3, setFocused3] = useState(false)
    const onFocus3 = () => setFocused3(true)
    const onBlur3 = () => setFocused3(false)
    const [onBlurOnce3, setOnBlurOnce3] = useState(false)

    const [disableInput2, setDisableInput2] = useState(true)
    const [focused2, setFocused2] = useState(false)
    const onFocus2 = () => setFocused2(true)
    const onBlur2 = () => setFocused2(false)
    const [onBlurOnce2, setOnBlurOnce2] = useState(false)

    const [disableInput4, setDisableInput4] = useState(true)
    const [focused4, setFocused4] = useState(false)
    const onFocus4 = () => setFocused4(true)
    const onBlur4 = () => setFocused4(false)
    const [onBlurOnce4, setOnBlurOnce4] = useState(false)

    const [onBlurOnce6, setOnBlurOnce6] = useState(false)

    const [submitDelay, setSumbitDelay] = useState()
 
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const [width, height] = useWindowDimensions();

    const {setQuestionSuccess} = useContext(AllContexts)

    const schema = Yup.object({
        name: Yup.string()
            .min(3, 'Минимальное количество символов: 3')
            .required('Обязательное поле'),
        email: Yup.string().email('Введите корректный адрес')
            .min(6, 'Минимальное количество символов: 6')
            .required('Обязательное поле'),
        agreement2: Yup.boolean()
            .required()
            .oneOf([true]),
        mobilephone: Yup.string()
            .min(16, 'Введите номер полностью')
            .required('Обязательное поле'),
        text: Yup.string()
            .min(3, 'Введите корректный вопрос')
            .required('Обязательное поле')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            mobilephone: '',
            email: '',
            text: '',
            agreement1: false,
            agreement2: false
        },
        validationSchema: schema,
        onSubmit: function (values) {

            const subject = 'Вопрос'
            const text = `От ${values?.name}, ${values?.email}: ${values?.text}`

            try {
                const response = axios.post('/api/sendQuestionEmail', {
                    subject: subject,
                    text: text
                })
                setQuestionSuccess(true)
            } catch (error) {
                console.error(error)
            }

        }
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisableInput1(false)
            setDisableInput3(false)
            setDisableInput2(false)
            setDisableInput4(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [])


    const handleSchemaValue = (nameForm, numberForm, emailForm, textForm, agreementForm2) => {
        
        const obj = {
            name: nameForm,
            mobilephone: numberForm,
            email: emailForm,
            text: textForm,
            agreement2: agreementForm2
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

    return (
        <section id="questionForm" className={"flex flex-col form container" + (width > 800 ? ' mym ' : ' my ')}>
            <div className="flex flex-row w-full justify-center items-center">
                <form onSubmit={formik.handleSubmit} id="tg" className='formRightSide cd5 cm4 '>
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>
                            <input
                                disabled={disableInput1}
                                autoComplete="off"
                                type="text"
                                name="name"
                                id="Questionname"
                                placeholder=" "
                                className={'' + (formik.errors.name && onBlurOnce1 === true ? ' invalid ' : ' ')}
                                onFocus={(e) => {
                                    onFocus1(e)
                                    setDisableInput2(true)
                                    setDisableInput3(true)
                                    setDisableInput4(true)
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(e.target.value, formik.values.mobilephone, formik.values.email, formik.values.text, formik.values.agreement2)
                                    }, 100);
                                    return () => clearTimeout(timer);
                                }
                                }
                                onBlur={(e) => {
                                    onBlur1(e)
                                    setDisableInput3(false)
                                    setDisableInput2(false)
                                    setDisableInput4(false)
                                    setOnBlurOnce1(true)
                                }}
                                value={formik.values.name}
                            />
                            <label
                                className={(focused1 === false && formik.values.name === '' ? 'label' : 'label animate') + (formik.errors.name && onBlurOnce1 === true ? ' invalid ' : ' ')}
                                htmlFor="Questionname">
                                Имя
                            </label>
                            <br />
                        </div>
                    </div>
                    <div className='input-field relative mb ov-visible mtm'>
                        <div className='input-container w-full relative'>

                            <input
                                disabled={disableInput3}
                                autoComplete="off"
                                type="text"
                                name="email"
                                id="Questionemail"
                                placeholder=" "
                                className={'' + (formik.errors.email && onBlurOnce3 === true ? ' invalid ' : ' ')}
                                onFocus={(e) => {
                                    onFocus3(e)
                                    setDisableInput1(true)
                                    setDisableInput2(true)
                                    setDisableInput4(true)
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(formik.values.name, formik.values.mobilephone, e.target.value, formik.values.text, formik.values.agreement2)                                    
                                    }, 100);
                                    return () => clearTimeout(timer);
                                }
                                }
                                onBlur={(e) => {
                                    onBlur3(e)
                                    setDisableInput1(false)
                                    setDisableInput2(false)
                                    setDisableInput4(false)
                                    setOnBlurOnce3(true)
                                }}
                                value={formik.values.email}
                            />
                            <label
                                className={(focused3 === false && formik.values.email === '' ? 'label' : 'label animate') + (formik.errors.email && onBlurOnce3 === true ? ' invalid ' : ' ')}
                                htmlFor="Questionemail">
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
                                id="Questionmobilephone"
                                placeholder=" "
                                className={'' + (formik.errors.mobilephone && onBlurOnce4 === true ? ' invalid ' : ' ')}
                                onFocus={(e) => {
                                    onFocus4(e)
                                    setDisableInput1(true)
                                    setDisableInput3(true)
                                    setDisableInput2(true)
                                    if (!formik.values.mobilephone?.startsWith('+')) {
                                        formik.setFieldValue('mobilephone', '+7 ')
                                    }
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(formik.values.name, e.target.value, formik.values.email, formik.values.text, formik.values.agreement2)                                    
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
                                htmlFor="Questionmobilephone">Номер телефона
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
                                name="text"
                                id="text"
                                placeholder=" "
                                className={'' + (formik.errors.text && onBlurOnce2 === true ? ' invalid ' : ' ')}
                                onFocus={(e) => {
                                    onFocus2(e)
                                    setDisableInput1(true)
                                    setDisableInput4(true)
                                    setDisableInput3(true)
                                }}
                                onChange={(e) => {
                                    formik.handleChange(e)
                                    const timer = setTimeout(() => {
                                        handleSchemaValue(formik.values.name, formik.values.mobilephone, formik.values.email, e.target.value, formik.values.agreement2)                                    
                                    }, 100);
                                    return () => clearTimeout(timer);
                                }
                                }
                                onBlur={(e) => {
                                    onBlur2(e)
                                    setDisableInput1(false)
                                    setDisableInput4(false)
                                    setDisableInput3(false)
                                    setOnBlurOnce2(true)
                                }}
                                value={formik.values.text}
                            />
                            <label
                                className={(focused2 === false && formik.values.text === '' ? 'label' : 'label animate') + (formik.errors.text && onBlurOnce2 === true ? ' invalid ' : ' ')}
                                htmlFor="text">
                                Что Вас беспокоит ?
                            </label>
                            <br />
                        </div>
                    </div>
                    <div className="checkbox-field first flex items-center">
                        <input
                            type="checkbox"
                            name="agreement1"
                            id="Questionagreement1"
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
                        <label htmlFor="Questionagreement" className={'checkboxLabel'}>
                            Хочу получать рассылку на электронную почту
                        </label>
                    </div>
                    <div className="flex flex-row" style={{ marginBottom: '20px '}}>
                    <div className="checkbox-field second flex items-center">
                    <input
                            type="checkbox"
                            name="agreement2"
                            id="Questionagreement2"
                            checked={isChecked2}
                            onChange={(e) => {
                                setIsChecked2((prev) => !prev); 
                                formik.handleChange(e)
                                const timer = setTimeout(() => {
                                    handleSchemaValue(formik.values.name, formik.values.mobilephone, formik.values.email, formik.values.text, e.target.value)                                    
                                }, 100);
                                return () => clearTimeout(timer);
                                }
                            }
                            className={'checkboxInput checkboxInput-2' + (!isChecked2 && onBlurOnce6 ? ' invalid ' : ' ')}
                            value={formik.values.agreement2}
                        />
                    </div>
                    <label htmlFor="Questionagreement2" className={'checkboxLabel' + (!isChecked2 && onBlurOnce6 ? ' invalid ' : ' ')} >
                                Я подтверждаю свое согласие с условиями (обязательное поле) <Link href="/privacy">политикой конфиденциальности</Link> и <Link href="/offer">договором оферты</Link> 
                    </label>
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
                            text={'Задать вопрос психологу'}
                            disabled={submitDelay === true && isSchemaValid ? false : true}
                            className={'formPayButton green pb relative ' + (submitDelay && isSchemaValid === true ? "" : "disabled")}
                        />
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

export default QuestionForm
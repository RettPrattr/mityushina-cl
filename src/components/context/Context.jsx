import { createContext, useState } from 'react';

export const AllContexts = createContext(null)

export function Context({children}) {
    const [popupState, setPopupState] = useState(false)
    const [currentPage, setCurrentPage] = useState('')
    const [currentComponent, setCurrentComponent] = useState('')
    const [phonesData, setPhonesData] = useState([])
    const [reasons, setReasons] = useState([])
    const [rates, setRate] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [questionModalActive, setQuestionModalActive] = useState(false)
    const [order, setOrder] = useState({})
    const [questionSuccess, setQuestionSuccess] = useState(false)

    return (
        <AllContexts.Provider value={{
            popupState, setPopupState, 
            currentPage, setCurrentPage, 
            currentComponent, setCurrentComponent,
            phonesData, setPhonesData,
            reasons, setReasons,
            rates, setRate,
            isActive, setIsActive,
            questionModalActive, setQuestionModalActive,
            order, setOrder,
            questionSuccess, setQuestionSuccess
            }}>
            {children}
        </AllContexts.Provider>
    )
}
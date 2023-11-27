import QuestionForm from "@/components/atoms/QuestionForm"
import { useContext } from "react"
import { AllContexts } from "./context/Context"
import { useEffect } from "react"

const QuestionModal = (isActive) => {
    
    const {questionSuccess, setQuestionSuccess} = useContext(AllContexts)
    
    useEffect(()=>{
        if (questionSuccess){
            setTimeout(()=>{
                setQuestionSuccess(false)
            }, 10000)
        }
    }, [questionSuccess])

    if (isActive.isActive) {
    return (
        <div className={"questionModal modal active"}>
            <div className="modalContainer flex flex-col">
                <div className="closeButton cursor-pointer" onClick={() => {isActive.setIsActive(false)}}>
                    <svg width="41" height="41" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 5.5L5.5 14.5M14.5 14.5L5.5 5.5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                </div>
                {!questionSuccess ? <>
                <div className="modalTitle">Задать вопрос психологу</div>
                <QuestionForm /></>
                :
                <h2>Спасибо за обращение!<br/>Ваш вопрос успешно отправлен<br/>Ожидайте ответа на почту</h2>
                }
            </div>
        </div>
    )
    }
    
}

export default QuestionModal
import Layout from "@/components/layouts/Layout"
import QuestionForm from "@/components/atoms/QuestionForm"
import { useContext, useEffect } from "react"
import { AllContexts } from "@/components/context/Context"


const Question = () => {

    const {questionSuccess, setQuestionSuccess} = useContext(AllContexts)

    useEffect(()=>{
        if (questionSuccess){
            setTimeout(()=>{
                setQuestionSuccess(false)
            }, 10000)
        }
    }, [])

    return (
        <Layout>
            <div className={"questionModal modal active"}>
                <div className="modalContainer flex flex-col">
                    {!questionSuccess ? <>
                    <div className="modalTitle">Задать вопрос психологу</div>
                    <QuestionForm /></>
                    :
                    <h2>Спасибо за обращение!<br/>Ваш вопрос успешно отправлен<br/>Ожидайте ответа на почту</h2>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Question
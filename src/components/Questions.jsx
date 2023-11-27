import React, {useState} from 'react'
import useWindowDimensions from './hooks/useWindowDimensions'

const clickQuestion = (q, i) => {
    const questionPlus = document.getElementById(`plus-${i}`)
    const questionMinus = document.getElementById(`minus-${i}`)
    const answer = document.getElementById(`answer-${i}`)
    if (questionPlus.classList.contains('active')) {questionPlus.classList.remove('active')} else {questionPlus.classList.add('active')}
    if (questionMinus.classList.contains('active')) {questionMinus.classList.remove('active')} else {questionMinus.classList.add('active')}
    if (answer.classList.contains('active')) {answer.classList.remove('active')} else {answer.classList.add('active')}
}

const Questions = (props) => {

    const { title, QuestionsItems } = props

    const [isShowMore, setShowMore] = useState(false)
    
    const [width] = useWindowDimensions()

    const showMoreFunc = (boolean) => {
        setShowMore(boolean)
        if (document) {
            const hiddenStages = document.querySelectorAll('.show-hide')
        }
    }

  return (
    <section id="questions" className='questions flex flex-col container cd10 cm4'>
        <div className="title">
            <h2>{title}</h2>
        </div>
        <div className="questionItems flex flex-col w-full cd8 cm4">
            {QuestionsItems?.map((q, i) => {
                return <div key={i} onClick={() => clickQuestion(q, i)} className={"questionItem cursor-pointer flex flex-col mb" + (i > 2 && isShowMore === false ? ' show-hide hidden ' : ' ')}>
                        <div className="flex flex-row justify-between">
                            <div
                                className={'question question-' + i}
                                dangerouslySetInnerHTML={{ __html: q.question }}>
                            </div>
                            <div className="plus-or-minus">
                                <div id={"plus-" + i} className={"active plus plus-" + i}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="11" width="2" height="24" fill="#494646"/>
                                        <rect y="13" width="2" height="24" transform="rotate(-90 0 13)" fill="#494646"/>
                                    </svg>
                                </div>
                                <div id={"minus-" + i} className={"minus minus-" + i}>
                                    <svg width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="2" width="2" height="24" transform="rotate(-90 0 2)" fill="#494646"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            id={'answer-' + i} className={'answer answer-' + i}
                            dangerouslySetInnerHTML={{ __html: q.answer }}>
                        </div>
                    </div>
            })}
        </div>
        <div className={"cd8 cm4 flex  pl0 pr0" + (width > 800 ? ' justify-end ' : ' justify-start ')}>
            <div onClick={() => {showMoreFunc(!isShowMore)}} className={"moreBtn cb-mid flex flex-row items-center"}>
                {isShowMore ? <p className='mrs'>скрыть</p> : <p className='mrs'>ещё</p>}
                <div className={"" + (isShowMore ? ' open ' : ' ') }>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8L9.79487 15L2 8" stroke="#494646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Questions

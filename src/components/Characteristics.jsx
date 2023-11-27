import Button from './atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'



export default function Characteristics (props) {

    const { title, characteristicsCards } = props

    // const title = 'Наши преимущества'

    // const characteristicsCards = [
    //     {
    //         subtitle : 'Одобрение 98%',
    //         text: 'Одобряем 98% заявок наших клиентов. Работаем быстро, не затягивая сроки.'
    //     },
    //     {
    //         subtitle : 'Ставка от 4.4%',
    //         text: 'Одобряем 98% заявок наших клиентов. Работаем быстро, не затягивая сроки.'
    //     },
    //     {
    //         subtitle : 'Без предоплаты',
    //         text: 'Одобряем 98% заявок наших клиентов. Работаем быстро, не затягивая сроки.'
    //     },
    //     {
    //         subtitle : '78 банков-партнеров',
    //         text: 'Одобряем 98% заявок наших клиентов. Работаем быстро, не затягивая сроки.'
    //     },
    //     {
    //         subtitle : 'До 25% экономии',
    //         text: 'Одобряем 98% заявок наших клиентов. Работаем быстро, не затягивая сроки.'
    //     },
    //     {
    //         subtitle : 'Экономия времени',
    //         text: 'Одобряем 98% заявок наших клиентов. Работаем быстро, не затягивая сроки.'
    //     }
    // ]

    return (
        <section className="characteristics-cards flex flex-col container mym">
            <h2 className='cd12 cm4'>{title}</h2>
            <div className="flex flex-row justify-between flex-wrap">
                {characteristicsCards.map((m, i) => <CharacteristicCard key={i} {...m} index={i} />)}
            </div>
        </section>
    )
}


function CharacteristicCard (props) {


    const [width] = useWindowDimensions()
    
    const {text, subtitle} = props

    return (
        <div className={"cd4 cm4 flex h-auto" + (width > 800 ? ' mys' : ' mys')}>
            <div className={"characteristics-card flex-col h-full w-full flex"}> 
                <span className='characteristics-span mbs'>{subtitle}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}
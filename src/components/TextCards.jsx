import Button from '../components/atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'

// const cardProps = [
//     {
//         href: '',
//         title: 'Потребительский кредит',
//         text: ['Понадобились деньги для важных покупок в семью или на личные нужды, а накоплений нет? Мы поможем получить потребительский кредит в банке.'],
//     },
//     {
//         href: '',
//         title: 'Рефинансирование',
//         text: ['Если у вас есть кредит, но условия не устраивают, то эта услуга для вас. Мы заменим старый заём на новый, ещё и с выгодой для вас.'],
//     },
//     {
//         href: '',
//         title: 'Ипотека',
//         text: ['Первая покупка недвижимости или расширение жилой площади требует помощи у банка. Если вы уже обращались в банк, но получили отказ, мы поможем получить согласие.'],
//     },
//     {
//         href: '',
//         title: 'Лизинг',
//         text: ['Первая покупка недвижимости или расширение жилой площади требует помощи у банка. Если вы уже обращались в банк, но получили отказ, мы поможем получить согласие.'],
//     },

// ]



export default function TextCards (props) {

    const {cardProps, type, title} = props

    if (type === 1) {
        return (
            <section className={"text-cards text-cards-" + type}>
                <div className="container flex flex-row justify-between">
                    {cardProps.map((m, i) => <TextCard key={i} {...m} index={i} />)}
                </div>
            </section>
        )
    } else if (type === 2) {
        return (
            <section className={"text-cards text-cards-" + type}>
                <div className="container flex flex-row justify-between">
                    {cardProps?.map((m, i) => <TextCard2 key={i} {...m} index={i} />)}
                </div>
            </section>
        )
    }

}


// justify накинуть чтобы кнопка была внизу у всех
function TextCard (props) {


    const [width] = useWindowDimensions()
    
    const {titleCard, description, buttonText, buttonHref, index} = props

    return (
        <div className="cd3 cm4 flex flex-col h-auto">
            <div className={"text-card flex-col flex px py justify-between base-br" + (width > 800 ? ' h-full ' : ' mbs h-fit')}> 
                <div className="flex-col">
                    <h3 className="my">{titleCard}</h3>
                    <p>{description}</p>
                </div>
                <Button 
                    className="mb0"
                    type={1}
                    text={buttonText}
                    href={buttonHref}
                />
            </div>
        </div>
    )
}

function TextCard2 (props) {


    const [width] = useWindowDimensions()
    
    const {description, value} = props

    return (
        <div className="cd3 cm4 flex flex-col h-auto">
          <p className={(width > 800 ? ' mb' : ' ')}>{description}</p>
          <h2 className=''>{value}</h2>
        </div>
    )
}
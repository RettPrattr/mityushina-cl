import useWindowDimensions from './hooks/useWindowDimensions'

export default function BlockHead (props) {
    const [width, height] = useWindowDimensions();

    if (props.type === 1) {
        return (
            <section className="container BlockHead flex flex-col items-center mbm">
                <div className="cd6 cm4">
                    <h4 className='text-center'>Subtitle</h4>
                    <h2 className='text-center'>Работаем с физическими и юридическими лицами</h2>
                    <p className='text-center'>Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.</p>
                </div>
            </section>
        )
    }

    if (props.type === 2) {
        return (
            <section className="container BlockHead flex flex-col items-center mbm">
                <div className="cd6 cm4">
                    <h4 className='text-start'>Subtitle</h4>
                    <h2 className='text-start'>Работаем с физическими и юридическими лицами</h2>
                    <p className='text-start'>Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.</p>
                </div>
            </section>
        )
    }
}
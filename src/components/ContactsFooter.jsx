import Image from 'next/image'
import useWindowDimensions from './hooks/useWindowDimensions'

export default function ContactsFooter () {
    // const {icon, title, text, isGreen, index, i, href} = props
    const [width, height] = useWindowDimensions();


    const infoFields = [
        {
            subtitle: 'Address',
            text: 'Capital Hill, 7th Floor, 6 Benmore Road, Benmore, Sandton, South Africa, 2010'
        },
        {
            subtitle: 'PO Box',
            text: '653088, Benmore, South Africa, 2010'
        },
        {
            subtitle: 'Switchboard',
            text: '+27 11 301 3000'
        },
        {
            subtitle: 'Email',
            text: 'info@galacticenergy.com'
        }
    ]

    function currentYear() {
        return new Date().getFullYear();
    }

    const bottomText = `© Galactic Energy Holdings Proprietary Limited ${currentYear()} `

    return (
        <footer className="ContactsFooter">
            <div className="container h-full">
                <div className={"left-side cd6 cm4 mb"}>
                    <Image quality={100} width={1000} className='logo' height={1000} src='/images/image.webp' alt={'alt'}></Image>
                </div>
                <div className="right-side flex flex-col cd6 cm4 justify-between">
                    <div className="flex flex-col top-text">
                        {infoFields.map((m, i) => {
                            return <div className={"flex flex-col mb"} key={i}>
                                        <h4 className='mbs'>{m.subtitle}</h4>
                                        <p>{m.text}</p>
                                    </div>
                        })}
                    </div>
                    <div className="bottom-text mtl">
                        <p>{bottomText}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
import { useState } from "react"
import useWindowDimensions from "./hooks/useWindowDimensions";

const UnsuccessfulModal = () => {
    const [width] = useWindowDimensions();
    const [isActive, setIsActive] = useState(true)

    if (width > 800) {
        return (
            <div className={"modal " + (isActive ? "active" : "")}>
                <div className="modalContainer flex flex-col justify-center items-center" style={{paddingBottom: "2.5% !important"} }>
                    <h1 style={{textAlign: "center"}}>Оплата не прошла<br/>Попробуйте еще раз</h1>
                    <p onClick={() => {setIsActive(false)}}className="cursor-pointer" style={{backgroundColor: "white", padding: "10px", borderRadius: "100px", marginTop: "20px"}}>Закрыть</p>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className={"modal " + (isActive ? "active" : "")}>
                <div className="modalContainer flex flex-col justify-center items-center" style={{paddingBottom: "2.5% !important", width: "100%"}}>
                    <h1 style={{textAlign: "center"}}>Оплата не прошла<br/>Попробуйте еще раз</h1>
                    <a href="https://mityushina.ru" className="cursor-pointer" style={{backgroundColor: "white", padding: "10px", borderRadius: "100px", marginTop: "20px"}}>На главную</a>
                </div>
            </div>
        )
    }
}

export default UnsuccessfulModal
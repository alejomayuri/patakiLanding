import style from "./style.module.css"
import LupuloIcon from "@/app/components/icons/Lupulo"

const CartElement = ({ color, estilo, marca, keywords, amargo, alcohol }) => {
    
    return (
        <div className={style.dataContainer}>
            <div className={style.color}>
                <div style={{
                    backgroundColor: color,
                }}></div>
            </div>
            <div className={style.styleContainer}>
                <p>{estilo}</p>
            </div>
            <div className={style.marcaContainer}>
                <p>{marca}</p>
            </div>
            <div className={style.keywordsContainer}>
                <ul>
                    {keywords?.map((item, index) => (
                        <li key={index}>∙ {item}</li>
                    ))}
                </ul>
            </div>
            <div className={style.alcoholContainer}><p>{`${alcohol}%`}</p></div>
            <div className={style.lupuloContainer}>
                {[...Array(5)].map((item, index) => (
                    <LupuloIcon key={index} fill={
                        index < amargo ? "#C16D56" : "#231f20"
                    } width={50} height={50} />
                ))}
            </div>
        </div>
    )
}

export default CartElement;
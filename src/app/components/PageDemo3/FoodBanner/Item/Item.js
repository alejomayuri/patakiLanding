import style from './style.module.css'

const Item = ({ isActive, title, text, image }) => (
        <div className={`${style.item} ${isActive ? style.active : ''}`}>
            <div className={style.textContainer}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#">VER EL MENÚ</a>
            </div>
            <div className={style.imageContainer}>
                <img src={image} alt={title} />
            </div>
        </div>
    );


export default Item
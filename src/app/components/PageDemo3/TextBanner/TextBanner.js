import style from './style.module.css';

const TextBanner = () => {
    return (
        <section>
            <div className={style.bannerContainer}>
                <p className={style.subtitle}>ALITAS Y PAPAS</p>
                <div className={style.titleContainer}>
                    <h2>La combinación perfecta</h2>
                    <h2>para cada ocación</h2>
                </div>
                <div className={style.textContainer}>
                    <p className={style.text}>Somos el lugar ideal para celebrar momentos especiales o disfrutar de una comida casual con amigos, acompañada de buena cerveza y un ambiente único.</p>
                </div>
            </div>
        </section>
    );
}

export default TextBanner;
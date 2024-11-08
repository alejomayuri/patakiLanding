import style from './style.module.css';

export const MidBanner = () => {
    return (
        <section>
            <div className={style.bannerWrapper}>
                <div className={style.bannerContent}>
                    <div>
                        <p className={style.textHeader}>Simplemente Irresistible</p>
                        <h2>Cerveza Artesanal en su Máxima Expresión</h2>
                        <p className={style.subtitle}>
                            Bienvenido a <b>Pataki Draft Bar</b>, donde elaboramos las mejores cervezas de la ciudad. Utilizamos ingredientes de la más alta calidad y técnicas tradicionales para crear sabores únicos y auténticos. Cada pinta es una experiencia para el paladar, pensada para que disfrutes de cada sorbo.
                        </p>
                        <button>Sobre Nosotros</button>
                    </div>
                </div>
                <div className={style.bannerImageWrapper}>
                    <div className={style.bannerImage}>
                        <img src="/demos/demo3/mb1.jpg" alt="banner" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MidBanner;
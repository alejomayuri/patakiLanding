import style from "./FooterSocial.module.css";
import Instagram from "../../icons/Instagram";
import TikTokIcon from "../../icons/TikTokIcon";

export const FooterSocial = () => {
    return (
        <section>
            <div className={style.footerSocialWrapper}>
                <div>
                    <div className={style.nameWrapper}>
                        <span>INSTA</span>
                        <span><Instagram width={25} height={25} /></span>
                        <span>GRAM</span>
                    </div>
                    <h3 className={style.title}>Deleita tus ojos.</h3>
                    <p className={style.text}>
                        Mantente conectado con nosotros <a href="#"><b>@patakilanding</b></a> para recibir ofertas super exclusivas.
                    </p>
                </div>
                <div>
                    <div className={style.nameWrapper}>
                        <span>TIK</span>
                        <span><TikTokIcon width={25} height={25} /></span>
                        <span>TOK</span>
                    </div>
                    <h3 className={style.title}>Diviertete con nosotros.</h3>
                    <p className={style.text}>
                        Mantente conectado con nosotros <a href="#"><b>@patakilanding</b></a> para recibir ofertas super exclusivas.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FooterSocial;
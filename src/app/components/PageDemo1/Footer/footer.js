import style from './Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <div className={style.footerWrapper}>
                <p>Desarrollado por</p>
                <div className={style.logoWrapper}>
                    <img src="/pataki.png" alt="logo" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
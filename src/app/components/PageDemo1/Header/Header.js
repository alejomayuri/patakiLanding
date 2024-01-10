import style from './Header.module.css';

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <div className={style.logoWrapper}>
                        <img src="/demos/demo1_logo.png" alt="logo" />
                    </div>
                    <nav className={style.nav}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Precios</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Social</a></li>
                        </ul>
                    </nav>
                    <div className={style.contacto}>
                        <a href="#">
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
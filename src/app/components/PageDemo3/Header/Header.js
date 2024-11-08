import style from './Header.module.css';
import DownArrow from '../../icons/DownArrow';
import InstagramTwo from '../../icons/InstagramTwo';
import FacebookIcon from '../../icons/FacebookIcon';
import Image from 'next/image';
import TikTokIcon from '../../icons/TikTokIcon';
import Phone from '../../icons/Phone';

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container__right}>
                <ul className={style.container__menu}>
                    <li>
                        <a href="#">
                            <span>MENU</span>
                            <DownArrow fill={"#fff"}/>
                        </a>
                    </li>
                </ul>
                <ul className={style.container__social}>
                    <li>
                        <a href="#"><InstagramTwo width={25} height={25} fill={"#fff"}/></a>
                    </li>
                    <li>
                        <a href="#"><FacebookIcon width={31} height={31} fill={"#fff"}/></a>
                    </li>
                    <li>
                        <a href="#"><TikTokIcon width={27} height={27} fill={"#fff"}/></a>
                    </li>
                </ul>
            </div>
            <div className={style.container__logo}>
                <Image className={style.image} src="/demos/demo3/logo.png" alt="logo" width={200} height={200} />
            </div>
            <div className={style.container__left}>
                <div>
                    <a href="#">reservación</a>
                </div>
                <div>
                    <Phone width={30} height={30} fill={"none"} stroke={"#fff"} />
                </div>
            </div>
        </header>
    );
}

export default Header;
import React from 'react'
import logo from '../../img/istore_logo.png'
import s from './Futer.module.scss'
import q from '../../img/Footer/instagram-filled.svg'
import w from '../../img/Footer/facebook-filled.svg'
import e from '../../img/Footer/youTube-filled.svg'
import r from '../../img/Footer/pin.svg'
import t from '../../img/Footer/phone.svg'
import y from '../../img/Footer/mail.svg'
const Footer = () => {
  return (
    <footer>
        <div className={s.footer}>
        <div>
            <img className={s.logo} src={logo} alt="" />
            <p>Магазин техники Apple в Бишкеке</p>
            <div className={s.padding}>
            <a href=""> <img src={q} alt="" /></a>
            <a href=""> <img src={w} alt="" /></a>
            <a href=""> <img src={e} alt="" /></a>
            </div>
            <h6>Режим работы</h6>
            <p>Пн - Вс 10:00 - 20:00</p>
        </div>
        <div className={s.Footerblock}>
            <div>
                <h5>Продукция</h5>
                <p>Mac</p>
                <p>iPad</p>
                <p>iPhone</p>
                <p>Watch</p>
                <p>Гаджеты</p>
            </div>
            <div>
                <h5>8 лет с Вами!</h5>
                <p>О нас</p>
                <p>Почему iStore</p>
                <p>Услуги</p>
                <p>Обратная связь</p>
            </div>
            <div>
                <h5>Контакты</h5>
                <p>
                    <img src={r} alt="" />
                    пр. Манаса, 40 (пер.
                    ул. Киевская)
                </p>
                <p>
                    <img src={t} alt="" />
                    +996 (555) 802 000. 
                    +996 (505) 802 000.
                </p>
                <p>
                <img src={y} alt="" />
                istorekg@gmail.com
                </p>
            </div>
        </div>
        </div>


        <div className={s.footerr}>
            <p>Copyright 2013-2021 istore.kg все права защищены</p>
            <p>made in -<span> MOORE STUDIO </span> </p> 
            <p>Политика конфиденциальности</p>
            <p> Пользовательское соглашение</p>
        </div>
    </footer>
  )
}

export default Footer
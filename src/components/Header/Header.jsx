import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/istore_logo.png'
import search from '../../img/search.svg'
import union from '../../img/union.svg'
import s from './Header.module.scss'
const Header = () => {
  return (
    <div className={s.header}>
        <NavLink to={'/'}>
        <img src={logo} alt="" />
        </NavLink>
        <div>
            <p>
                Магазин техники <br />
                 Apple в Бишкек
            </p>
        </div>
        <p>
            Пр.Манаса,40 (Пер.ул.Киевская)<br/>
            Пн-Вс 10:00-20:00
        </p>
            <div>
                <p>+996(508)200206 <br />
                    +996(508)200206
                </p>
            </div>
            <div className={s.search}>
                <input type="search"
                placeholder='Поиск по всем коткгориям' />
                <img src={search} alt="" />
            </div>
            <div className={s.card}>
                <img src={union} alt="" />
            </div>
        </div>
  )
}

export default Header
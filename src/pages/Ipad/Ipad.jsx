import React from 'react'
import s from './Ipad.module.scss'
import {NavLink} from 'react-router-dom'
import home from '../../img/home.svg'
import card from '../../img/union.svg'
import q from '../../img/Ipad/a.webp'
import w from '../../img/Ipad/b.webp'
import e from '../../img/Ipad/c.webp'
import r from '../../img/Ipad/d.webp'
import t from '../../img/Ipad/e.webp'
import y from '../../img/Ipad/f.webp'

const Ipad = () => {
  return (
    <div>
      <div className={s.header}>
      <NavLink to={'/'}><img src={home} alt="" /></NavLink>
      <h2>Iphone</h2>
      </div>
      <div className={s.Iphone}>
        <div className={s.wrap}>
            <NavLink to={'/IPadPro12_9'} className={s.block1}>
                    <img src={q} alt="" />
                <div>
                <h4>
                iPad Pro 12.9" (2021)
                </h4>
                <h5>от 97695 сом</h5>
                <p>$1170,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/IPadPro12_9'}>выбрать... </NavLink>
                </div>
            </NavLink>
            
            <NavLink to={'/iPadPro11'} className={s.block1}>
                    <img src={w} alt="" />
                <div>
                <h4>
                iPad Pro 11" (2021) 
                </h4>
                <h5>от 75150 сом</h5>
                <p>$900,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/iPadPro11'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/IPadAir10'} className={s.block1}>
                    <img src={e} alt="" />
                <div>
                <h4>
                iPad Air 10.9" (2022)
                </h4>
                <h5>от 55945 сом</h5>
                <p>$670,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/IPadAir10'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/iPadmini8'} className={s.block1}>
                    <img src={r} alt="" />
                <div>
                <h4>
                iPad mini 8.3" (2021)
                </h4>
                <h5>от 45925 сом</h5>
                <p>$550,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/iPadmini8'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/'} className={s.block1}>
                    <img src={t} alt="" />
                <div>
                <h4>
                iPad 10.2" (2021)
                </h4>
                <h5>от 35070 сом</h5>
                <p>$420,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/'} className={s.block1}>
                    <img src={y} alt="" />
                <div>
                <h4>
                iPad 10.2" (2020)
                </h4>
                <h5>от 31730 сом</h5>
                <p>$380,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/'}>выбрать... </NavLink>
                </div>
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Ipad
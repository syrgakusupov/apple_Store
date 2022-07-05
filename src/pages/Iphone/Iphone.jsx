import React from 'react'
import s from './Iphone.module.scss'
import {NavLink} from 'react-router-dom'
import home from '../../img/home.svg'
import card from '../../img/union.svg'
import q from '../../img/iphoneblock/iphone-13-pro-max-green-select.webp'
import w from '../../img/iphoneblock/iphone-13-pro-blue-select.webp'
import e from '../../img/iphoneblock/iphone-13-blue-select-2021_QT6ur4J.webp'
import r from '../../img/iphoneblock/iphone-13-mini-green-select.webp'
import t from '../../img/iphoneblock/12-Black.webp'
import y from '../../img/iphoneblock/11-black_qdkqJZQ.webp'
import u from '../../img/iphoneblock/iphone-se-midnight.webp'
const Iphone = () => {
  return (
    <div>
      <div className={s.header}>
      <NavLink to={'/'}><img src={home} alt="" /></NavLink>
      <h2>Iphone</h2>
      </div>
      <div className={s.Iphone}>
        <div className={s.wrap}>
            <NavLink to={'/iPhone13ProMax'} className={s.block1}>
                    <img src={q} alt="" />
                <div>
                <h4>
                iPhone 13 Pro Max
                </h4>
                <h5>104140 сом</h5>
                <p>от $1270,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/iPhone13ProMax'}>выбрать... </NavLink>
                </div>
            </NavLink>
            
            <NavLink to={'/IPhone13Pro'} className={s.block1}>
                    <img src={w} alt="" />
                <div>
                <h4>
                iPhone 13 Pro 
                </h4>
                <h5>96525 сом</h5>
                <p>от $1170,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/IPhone13Pro'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/Iphone13'} className={s.block1}>
                    <img src={e} alt="" />
                <div>
                <h4>
                iPhone 13
                </h4>
                <h5>74250 сом</h5>
                <p>от $900,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'Iphone13'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/iPhone13mini'} className={s.block1}>
                    <img src={r} alt="" />
                <div>
                <h4>
                iPhone 13 mini
                </h4>
                <h5>69200 сом</h5>
                <p>от $840,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/iPhone13mini'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/IPhone12'} className={s.block1}>
                    <img src={t} alt="" />
                <div>
                <h4>
                iPhone 12
                </h4>
                <h5>10414536250 сом</h5>
                <p>от $650,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/IPhone12'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/Iphone11'} className={s.block1}>
                    <img src={y} alt="" />
                <div>
                <h4>
                iPhone 11
                </h4>
                <h5>47850 сом</h5>
                <p>от $580,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/Iphone11'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/IphoneSE'} className={s.block1}>
                    <img src={u} alt="" />
                <div>
                <h4>
                iPhone SE
                </h4>
                <h5>41250 сом</h5>
                <p>от $500,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/IphoneSE'}>выбрать... </NavLink>
                </div>
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Iphone
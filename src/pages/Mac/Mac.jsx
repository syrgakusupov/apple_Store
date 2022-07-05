import React from 'react'
import s from './mac.module.scss'
import {NavLink} from 'react-router-dom'
import home from '../../img/home.svg'
import q from '../../img/Mac/aMacBook-Pro-16-M1-MAX.webp'
import w from '../../img/Mac/bMacBook-Pro-14.webp'
import e from '../../img/Mac/cpro-m2.webp'
import r from '../../img/Mac/dair-m2.webp'
import t from '../../img/Mac/emac-mini_GWMu0Y7.webp'
import y from '../../img/Mac/fmac-studio_5FKHJUC.webp'
import u from '../../img/Mac/gstudio-display.webp'

const Mac = () => {
  return (
    <div>
      <div className={s.header}>
      <NavLink to={'/'}><img src={home} alt="" /></NavLink>
      <h2>Mac</h2>
      </div>
      <div className={s.Iphone}>
        <div className={s.wrap}>
            <NavLink to={'/MacBookPro16'} className={s.block1}>
                    <img src={q} alt="" />
                <div>
                <h4>
                MacBook Pro 16
                </h4>
                </div>
            </NavLink>
            
            <NavLink to={'/IPhone13Pro'} className={s.block1}>
                    <img src={w} alt="" />
                <div>
                <h4>
                MacBook Pro 14
                </h4>
                </div>
            </NavLink>

            <NavLink to={'/Iphone13'} className={s.block1}>
                    <img src={e} alt="" />
                <div>
                <h4>
                MacBook Pro 13
                </h4>
                </div>
            </NavLink>

            <NavLink to={'/iPhone13mini'} className={s.block1}>
                    <img src={r} alt="" />
                <div>
                <h4>
                MacBook Air 13
                </h4>
                </div>
            </NavLink>

            <NavLink to={'/IPhone12'} className={s.block1}>
                    <img src={t} alt="" />
                <div>
                <h4>
                Mac mini
                </h4>
                </div>
            </NavLink>

            <NavLink to={'/Iphone11'} className={s.block1}>
                    <img src={y} alt="" />
                <div>
                <h4>
                Mac Studio


                </h4>
                </div>
            </NavLink>

            <NavLink to={'/IphoneSE'} className={s.block1}>
                    <img src={u} alt="" />
                <div>
                <h4>
                Studio Display
                </h4>
                </div>
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Mac
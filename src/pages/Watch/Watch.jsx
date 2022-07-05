import React from 'react'
import s from './Watch.module.scss'
import {NavLink} from 'react-router-dom'
import home from '../../img/home.svg'
import card from '../../img/union.svg'
import q from '../../img/watch/a.webp'
import w from '../../img/watch/b.webp'
import e from '../../img/watch/c.webp'
import r from '../../img/watch/d.webp'
import t from '../../img/watch/e.webp'
import y from '../../img/watch/f.webp'
const Watch = () => {
  return (
    <div>
      <div className={s.header}>
      <NavLink to={'/Watchseries7'}><img src={home} alt="" /></NavLink>
      <h2>Iphone</h2>
      </div>
      <div className={s.Iphone}>
        <div className={s.wrap}>
            <NavLink to={'/Watchseries7'} className={s.block1}>
                    <img src={q} alt="" />
                <div>
                <h4>
                Watch Series 7 with <br /> 
                Stainless Steel Case

                </h4>
                <h5>от 70975 сом</h5>
                <p>от $850,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/Watchseries7'}>выбрать... </NavLink>
                </div>
            </NavLink>
            
            <NavLink to={'/WatchSeries7Nike'} className={s.block1}>
                    <img src={w} alt="" />
                <div>
                <h4>
                Watch Series 7 Nike <br />
                 with Aluminum Case
                </h4>
                <h5>от 36740 сом</h5>
                <p>от $440,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/WatchSeries7Nike'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/WatchSeries7Nike'} className={s.block1}>
                    <img src={e} alt="" />
                <div>
                <h4>
                Watch Series 7 with <br />
                 Aluminum Case
                </h4>
                <h5>от 36740 сом</h5>
                <p>от $440,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'WatchSeries7Nike'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/WatchSeries7Nike'} className={s.block1}>
                    <img src={r} alt="" />
                <div>
                <h4>
                Watch Series 6 Nike with <br />
                 Aluminum Case

                </h4>
                <h5>от 35070 сом</h5>
                <p>от $420,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/WatchSeries7Nike'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/WatchSeries7Nike'} className={s.block1}>
                    <img src={t} alt="" />
                <div>
                <h4>
                Watch SE Nike with <br /> 
                Aluminum Case
                </h4>
                <h5>от 25885 сом</h5>
                <p>от $310,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/WatchSeries7Nike'}>выбрать... </NavLink>
                </div>
            </NavLink>

            <NavLink to={'/WatchSeries7Nike'} className={s.block1}>
                    <img src={y} alt="" />
                <div>
                <h4>
                Watch SE with Aluminum Case
                </h4>
                <h5>от 25885 сом</h5>
                <p>от $310,0</p>
                </div>
                <div className={s.cards}>
                  <img  src={card} alt="" /> 
                <NavLink to={'/WatchSeries7Nike'}>выбрать... </NavLink>
                </div>
            </NavLink>

        </div>
    </div>
    </div>
  )
}

export default Watch
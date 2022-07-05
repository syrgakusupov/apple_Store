import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import s from './Iphoneblock.module.scss'
import q from '../../../img/iphoneblock/iphone-13-pro-max-green-select.webp'
import w from '../../../img/iphoneblock/iphone-13-mini-green-select.webp'
import e from '../../../img/iphoneblock/iphone-13-pro-blue-select.webp'
import r from '../../../img/iphoneblock/iphone-13-blue-select-2021_QT6ur4J.webp'
import t from '../../../img/iphoneblock/12-Black.webp'
import y from '../../../img/iphoneblock/11-black_qdkqJZQ.webp'
import u from '../../../img/iphoneblock/iphone-se-midnight.webp' 
const iphoneblock = () => {
    const texAnimation ={
        hidden: {
          x:- 100,
          opacity:0,
        },
        visible: custom => ({
          x:- 0,
          opacity:1,
          transition:{delay: custom * 0.2},
        })
      }
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    className={s.Iphone}>
        <div className={s.block}>
            <motion.h1 custom={0} variants={texAnimation}>Выберите свой iPhone</motion.h1>
            <motion.p custom={1} variants={texAnimation}>Сравните все модели iPhone</motion.p>
            <NavLink to={'/Iphone'}>больше моделей... </NavLink>
        </div>
        <div className={s.wrap}>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <motion.h4>
                iPhone 13 Pro Max
                </motion.h4>
                <NavLink to={'iPhone13ProMax/'}>
                выбрать... 
                </NavLink>
                </div >
                    <motion.img custom={2} variants={texAnimation} src={q} alt="" />
                <motion.div>
                <h5>104140 сом</h5>
                <p>от $1270,0</p>
                </motion.div>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                iPhone 13 Pro
                </h4>
                <NavLink to={'/IPhone13Pro'}>
                выбрать... 
                </NavLink>
                </div>
                    <motion.img custom={3} variants={texAnimation} src={e} alt="" />
                <div>
                <h5>95525 сом</h5>
                <p>от $1170,0</p>

                </div>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                iPhone 13
                </h4>
                <NavLink to={'/Iphone13'}>
                выбрать... 
                </NavLink>
                </div>
                    <motion.img custom={4} variants={texAnimation}  src={r} alt="" />
                <div>
                <h5>74250 сом</h5>
                <p>от $900,0</p>

                </div>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                iPhone 13 mini
                </h4>
                <NavLink to={'/iPhone13mini'}>
                выбрать... 
                </NavLink>
                </div>
                    <motion.img custom={5} variants={texAnimation}  src={w} alt="" />
                <div>
                <h5>69300 сом</h5>
                <p>от $840,0</p>

                </div>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                iPhone 12
                </h4>
                <NavLink to={'/IPhone12'}>
                выбрать... 
                </NavLink>
                </div>
                    <motion.img custom={2} variants={texAnimation}  src={t} alt="" />
                <div>
                <h5>53625 сом</h5>
                <p>от $650,0</p>

                </div>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                iPhone 11
                </h4>
                <NavLink to={'/Iphone11'}>
                выбрать... 
                </NavLink>
                </div>
                    <motion.img custom={3} variants={texAnimation}  src={y} alt="" />
                <div>
                <h5>47850 сом</h5>
                <p>от $580,0</p>

                </div>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                Iphone SE
                </h4>
                <NavLink to={'/IphoneSE'}>
                выбрать... 
                </NavLink>
                </div>
                    <motion.img custom={4} variants={texAnimation}  src={u} alt="" />
                <div>
                <h5>41250 сом</h5>
                <p>от $500,0</p>

                </div>
            </div>
            
        </div>
    </motion.div>
  )
}

export default iphoneblock
import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import s from './Content.module.scss'
import q from '../../../img/contentimg/iMac-24.webp'
import w from '../../../img/contentimg//iPad-Pro.webp'
import e from '../../../img/contentimg/apple-watch.webp'
import r from '../../../img/contentimg/apple-tvvv.webp'
import t from '../../../img/contentimg/homepod-mini.webp'
import y from '../../../img/contentimg/airtag-key_UydLkmV_DFLucfg.webp'
import card from'../../../img/union.svg'
const Content = () => {
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
        className={s.flex}>
        <div className={s.width}>
            <NavLink to={'/Imac'} className={s.block}>
                <div className={s.block_text}>
                    <div className={s.height}>
                    <h4>Imac</h4>
                    <p>прирожденный Apple</p>
                    </div>
                    <div className={s.height}>
                        <h4>144320 СОМ</h4>
                        <p>от $1760,0</p>
                    </div>
                </div>
            <div className={s.image}>
                <motion.img custom={1} variants={texAnimation}  src={q} alt="" />
               <span> <img src={card} alt="" /> Выбрать...</span>
            </div>
            </NavLink>
            <NavLink to={'/Ipad'} className={s.block}>
                <div className={s.block_text}>
                    <div className={s.height}>
                    <h4>IPadPro</h4>
                    <p>Высшый уровень IPad</p>
                    </div>
                    <div className={s.height}>
                        <h4>95940 СОМ</h4>
                        <p>от $1170,0</p>
                    </div>
                </div>
            <div className={s.image}>
                <motion.img custom={2} variants={texAnimation}  src={w} alt="" />
               <span> <img src={card} alt="" /> Выбрать...</span>
            </div>
            </NavLink>
            <NavLink to={'/Watch'} className={s.block}>
                <div className={s.block_text}>
                    <div className={s.height}>
                    <h4>Watch</h4>
                    <p>Показывают максимум.</p>
                    </div>
                    <div className={s.height}>
                        <h4>69700 СОМ</h4>
                        <p>от $850,0</p>
                    </div>
                </div>
            <div className={s.image}>
                <motion.img custom={2} variants={texAnimation}  src={e} alt="" />
               <span> <img src={card} alt="" /> Выбрать...</span>
            </div>
            </NavLink>
            <NavLink to={''} className={s.block}>
                <div className={s.block_text}>
                    <div className={s.height}>
                    <h4>Apple TV 4k</h4>
                    <p>Вы не узнете свой телевизор</p>
                    </div>
                    <div className={s.height}>
                        <h4>18860 СОМ</h4>
                        <p>от $230,0</p>
                    </div>
                </div>
            <div className={s.image}>
                <motion.img custom={2} variants={texAnimation}  src={r} alt="" />
               <span> <img src={card} alt="" /> Выбрать...</span>
            </div>
            </NavLink>
            <NavLink to={''} className={s.block}>
                <div className={s.block_text}>
                    <div className={s.height}>
                    <h4>Homepod mini</h4>
                    <p>Звук, заполняющий комнату </p>
                    </div>
                    <div className={s.height}>
                        <h4>12300 СОМ</h4>
                        <p>от $150,0</p>
                    </div>
                </div>
            <div className={s.image}>
                <motion.img custom={1} variants={texAnimation}  src={t} alt="" />
               <span> <img src={card} alt="" /> Выбрать...</span>
            </div>
            </NavLink>
            <NavLink to={''} className={s.block}>
                <div className={s.block_text}>
                    <div className={s.height}>
                    <h4>AirTag</h4>
                    <p>Находчивые штучки</p>
                    </div>
                    <div className={s.height}>
                        <h4>2870 СОМ</h4>
                        <p>от $35,0</p>
                    </div>
                </div>
            <div className={s.image}>
                <motion.img custom={0} variants={texAnimation}  src={y} alt="" />
               <span> <img src={card} alt="" /> Выбрать...</span>
            </div>
            </NavLink>
        </div>
        
    </motion.div>
  )
}

export default Content
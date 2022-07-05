import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import s from './News.module.scss'
import q from '../../../img/News/News1.webp'
import w from '../../../img/News/News2.webp'
import e from '../../../img/News/News3.webp'
const News = () => {
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
    whileInView="visible">
         <div className={s.text}>
            <motion.h1 custom={0} variants={texAnimation}>Статьи и новости</motion.h1>
            <motion.p custom={1} variants={texAnimation}>Оставайтесь всегда в курсе событий</motion.p>
            <NavLink to={'/'}>подробнее... </NavLink>
        </div>
        <div className={s.blocknews}>

            <div className={s.news1}>
                <motion.img custom={2} variants={texAnimation} src={q} alt="" />
                <div className={s.text}>
                    <motion.p custom={3} variants={texAnimation}>15.12.20</motion.p>
                    <motion.h4 custom={4} variants={texAnimation}>Функция «Быстрое начало»</motion.h4>
                    <motion.p custom={5} variants={texAnimation}>Использование функции «Быстрое начало» <br /> 
                       для переноса данных на новое устройство <br /> 
                       iPhone, iPad или iPod touch</motion.p>
                       <NavLink to={'/'}>
                        подробнее 
                       </NavLink>
                </div>
                
            </div>
            <div className={s.news1}>
                <motion.img custom={3} variants={texAnimation} src={w} alt="" />
                <div className={s.text}>
                    <motion.p custom={3} variants={texAnimation}>03.03.22</motion.p>
                    <motion.h4 custom={4} variants={texAnimation}>Функция «Быстрое начало»</motion.h4>
                    <motion.p custom={5} variants={texAnimation}>Использование функции «Быстрое начало» <br /> 
                       для переноса данных на новое устройство <br /> 
                       iPhone, iPad или iPod touch</motion.p>
                       <NavLink to={'/'}>
                        подробнее 
                       </NavLink>
                </div>
               
            </div>
            <div className={s.news1}>
                <motion.img custom={4} variants={texAnimation} src={e} alt="" />
                <div className={s.text}>
                <motion.p custom={3} variants={texAnimation}>28.02.22</motion.p>
                    <motion.h4 custom={4} variants={texAnimation}>Функция «Быстрое начало»</motion.h4>
                    <motion.p custom={5} variants={texAnimation}>Использование функции «Быстрое начало» <br /> 
                       для переноса данных на новое устройство <br /> 
                       iPhone, iPad или iPod touch</motion.p>
                       <NavLink to={'/'}>
                        подробнее 
                       </NavLink>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default News
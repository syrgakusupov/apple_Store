import React from 'react'
import {motion} from 'framer-motion'
import s from  './Gatzhetblock.module.scss'
import {NavLink} from 'react-router-dom'
import q from '../../../img/gadzhet/fenix-7x-sapphire-solar-edition-black-dlc-1.webp'
import w from '../../../img/gadzhet/7x-solar-edition-slate-gray-1.webp'
const Gatzhetblock = () => {
    const texAnimation ={
        hidden: {
          y:- 100,
          opacity:0,
        },
        visible: custom => ({
          y: 0,
          opacity:1,
          transition:{delay: custom * 0.2},
        })
      }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    className={s.Gadzhet}>
        <div className={s.block}>
            <motion.h1 custom={0} variants={texAnimation}>Гаджеты</motion.h1>
            <motion.p custom={1} variants={texAnimation}>Всегда рядом</motion.p>
            <NavLink to={'/Watch'}>все гаджеты ... </NavLink>
        </div>
         <div className={s.wrap}>
         <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                fēnix® 7X – Sapphire Solar Edition
                </h4>   
                </div>
                    <motion.img custom={1} variants={texAnimation} src={q} alt="" />
                    <NavLink to={'/WatchSeries7Nike'}>
                выбрать... 
                </NavLink>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                fēnix® 7X – Sapphire Solar Edition
                </h4>
                </div>
                    <motion.img custom={2} variants={texAnimation} src={q} alt="" />
                    <NavLink to={'/WatchSeries7Nike'}>
                выбрать... 
                </NavLink>
            </div>
            <div className={s.block1}>
                <div className={s.NavLink}>
                <h4>
                fēnix® 7X – Solar Edition
                </h4>
                </div>
                    <motion.img custom={3} variants={texAnimation} src={w} alt="" />
                <NavLink to={'/'}>
                выбрать... 
                </NavLink>
            </div>
         </div>
    </motion.div>
  )
}

export default Gatzhetblock
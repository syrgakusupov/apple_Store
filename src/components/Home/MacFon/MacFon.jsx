import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import s from './MacFon.module.scss'
import q from '../../../img/macfon/seriphone.png'
import w from '../../../img/macfon/sermac.png'
const MacFon = () => {
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
    className={s.block}>
       <div className={s.iphone}>
       <div className={s.text}>
            <motion.h2 custom={0} variants={texAnimation}>iPhone сервис</motion.h2>
            <motion.p custom={1} variants={texAnimation}>Сломался телефон? Не беда! Мы решим вашу проблему.</motion.p>
            <NavLink to={'/'}>перейти... </NavLink>
        </div>
        <div className={s.img}>
            <motion.img custom={2} variants={texAnimation} src={q} alt="" />
        </div>
       </div>

       <div className={s.iphone}>
       <div className={s.text}>
            <motion.h2 custom={0} variants={texAnimation}>MacBook сервис</motion.h2>
            <motion.p custom={1} variants={texAnimation}>Все необходимые запчасти и аксессуары для вашего MacBook</motion.p>
            <NavLink to={'/'}>перейти... </NavLink>
        </div>
        <div className={s.img}>
            <motion.img custom={2} variants={texAnimation} src={w} alt="" />
        </div>
       </div>
    </motion.div>
  )
}

export default MacFon
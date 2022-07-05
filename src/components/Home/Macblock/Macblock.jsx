import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import s from './Macblock.module.scss'
import video from '../../../vidio/air-monterey-large_2x_sBfJLQD.mp4'
const Macblock = () => {
  const texAnimation ={
    hidden: {
      x:- 100,
      opacity:0,
    },
    visible: custom => ({
      x:- 0,
      opacity:1,
      transition:{delay: custom * 0.1},
    })
  }
  return (
    <motion.div initial="hidden"
        whileInView="visible">
        <div className={s.block}>
            <motion.h1 custom={1} variants={texAnimation}>Выберите свой Mac.</motion.h1>
            <motion.p custom={2} variants={texAnimation}>Суперсила. Профессионалов</motion.p>
            <NavLink to={'/Gadzhet'}>подробнее... </NavLink>
        </div>
        <div className={s.video}>
             <video src={video} autoPlay loop></video>
        </div>
        
    </motion.div>
  )
}

export default Macblock
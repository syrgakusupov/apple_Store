import React from 'react'
import {motion} from 'framer-motion'
import s from './Hero.module.scss'
import {NavLink} from 'react-router-dom'
import hero from '../../../img/hero/Untitled.png'
const Hero = () => {
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
    <motion.div
    initial="hidden"
    whileInView="visible"
    className={s.hero_fon}>
        <div>
            <motion.h1 custom={0} variants={texAnimation} >
                HERO10
            </motion.h1>
            <motion.p custom={1} variants={texAnimation}> 
            Быстрее. Плавнее. Легче.
            </motion.p>
            <NavLink  to={''}>
            подробнее... 
            выбрать...
            </NavLink>
        </div>
        <motion.div custom={2} variants={texAnimation}>
            <img src={hero} alt="" />
        </motion.div>
        <div>
            
        </div>

    </motion.div>
  )
}

export default Hero
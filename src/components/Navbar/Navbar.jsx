import React from 'react'
import Nav from '../../contants/Nav'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.scss'
import iphone from '../../img/iphonelogo.svg'
import Mac from '../../img/macbooklogo.svg'
import Ipad from '../../img/ipadlogo.svg'
import Imac from '../../img/iMac.svg'
import Watch from '../../img/watchlogo.svg'
import AirPods from '../../img/airpodslogo.svg'
import sun from '../../img/day.png'
import moon from '../../img/evining.png'
const Navbar = ({handleclick, check}) => {

  return (
    <div className={s.Navbar}>
        <NavLink className={s.iphone} to={"/Iphone"}>
            <img src={iphone} alt="" />
            <p>Iphone</p>
        </NavLink>
        <NavLink className={s.Mac} to={'/Mac'}>
            <img src={Mac} alt="" />
            <p>Mac</p>
        </NavLink>
        <NavLink to={"/Ipad"}>
            <img src={Ipad} alt="" />
            <p>Ipad</p>
        </NavLink>
        <NavLink to={"/Imac"}>
            <img src={Imac} alt="" />
            <p>Imac</p>
        </NavLink>
        <NavLink className={s.Watch} to={"/Watch"}>
            <img src={Watch} alt="" />
            <p>Watch</p>
        </NavLink>
        <NavLink className={s.AirPods} to={"/"}>
            <img src={AirPods} alt="" />
            <p>Airpods</p>
        </NavLink>
        <div className={s.img}>
        <img onClick={handleclick}
         src={check ? sun :moon } alt="" />
        </div>
        
    </div>
  )
}

export default Navbar
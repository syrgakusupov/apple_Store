import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Imac.module.scss'
import q from '../../img/Imac/a.webp'
import w from '../../img/Imac/b.webp'
import e from '../../img/Imac/c.webp'
import r from '../../img/Imac/d.webp'

import pq from '../../img/Imac/pa.jpeg'
import pw from '../../img/Imac/pb.jpeg'
import pe from '../../img/Imac/pc.jpeg'
import pr from '../../img/Imac/pd.jpeg'

import card from '../../img/union.svg'
import max from '../../img/Imac/m1.png'

const MacBookPro16 = () => {
    const [mac,setMac] = useState(q)
    const [mac1,setMac1] = useState(q)
    const [mac2,setMac2] = useState(q)
  return (
    <section>
        <h3>MacBook Pro 16</h3>
        <div className={s.block}>
        <div className={s.block1}>
            
            <img src={mac} alt="" />
            <div className={s.btn}>
            <img onClick={()=>setMac(q)} src={pq} alt="" />
            <img onClick={()=>setMac(w)} src={pw} alt="" />
            <img onClick={()=>setMac(e)} src={pe} alt="" />
            <img onClick={()=>setMac(r)} src={pr} alt="" />
            </div>

            <div className={s.text}>
            <h5>MacBook Pro 16" (10-CPU, <br /> 
                32-GPU, 32GB RAM, 1TB)</h5>
              <img src={max} alt="" />
                <p>
                8-ядерный процессор<br />
                8-ядерный графический процессор<br />
                8-ядерная система Neural Engine<br />
                8 ГБ объединённой памяти<br />
                SSD-накопитель 1 ТБ<br />
                Дисплей Liquid Retina XDR 16 дюймов<br />
                Три порта Thunderbolt 4<br />
                Порт HDMI<br />
                Слот для карт SDXC<br />
                Разъём питания MagSafe 3<br />
                Клавиатура Magic Keyboard с Touch ID<br />
                Трекпад Force Touch<br />
                Адаптер питания USB-C 140 Вт<br />
                </p>
            </div>
            <div className={s.pages}>
            <h6>От 350700 сом</h6>
            <p>$4200,0</p>
              
              <NavLink to={'/'}>
                <img src={card} alt="" />
                выбрать...
              </NavLink>
            </div>
        </div>


        <div className={s.block1}>
        
            <img src={mac1} alt="" />
            <div className={s.btn}>
            <img onClick={()=>setMac1(q)} src={pq} alt="" />
            <img onClick={()=>setMac1(w)} src={pw} alt="" />
            <img onClick={()=>setMac1(e)} src={pe} alt="" />
            <img onClick={()=>setMac1(r)} src={pr} alt="" />
            </div>

            <div className={s.text}>
            <h5>MacBook Pro 16" (10-CPU, <br /> 
                16-GPU, 32GB RAM, 1TB)</h5>
              <img src={max} alt="" />
                <p>
                  8-ядерный процессор<br />
                  8-ядерный графический процессор<br />
                  8-ядерная система Neural Engine<br />
                  8 ГБ объединённой памяти<br />
                  SSD-накопитель 1 ТБ<br />
                  Дисплей Liquid Retina XDR 16 дюймов<br />
                  Три порта Thunderbolt 4<br />
                  Порт HDMI<br />
                  Слот для карт SDXC<br />
                  Разъём питания MagSafe 3<br />
                  Клавиатура Magic Keyboard с Touch ID<br />
                  Трекпад Force Touch<br />
                  Адаптер питания USB-C 140 Вт
                </p>
            </div>
            <div className={s.pages}>
            <h6>От 288075 сом</h6>
            <p>$3450,0</p>
              
              <NavLink to={'/'}>
                <img src={card} alt="" />
                выбрать...
              </NavLink>
            </div>
        </div>


        <div className={s.block1}>
        
            <img src={mac2} alt="" />
            <div className={s.btn}>
            <img onClick={()=>setMac2(q)} src={pq} alt="" />
            <img onClick={()=>setMac2(w)} src={pw} alt="" />
            <img onClick={()=>setMac2(e)} src={pe} alt="" />
            <img onClick={()=>setMac2(r)} src={pr} alt="" />
            </div>

            <div className={s.text}>
            <h5>MacBook Pro 16" (10-CPU,<br />  
            16-GPU, 32GB RAM, 512GB)</h5>
              <img src={max} alt="" />
                <p>
                  8-ядерный процессор<br />
                  8-ядерный графический процессор<br />
                  8-ядерная система Neural Engine<br />
                  8 ГБ объединённой памяти<br />
                  SSD-накопитель 512 ГБ<br />
                  Дисплей Liquid Retina XDR 16 дюймов<br />
                  Три порта Thunderbolt 4<br />
                  Порт HDMI<br />
                  Слот для карт SDXC<br />
                  Разъём питания MagSafe 3<br />
                  Клавиатура Magic Keyboard с Touch ID<br />
                  Трекпад Force Touch<br />
                  Адаптер питания USB-C 140 Вт
                </p>
            </div>
            <div className={s.pages}>
            <h6>От 275550 сом</h6>
            <p>$3300,0</p>
              
              <NavLink to={'/'}>
                <img src={card} alt="" />
                выбрать...
              </NavLink>
            </div>
        </div>


        </div>
    </section>
  )
}

export default MacBookPro16
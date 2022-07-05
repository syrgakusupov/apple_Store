import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './MacBookPro16.module.scss'
import w from '../../../img/Mac/MacBookPro16/a.webp'
import q from '../../../img/Mac/MacBookPro16/b.webp'
import card from '../../../img/union.svg'
import max from '../../../img/Mac/MacBookPro16/mac.png'
import pro from '../../../img/Mac/MacBookPro16/pro.png'
const MacBookPro16 = () => {
    const [mac,setMac] = useState(q)
    const [mac1,setMac1] = useState(q)
    const [mac2,setMac2] = useState(q)
    const [mac3,setMac3] = useState(q)
  return (
    <section>
        <h3>MacBook Pro 16</h3>
        <div className={s.block}>
        <div to={'/'} className={s.block1}>
            
            <img src={mac} alt="" />
            <div className={s.btn}>
            <button className={s.black} onClick={()=>setMac(w)}></button>
            <button className={s.white} onClick={()=>setMac(q)}></button>
            </div>

            <div className={s.text}>
            <h5>MacBook Pro 16" (10-CPU, <br /> 
                32-GPU, 32GB RAM, 1TB)</h5>
              <img src={max} alt="" />
                <p>
                10-ядерный процессор<br />
                32-ядерный графический процессор<br />
                16-ядерная система Neural Engine<br />
                32 ГБ объединённой памяти<br />
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


        <div to={'/'} className={s.block1}>
        
            <img src={mac1} alt="" />
            <div className={s.btn}>
            <button className={s.black} onClick={()=>setMac1(w)}></button>
            <button className={s.white} onClick={()=>setMac1(q)}></button>
            </div>

            <div className={s.text}>
            <h5>MacBook Pro 16" (10-CPU, <br /> 
                16-GPU, 32GB RAM, 1TB)</h5>
              <img src={pro} alt="" />
                <p>
                  10-ядерный процессор<br />
                  16-ядерный графический процессор<br />
                  16-ядерная система Neural Engine<br />
                  32 ГБ объединённой памяти<br />
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


        <div to={'/'} className={s.block1}>
        
            <img src={mac2} alt="" />
            <div className={s.btn}>
            <button className={s.black} onClick={()=>setMac2(w)}></button>
            <button className={s.white} onClick={()=>setMac2(q)}></button>
            </div>

            <div className={s.text}>
            <h5>MacBook Pro 16" (10-CPU,<br />  
            16-GPU, 32GB RAM, 512GB)</h5>
              <img src={pro} alt="" />
                <p>
                  10-ядерный процессор<br />
                  16-ядерный графический процессор<br />
                  16-ядерная система Neural Engine<br />
                  32 ГБ объединённой памяти<br />
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


        <div to={'/'} className={s.block1}>
        
            <img src={mac3} alt="" />
            <div className={s.btn}>
            <button className={s.black} onClick={()=>setMac3(w)}></button>
            <button className={s.white} onClick={()=>setMac3(q)}></button>
            </div>

            <div className={s.text}>
            <h5>MacBook Pro 16" (10-CPU,<br />  
                16-GPU, 16GB RAM, 1TB)</h5>
              <img src={pro} alt="" />
                <p>
                  10-ядерный процессор<br />
                  16-ядерный графический процессор<br />
                  16-ядерная система Neural Engine<br />
                  32 ГБ объединённой памяти<br />
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
            <h6>От 249665 сом</h6>
            <p>$2990,0</p>
              
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
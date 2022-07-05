import React,{ useState } from 'react'
import s from './Iphone11.module.scss'
import q from '../../../img/iphone/Iphone11/11-a.webp'
import w from '../../../img/iphone/Iphone11/11-b.webp'
import e from '../../../img/iphone/Iphone11/11-c.webp'
import r from '../../../img/iphone/Iphone11/11-d.webp'
import t from '../../../img/iphone/Iphone11/11-e.webp'
import y from '../../../img/iphone/Iphone11/11-f.webp'


import camera from '../../../img/iphone/iPhone13ProMax/camera.png'
import bionic from '../../../img/iphone/Iphone11/A13_EWKSCLC.png'
import resolution from '../../../img/iphone/iPhone13ProMax/resolution.png'
import ceramic from '../../../img/iphone/iPhone13ProMax/ceramic.png'
const Iphone11 = () => {
  const [img,setImg] = useState(q)
  const [text,setText] = useState(104775+' сом')
  const a = 47850+ ' сом';
  const d = 53625+ ' сом';
  return (
    <div className={s.block}>
        <div className={s.block1}>
            <div>
            <img src={img} width={400} alt="" />
            </div>
            <div>
            <img className={s.hover} src={img} width={200} alt="" />
            </div>
        </div>

        <div className={s.block2}>
            <h4>iPhone 11</h4>

            <div className={s.blockk}>
            <p>Цвет</p>
            <div className={s.btn}>
            <button className={s.a} onClick={()=>setImg(q)}></button>
            <button className={s.b} onClick={()=>setImg(y)}></button>
            <button className={s.v} onClick={()=>setImg(w)}></button>
            <button className={s.g} onClick={()=>setImg(e)}></button>
            <button className={s.d} onClick={()=>setImg(t)}></button>
            <button className={s.e} onClick={()=>setImg(r)}></button>
            </div>
            </div>

            <div className={s.pamit}>
                <p>Память</p>
                <div className={s.pamit1}>
                <button onClick={()=>setText(a)}>64 gb</button>
                <button onClick={()=>setText(d)}>128 gb</button>
                </div>
              <div className={s.price}>
              <p>{text}</p>
              </div>
              <div className={s.btn_k}>
                <button>Купить</button>
              </div>
            </div>
            <div className={s.harac}>
              <h4>Основные характеристики</h4>
            <div className={s.cambion}>
              <div>
                <img src={camera} alt="" />
                <p>12-Мп фронтальная камера <br /> 
                   TrueDepth с режимом портрета, <br /> 
                   видео 4K и slo-mo</p>
              </div>
              <div>
                <img src={bionic} alt="" />
                <p>Чип A13 Bionic с 4-ядерным <br /> 
                   графическим процессором</p>
              </div>
            </div>
              <div className={s.rescera}>
                <div>
                  <img src={resolution} alt="" />
                  <p>6,1-дюймовый дисплей Super Retina <br /> 
                     HD</p>
                </div>
                <div>
                  <img src={ceramic} alt="" />
                  <p>Дисплей из прочного стекла, <br /> 
                     торцы из алюминия</p>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Iphone11;
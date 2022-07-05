import React,{ useState } from 'react'
import s from './IphoneSE.module.scss'
import q from '../../../img/iphone/IphoneSE/a.webp'
import w from '../../../img/iphone/IphoneSE/b.webp'
import e from '../../../img/iphone/IphoneSE/c.webp'


import camera from '../../../img/iphone/IphoneSE/icon_se_camera__cs1t6sujjdiu_large_2x.png'
import bionic from '../../../img/iphone/IphoneSE/a15-bionic_UQ4Eefr.png'
import resolution from '../../../img/iphone/iPhone13ProMax/resolution.png'
import ceramic from '../../../img/iphone/iPhone13ProMax/ceramic.png'
const Iphone11 = () => {
  const [img,setImg] = useState(q)
  const [text,setText] = useState(104775+' сом')
  const a = 41250+ ' сом';
  const d = 45375+ ' сом';
  const b = 53625+ ' сом';
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
            <button className={s.b} onClick={()=>setImg(w)}></button>
            <button className={s.v} onClick={()=>setImg(e)}></button>
            </div>
            </div>

            <div className={s.pamit}>
                <p>Память</p>
                <div className={s.pamit1}>
                <button onClick={()=>setText(a)}>64 gb</button>
                <button onClick={()=>setText(d)}>128 gb</button>
                <button onClick={()=>setText(b)}>256 gb</button>
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
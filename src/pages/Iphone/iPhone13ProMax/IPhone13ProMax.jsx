import React,{ useState } from 'react'
import s from './iPhone13ProMax.module.scss'
import q from '../../../img/iphone/iPhone13ProMax/a.webp'
import w from '../../../img/iphone/iPhone13ProMax/b.webp'
import e from '../../../img/iphone/iPhone13ProMax/v.webp'
import r from '../../../img/iphone/iPhone13ProMax/g.webp'
import t from '../../../img/iphone/iPhone13ProMax/d.webp'
import camera from '../../../img/iphone/iPhone13ProMax/camera.png'
import bionic from '../../../img/iphone/iPhone13ProMax/bionic.png'
import resolution from '../../../img/iphone/iPhone13ProMax/resolution.png'
import ceramic from '../../../img/iphone/iPhone13ProMax/ceramic.png'
const IPhone13ProMax = () => {
  const [img,setImg] = useState(q)
  const [text,setText] = useState(97695+' сом')
  const a = 97695+ ' сом';
  const d = 114395+ ' сом';
  const b = 122745+ ' сом';
  const v = 129425+ ' сом';
  const g = 146125+ ' сом';
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
            <h4>iPhone 13 Pro Max</h4>

            <div className={s.blockk}>
            <p>Цвет</p>
            <div className={s.btn}>
            <button className={s.a} onClick={()=>setImg(q)}></button>
            <button className={s.b} onClick={()=>setImg(w)}></button>
            <button className={s.v} onClick={()=>setImg(e)}></button>
            <button className={s.g} onClick={()=>setImg(r)}></button>
            <button className={s.d} onClick={()=>setImg(t)}></button>
            </div>
            </div>

            <div className={s.pamit}>
                <p>Память</p>
                <div className={s.pamit1}>
                <button onClick={()=>setText(a)}>128 gb</button>
                <button onClick={()=>setText(b)}>512 gb</button>
                <button onClick={()=>setText(v)}>256 gb</button>
                <button onClick={()=>setText(d)}>1 tb</button>
                <button onClick={()=>setText(g)}>1 tb</button>
                
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
                <p>Самая большая модернизация <br /> 
                   системы камер Pro</p>
              </div>
              <div>
                <img src={bionic} alt="" />
                <p>A15 Bionic с 5-ядерным GPU - самый <br /> 
                   быстрый чип в смартфоне</p>
              </div>
            </div>
              <div className={s.rescera}>
                <div>
                  <img src={resolution} alt="" />
                  <p>6,7-дюймовый дисплей Super Retina <br />
                     XDR с функцией ProMotion 120Гц</p>
                </div>
                <div>
                  <img src={ceramic} alt="" />
                  <p>Дисплей Ceramic Shield прочнее, <br /> 
                     чем любое стекло смартфона</p>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default IPhone13ProMax;
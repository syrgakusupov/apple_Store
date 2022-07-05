import React,{ useState } from 'react'
import s from './IPhone13.module.scss'
import w from '../../../img/iphone/Iphone13/iphone-13b.webp'
import q from '../../../img/iphone/Iphone13/iphone-13a.webp'
import e from '../../../img/iphone/Iphone13/iphone-13c.webp'
import r from '../../../img/iphone/Iphone13/iphone-13d.webp'
import t from '../../../img/iphone/Iphone13/iphone-13e.webp'
import y from '../../../img/iphone/Iphone13/iphone-13g.webp'
import camera from '../../../img/iphone/iPhone13ProMax/camera.png'
import bionic from '../../../img/iphone/iPhone13ProMax/bionic.png'
import resolution from '../../../img/iphone/iPhone13ProMax/resolution.png'
import ceramic from '../../../img/iphone/iPhone13ProMax/ceramic.png'
const IPhone13ProMax = () => {
  const [img,setImg] = useState(y)
  const [text,setText] = useState(104775+' сом')
  const a = 74250+ ' сом';
  const d = 80850+ ' сом';
  const b = 89925+ ' сом';
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
            <h4>iPhone 13</h4>

            <div className={s.blockk}>
            <p>Цвет</p>
            <div className={s.btn}>
            <button className={s.b} onClick={()=>setImg(y)}></button>
            <button className={s.a} onClick={()=>setImg(q)}></button>
            <button className={s.v} onClick={()=>setImg(w)}></button>
            <button className={s.g} onClick={()=>setImg(e)}></button>
            <button className={s.d} onClick={()=>setImg(t)}></button>
            <button className={s.e} onClick={()=>setImg(r)}></button>
            </div>
            </div>

            <div className={s.pamit}>
                <p>Память</p>
                <div className={s.pamit1}>
                <button onClick={()=>setText(a)}>128 gb</button>
                <button onClick={()=>setText(d)}>256 gb</button>
                <button onClick={()=>setText(b)}>512 gb</button>
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
                <p>Система с двумя камерами для <br /> 
                   съемки фото и видео в условиях <br /> 
                   низкой освещенности</p>
              </div>
              <div>
                <img src={bionic} alt="" />
                <p>A15 Bionic с 4-ядерным <br /> 
                   графическим процессором - <br /> 
                   быстрее, чем у конкурентов</p>
              </div>
            </div>
              <div className={s.rescera}>
                <div>
                  <img src={resolution} alt="" />
                  <p>6,1-дюймовый дисплей Super Retina <br />  
                     XDR с True Tone</p>
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
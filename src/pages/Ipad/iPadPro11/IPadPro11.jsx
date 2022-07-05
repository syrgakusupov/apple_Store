import React,{ useState } from 'react'
import s from './iPadPro11.module.scss'
import w from '../../../img/Ipad/iPad-Pro-12-9/a.webp'
import q from '../../../img/Ipad/iPad-Pro-12-9/b.webp'
import camera from '../../../img/Ipad/iPad-Pro-12-9/M1.png'
import bionic from '../../../img/Ipad/iPad-Pro-12-9/m2.png'
import resolution from '../../../img/Ipad/iPad-Pro-12-9/m3.png'
import ceramic from '../../../img/Ipad/iPad-Pro-12-9/m4.png'
const IPadPro11 = () => {
  const [img,setImg] = useState(q)
  const [text,setText] = useState(97695+' сом')
  const a = 75150+ ' сом';
  const d = 83500+ ' сом';
  const b = 100200+ ' сом';
  const v = 108550+ ' сом';
  const g = 125250+ ' сом';
  const p = 125250+ ' сом';
  const o = 183700+ ' сом';
  return (
    <div className={s.block}>
        <div className={s.block1}>
            <div>
            <img src={img} width={400} alt="" />
            </div>
            <div className={s.hover}>
            <img  src={img} width={200} alt="" />
            </div>
        </div>

        <div className={s.block2}>
            <h4>iPad Pro 12.9" (2021)</h4>

            <div className={s.blockk}>
            <p>Цвет</p>
            <div className={s.btn}>
            <button className={s.a} onClick={()=>setImg(q)}></button>
            <button className={s.b} onClick={()=>setImg(w)}></button>
            </div>
            </div>

            <div className={s.pamit}>
                <p>Память</p>
                <div className={s.pamit1}>
                <button onClick={()=>setText(a)}>128 gb</button>
                <button onClick={()=>setText(d)}>256gb</button>
                <button onClick={()=>setText(b)}>512 gb</button>
                <button onClick={()=>setText(v)}>1 tb</button>
                <button onClick={()=>setText(g)}>2 tb</button>
                
                </div>
                
              <div className={s.pamit}>
              <p>Возможности подключения</p>
              <div className={s.pamit1}>
              <button onClick={()=>setText(o)}>Wi-Fi</button>
              <button onClick={()=>setText(p)}>Wi-Fi +</button>
              </div>
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
                <p>Чип Apple M1 с <br /> 
                    производительностью нового <br />
                     уровня</p>
              </div>
              <div>
                <img src={bionic} alt="" />
                <p>11,9-дюймовый дисплей Liquid <br />
                     Retina XDR с функциями ProMotion, <br /> 
                     True Tone

</p>
              </div>
            </div>
              <div className={s.rescera}>
                <div>
                  <img src={resolution} alt="" />
                  <p>Поддерживает Apple Pencil (2-го <br /> 
                     поколения), Magic Keyboard и Smart <br /> 
                     Keyboard Folio</p>
                </div>
                <div>
                  <img src={ceramic} alt="" />
                  <p>5G для сверхскоростной загрузки и <br /> 
                    высококачественного потокового <br /> 
                  вещания</p>
                </div>
              </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default IPadPro11;
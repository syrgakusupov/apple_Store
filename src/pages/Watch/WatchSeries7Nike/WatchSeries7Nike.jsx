import React,{ useState } from 'react'
import s from './WatchSeries7Nike.module.scss'
import e from '../../../img/watch/Watchseries7/a.webp'
import r from '../../../img/watch/Watchseries7/b.webp'
import t from '../../../img/watch/Watchseries7/c.webp'
import camera from '../../../img/watch/Watchseries7/wq.png'
import bionic from '../../../img/watch/Watchseries7/ww.png'
import resolution from '../../../img/watch/Watchseries7/we.png'
import ceramic from '../../../img/watch/Watchseries7/wr.png'
const Watchseries7 = () => {
  const [img,setImg] = useState(e)
  const [text,setText] = useState(70975+' сом')
  const a = 70975+ ' сом';
  const b = 78490+ ' сом';
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
            <h4>Watch Series 7 with Stainless Steel Case</h4>

            <div className={s.blockk}>
            <p>Цвет</p>
            <div className={s.btn}>
            <button className={s.v} onClick={()=>setImg(e)}></button>
            <button className={s.g} onClick={()=>setImg(r)}></button>
            <button className={s.d} onClick={()=>setImg(t)}></button>
            </div>
            </div>

            <div className={s.pamit}>
                <p>Память</p>
                <div className={s.pamit1}>
                <button onClick={()=>setText(a)}>Оргинал</button>
                <button onClick={()=>setText(b)}>Подоргинал</button>
                
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
                <p>На сегодняшний день, это самый <br /> 
                    большой дисплей Always-On Retina</p>
              </div>
              <div>
                <img src={bionic} alt="" />
                <p>Дисплей устойчив к царапинам, <br /> 
                    а также пыле-влагозащищенный</p>
              </div>
            </div>
              <div className={s.rescera}>
                <div>
                  <img src={resolution} alt="" />
                  <p>Датчик измерения уровня <br />
                     кислорода в крови</p>
                </div>
                <div>
                  <img src={ceramic} alt="" />
                  <p>Сделайте ЭКГ, в любое время и <br /> 
                        в любом месте</p>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Watchseries7;
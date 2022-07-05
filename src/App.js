import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import s from './App.module.scss'
import Home from '././pages/Home/Home'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Iphone from './pages/Iphone/Iphone'
import Mac from './pages/Mac/Mac'
import Ipad from './pages/Ipad/Ipad'
import Imac from './pages/Imac/Imac'
import Watch from './pages/Watch/Watch'
import AirPods from './pages/AirPods/AirPods'

import Footer from './components/footer/Footer'

import IPhone13ProMax from './pages/Iphone/iPhone13ProMax/IPhone13ProMax'
import IPhone13Pro from './pages/Iphone/IPhone13Pro/IPhone13Pro'
import IPhone13 from './pages/Iphone/iPhone13/IPhone13'
import IPhone13mini from './pages/Iphone/iPhone13mini/IPhone13mini'
import IPhone12 from './pages/Iphone/IPhone12/IPhone12'
import Iphone11 from './pages/Iphone/Iphone11/Iphone11'
import IphoneSE from './pages/Iphone/IphoneSE/IphoneSE'

import MacBookPro16 from './pages/Mac/MacBookPro16/MacBookPro16'

import IPadPro12_9 from './pages/Ipad/iPadPro12.9/IPadPro12_9'
import IPadPro11 from './pages/Ipad/iPadPro11/IPadPro11'
import IPadmini8 from './pages/Ipad/IPadmini8/IPadmini8'
import IPadAir10 from './pages/Ipad/IPadAir10/IPadAir10'

import Watchseries7 from './pages/Watch/Watchseries7/Watchseries7'
import WatchSeries7Nike from './pages/Watch/WatchSeries7Nike/WatchSeries7Nike'
const App = () => {
  const [check, setchek] = useState(true)
  function handleclick() {
    setchek(!check)
  }

  return (
    <BrowserRouter>
      <div className={check ? s.sun : s.night}>
        <div className={s.App}>
          <div className={s.app}>
            <Header />
          </div>
          <div className={s.Navbar}>
            <Navbar check={check} handleclick={handleclick} />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Iphone' element={<Iphone />} />
          <Route path='/Mac' element={<Mac />} />
          <Route path='/Ipad' element={<Ipad />} />
          <Route path='/imac' element={<Imac />} />
          <Route path='/Watch' element={<Watch />} />
          <Route path='/' element={<AirPods />} />

          <Route path='/iPhone13ProMax' element={<IPhone13ProMax />} />
          <Route path='/iPhone13Pro' element={<IPhone13Pro />} />
          <Route path='/iPhone13' element={<IPhone13 />} />
          <Route path='/iPhone13mini' element={<IPhone13mini />} />
          <Route path='/IPhone12' element={<IPhone12 />} />
          <Route path='/Iphone11' element={<Iphone11 />} />
          <Route path='/IphoneSE' element={<IphoneSE />} />

          <Route path='/MacBookPro16' element={<MacBookPro16 />} />

          <Route path='/IPadPro12_9' element={<IPadPro12_9 />} />
          <Route path='/IPadPro11' element={<IPadPro11 />} />
          <Route path='/IPadAir10' element={<IPadAir10 />} />
          <Route path='/IPadmini8' element={<IPadmini8 />} />

          <Route path='/Watchseries7' element={<Watchseries7 />} />
          <Route path='/WatchSeries7Nike' element={<WatchSeries7Nike />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
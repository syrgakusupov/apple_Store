import React from 'react'
import Homepage from '../../components/Home/Homepage'
import Content from '../../components/Home/content/Content'
import Hero from '../../components/Home/Hero/Hero'
import Iphoneblock from '../../components/Home/Iphoneblock/Iphoneblock'
import Gatzhetblock from '../../components/Home/gatzhetblock/Gatzhetblock'
import Macblock from '../../components/Home/Macblock/Macblock'
import MacFon from '../../components/Home/MacFon/MacFon'
import News from '../../components/Home/News/News'
const Home = () => {
  return (
    <div>
       <Homepage/>
      <Content/>
      <Hero/>
      <Iphoneblock/>
      <Gatzhetblock/>
      <Macblock/>
      <MacFon/>
      <News/>
    </div>
  )
}

export default Home
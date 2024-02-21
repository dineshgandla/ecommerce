import React from 'react'
import HeroSection from '../../components/HeroSection'
import Services from '../../components/Services'
import Trusted from '../../components/Trusted'
import FeatureProducts from '../../components/FeatureProducts'

const Home = () => {
  const data = {
    name:"Shop"
  }
  return (
    <div>
      <HeroSection Data={data}/>
      <FeatureProducts/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default Home

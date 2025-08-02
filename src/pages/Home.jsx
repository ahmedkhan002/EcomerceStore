import React from 'react'
import HeroSection from '../components/home/HeroSection'
import WeeklyDeals from '../components/home/WeeklyDeals'
import HomeOutdoor from '../components/home/HomeOutdoor'
import ElectronicGadgets from '../components/home/ElectronicGadgets'
import ReqSupplier from '../components/home/ReqSupplier'
import RecomItems from '../components/home/RecomItems'
import ExtraServices from '../components/home/ExtraServices'
import Suppliers from '../components/home/Suppliers'
import NewsLetter from '../components/home/NewsLetter'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WeeklyDeals />
      <HomeOutdoor />
      <ElectronicGadgets />
      <ReqSupplier />
      <RecomItems />
      <ExtraServices />
      <Suppliers />
      <NewsLetter />
    </div>
  )
}

export default Home

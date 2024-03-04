import React from 'react'
import Favorites from '../Banner/Favorites'
import Banner1 from '../Banner/Banner1'
import Slide from '../Banner/Slide'
import NewArrival from '../Banner/NewArrival'
import FeaturedItem from '../Banner/FeaturedItem'
import HeroSection from '../Banner/HeroSection'

const Banners = () => {
  return (
    <>
    <HeroSection />
    <Favorites />
    <Banner1 />
    <FeaturedItem />
    <Slide />
    <NewArrival />
    </>
  )
}

export default Banners
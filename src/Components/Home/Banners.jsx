import React from 'react'
import MainBanner from '../Banner/MainBanner'
import Favorites from '../Banner/Favorites'
import Banner1 from '../Banner/Banner1'
import Slide from '../Banner/Slide'
import NewArrival from '../Banner/NewArrival'
import FeaturedItem from '../Banner/FeaturedItem'

const Banners = () => {
  return (
    <>
    <MainBanner />
    <Favorites />
    <Banner1 />
    <FeaturedItem />
    <Slide />
    <NewArrival />
    </>
  )
}

export default Banners
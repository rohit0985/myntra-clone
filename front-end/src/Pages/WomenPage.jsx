import React from 'react'
import BiggestDeals from '../Components/WomenPageComponents/BiggestDeals'
import ExploreTopBrands from '../Components/WomenPageComponents/ExploreTopBrands'
import TrendingInWestern from '../Components/WomenPageComponents/TrendingInWestern'
import TrendingInAccessories from '../Components/WomenPageComponents/TrendingInAccessories'
import TrendingInFootWear from '../Components/WomenPageComponents/TrendingInFootWear'
import TrendingInIndian from '../Components/WomenPageComponents/TrendingInIndian'
import TrendingInSports from '../Components/WomenPageComponents/TrendingInSports'
import CategoriesToBag from '../Components/WomenPageComponents/CategoriesToBag'
import Women_Carousel from '../Components/WomenPageComponents/Women_Carousel'
import Navbar from '../Components/Navbar/Navbar'
const WomenPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Women_Carousel/>
      <BiggestDeals/>
      <CategoriesToBag/>
      <ExploreTopBrands/>
      <TrendingInWestern/>
      <TrendingInIndian/>
      <TrendingInSports/>
      <TrendingInFootWear/>
      <TrendingInAccessories/>
    </>
  )
}

export default WomenPage

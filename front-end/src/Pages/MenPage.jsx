import React from 'react'
import BiggestDeals from '../Components/MenPageComponents/BiggestDeals'
import ExploreTopBrands from '../Components/MenPageComponents/ExploreTopBrands'
import MyntraLuxe from '../Components/MenPageComponents/MyntraLuxe'
import TrendingInAccessories from '../Components/MenPageComponents/TrendingInAccessories'
import TrendingInFootWear from '../Components/MenPageComponents/TrendingInFootWear'
import TrendingInIndian from '../Components/MenPageComponents/TrendingInIndian'
import TrendingInSports from '../Components/MenPageComponents/TrendingInSports'
import CategoriesToBag from '../Components/MenPageComponents/CategoriesToBag'
import Men_Carousel from '../Components/MenPageComponents/Men_Carousel'
const MenPage = () => {
  return (
    <>
    <Men_Carousel/>
      <BiggestDeals/>
      <CategoriesToBag/>
      <ExploreTopBrands/>
      <MyntraLuxe/>
      <TrendingInIndian/>
      <TrendingInSports/>
      <TrendingInFootWear/>
      <TrendingInAccessories/>
    </>
  )
}

export default MenPage

import React from 'react'
import BudgetBuy from '../Components/KidsPageComponents/BudgetBuy'
import ExploreMore from '../Components/KidsPageComponents/ExploreMore'
import FashionAndEssentials from '../Components/KidsPageComponents/FashionAndEssentials'
import FavoritBrands from '../Components/KidsPageComponents/FavoritBrands'
import IconicBrands from '../Components/KidsPageComponents/IconicBrands'
import KidsSpace from '../Components/KidsPageComponents/KidsSpace'
import Kids_Carousel from '../Components/KidsPageComponents/Kids_Carousel'
import MoreBrands from '../Components/KidsPageComponents/MoreBrands'
import TopPicks from '../Components/KidsPageComponents/TopPicks'

const KidsPage = () => {
  return (
    <>
      <Kids_Carousel/>
      <FavoritBrands/>
      <TopPicks/>
      <IconicBrands/>
      <FashionAndEssentials/>
      <ExploreMore/>
      <KidsSpace/>
      <BudgetBuy/>
      <MoreBrands/>
    </>
  )
}

export default KidsPage


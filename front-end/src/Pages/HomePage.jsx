import React from 'react'
import Home_Carousel from "../Components/HomePageComponents/Home_Carousel"
import Deals from "../Components/HomePageComponents/Deals"
import BestOfMyntra from "../Components/HomePageComponents/BestOfMyntra"
import TopPicks from "../Components/HomePageComponents/TopPicks"
import CategoriesOfBag from "../Components/HomePageComponents/CategoriesOfBag"
import DealsOnTopBrands from "../Components/HomePageComponents/DealsOnTopBrands"
import BrandsAtSlashedPrice from "../Components/HomePageComponents/BrandsAtSlashedPrice"
import BestBuys from "../Components/HomePageComponents/BestBuys"
import MyntraLuxe from "../Components/HomePageComponents/MyntraLuxe"
import GiftingCards from "../Components/HomePageComponents/GiftingCards"
import StyleCast from "../Components/HomePageComponents/StyleCast"
import TrendsForHer from "../Components/HomePageComponents/TrendsForHer"
import TrendsForHim from '../Components/HomePageComponents/TrendsForHim'
import BestOfKidsWear from '../Components/HomePageComponents/BestOfKidsWear'
import NewInTopBrands from '../Components/HomePageComponents/NewInTopBrands'
import NewnessForEveryOcc from '../Components/HomePageComponents/NewnessForEveryOcc'
import LatestInBeauty from '../Components/HomePageComponents/LatestInBeauty'
import Unmissiable from '../Components/HomePageComponents/Unmissiable'
import ColorsOfSeason from '../Components/HomePageComponents/ColorsOfSeason'
import TopInfluencers from '../Components/HomePageComponents/TopInfluencers'
import BudgetPicks from '../Components/HomePageComponents/BudgetPicks'
import TrendingOutfits from '../Components/HomePageComponents/TrendingOutfits'
import Navbar from '../Components/Navbar/Navbar'


const HomePage = () => {
  return (
    <>
    {/* <Navbar/> */}
     <Home_Carousel/>
     <Deals/>
     <BestOfMyntra/>
     <TopPicks/>
     <CategoriesOfBag/>
     <DealsOnTopBrands/>
     <BrandsAtSlashedPrice/>
     <BestBuys/>
     <MyntraLuxe/>  
     <GiftingCards/>  
     <StyleCast/> 
     <TrendsForHer/> 
     <TrendsForHim/> 
     <BestOfKidsWear/>
     <NewInTopBrands/>
     <NewnessForEveryOcc/>
     <LatestInBeauty/>
     <Unmissiable/>
     <ColorsOfSeason/>
     <TopInfluencers/>
     <BudgetPicks/>
     <TrendingOutfits/>
    </>
  )
}

export default HomePage

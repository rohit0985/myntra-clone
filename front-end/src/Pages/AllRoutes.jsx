import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './HomePage'
import KidsPage from './KidsPage'
import MenPage from './MenPage'
import WomenPage from './WomenPage'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/shop/men' element={<MenPage/>}/>
    <Route path='/shop/women' element={<WomenPage/>}/>
    <Route path='/shop/kids' element={<KidsPage/>}/>
    <Route></Route>
      
    </Routes>
  )
}

export default AllRoutes

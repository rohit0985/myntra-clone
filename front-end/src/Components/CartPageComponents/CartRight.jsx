import { Box } from '@chakra-ui/react'
import React from 'react'
import GiftingAndPresentation from './CartRightComponents/GiftingAndPresentation'
import OffersAndCoupons from './CartRightComponents/OffersAndCoupons'
import PriceDetails from './CartRightComponents/PriceDetails'
import SupportSociety from './CartRightComponents/SupportSociety'

const CartRight = () => {
  return (
    <Box w="40%">
      <OffersAndCoupons/>
      <GiftingAndPresentation/>
      <SupportSociety/>
      <PriceDetails/>
    </Box>
  )
}

export default CartRight

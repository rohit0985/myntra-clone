import { Box } from '@chakra-ui/react'
import React from 'react'
import AvailableOffers from './CartLeftComponents/AvailableOffers'
import CartProducts from './CartLeftComponents/CartProducts'
import DeleveryAvailability from './CartLeftComponents/DeleveryAvailability'
import DeleveryCharge from './CartLeftComponents/DeleveryCharge'

const CartLeft = () => {
  return (
    <Box w="60%">
      <DeleveryAvailability/>
      <AvailableOffers/>
      <DeleveryCharge/>
      <CartProducts/>
    </Box>
  )
}

export default CartLeft

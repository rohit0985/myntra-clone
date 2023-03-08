import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import AvailableOffers from './CartLeftComponents/AvailableOffers'
import CartProducts from './CartLeftComponents/CartProducts'
import DeleveryAvailability from './CartLeftComponents/DeleveryAvailability'
import DeleveryCharge from './CartLeftComponents/DeleveryCharge'

const CartLeft = () => {
  return (
    <VStack w="60%" alignItems="flex-start" gap="5px">
      <DeleveryAvailability/>
      <AvailableOffers/>
      <DeleveryCharge/>
      <CartProducts/>
    </VStack>
  )
}

export default CartLeft

import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CartLeft from '../Components/CartPageComponents/CartLeft'
import CartRight from '../Components/CartPageComponents/CartRight'

const CartPage = () => {
  return (
    <Box w="100vw">
      <Flex ring={1} ringColor="green" w="80%" margin="auto" height="100vh">
        <CartLeft/>
        <CartRight/>
        
      </Flex>
    </Box>
  )
}

export default CartPage

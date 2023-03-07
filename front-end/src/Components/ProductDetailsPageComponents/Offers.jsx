import { Box, Heading, ListItem, UnorderedList, Text, Flex, chakra } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md"


const Offers = () => {
  return (
    <Box borderBottom={'1px solid'} borderColor="gray.300" textAlign="left" pb='15px'>
      <Flex gap="7px" alignItems="center" mb="20px">
      <Heading size="sm">BEST OFFERS</Heading>
      <MdOutlineLocalOffer/>
      </Flex>
      <Heading size="sm">Best Price: <chakra.span color="#ff905a">Rs. 230</chakra.span> </Heading>
      <UnorderedList listStyleType={"initial"} textAlign="left" mt="7px" mb="7px">
  <ListItem>Applicable on: Orders above Rs. 899 (only on first purchase)
</ListItem>
  <ListItem>Coupon code: <chakra.span fontWeight={500}>MYNTRA200</chakra.span>
</ListItem>
  <ListItem>Coupon Discount: Rs. 66 off (check cart for final savings)</ListItem>
</UnorderedList>

<Text color="#ff3f6c" fontWeight={500}>View Eligible Products</Text>

<Box mt='20px' >
  <Heading size="sm">EMI option available</Heading>  
  <UnorderedList textAlign="left" mt="7px" mb='7px'>
  <ListItem>EMI starting from Rs.14/month</ListItem>
</UnorderedList>
  <Heading size="sm" color="#ff3f6c" fontWeight={500}>View Plan</Heading>  

</Box>
    </Box>
  )
}

export default Offers

import { VStack, Text, Flex, chakra, Box, Button } from '@chakra-ui/react'
import React from 'react'

const PriceDetails = () => {
  return (
    <VStack
    alignItems="flex-start"
    fontSize="14px"
    p="20px"
    pb="0px"
    gap="10px"
  >
    <Text textAlign="left" fontWeight='bold' color="gray.700" fontSize="12px">
      PRICE DETAILS (2 ITEMS)
    </Text>

<Box w="100%" pb="20px" borderBottom="1px solid" borderColor="gray.300">
<VStack w="100%" alignItems='flex-start'>
    <Flex w="100%" alignItems='flex-start' justifyContent='space-between'>
        <Text>Total MRP</Text>
        <Text><chakra.span fontWeight={500}>₹</chakra.span>4,694</Text>
    </Flex>
    <Flex w="100%" alignItems='flex-start' justifyContent='space-between'>
        <Text>Discount on MRP</Text>
        <Text color='#03a685'>-<chakra.span fontWeight={500}>₹</chakra.span>2,620</Text>
    </Flex>
    <Flex w="100%" alignItems='flex-start' justifyContent='space-between'>
        <Text>Coupon Discount</Text>
        <Text color='#ff3f6c'>Apply Coupon</Text>
    </Flex>
    <Flex w="100%" alignItems='flex-start' justifyContent='space-between'>
        <Text>Convenience Fee <chakra.span fontWeight='bold' color='#ff3f6c'>Know More</chakra.span></Text>
        <Text  color="#03a685">FREE</Text>
    </Flex>
</VStack>
</Box>

<Flex w="100%" alignItems='flex-start' justifyContent='space-between'>
        <Text fontWeight='bold'>Total Ammount</Text>
        <Text fontWeight='bold'>₹2,620</Text>
    </Flex>

    <Button
                    w="100%"
                    h="40px"
                    bg="#ff3f6c"
                    color="white"
                    fontWeight="bold"
                    focus="none"
                    _hover={{ bg: "#ff3f6c" }}
                    fontSize="14px"
                    borderRadius="3px"
                    cursor={"pointer"}
                  >
                    <chakra.span ml="10px">PLACE ORDER</chakra.span>
                  </Button>

    
  </VStack>
  )
}

export default PriceDetails

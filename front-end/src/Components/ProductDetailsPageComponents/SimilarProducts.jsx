import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../ProductCard'

const SimilarProducts = () => {
  return (
    <Box w="100%" >
    <Heading textAlign={'left'} pl="20px" mt="20px" size={"sm"}>SIMILAR PRODUCTS</Heading>

    <VStack h={"100%"} w={"100%"} p={5}>

<SimpleGrid columns={[1, ,2, 3, 5]} spacing="45px">
{
  new Array(20).fill(0).map((prod, idx)=>(
    <ProductCard key={idx}/>
  ))
 }

</SimpleGrid>

</VStack>
      
    </Box>
  )
}

export default SimilarProducts

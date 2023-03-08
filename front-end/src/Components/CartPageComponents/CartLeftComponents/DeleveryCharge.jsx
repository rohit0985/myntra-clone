import { Flex, Text, chakra } from '@chakra-ui/react'
import { BsTruck } from "react-icons/bs";
import React from 'react'

const DeleveryCharge = () => {
  return (
    <Flex w="100%" fontSize="14px" alignItems="center" gap="5px" border="1px solid"
    borderColor="gray.200"
    borderRadius="5px"
    p="10px">
      <BsTruck fontSize="20px"/>
      <Text>Yay! <chakra.span fontWeight={500}>No convenience fee</chakra.span> on this order </Text>
    </Flex>
  )
}

export default DeleveryCharge

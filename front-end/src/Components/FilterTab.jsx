import { CloseIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const FilterTab = () => {
  return (
    <Flex alignItems={'center'} gap="10px" border={'1px'} borderRadius="20px" p="4px 8px" borderColor={"gray.300"} color="gray.800" >
      <Text fontSize={'12px'}>T-Shirt</Text>
      <CloseIcon fontSize={'8px'} cursor="pointer" />
    </Flex>
  )
}

export default FilterTab

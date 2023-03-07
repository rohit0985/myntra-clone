import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CartProducts = () => {
  return (
    <Box fontSize="14px">
     
      <Flex justifyContent="space-between"  border="1px solid"
      borderColor="gray.200"
      borderRadius="5px"
      p="10px">
        <Checkbox colorScheme="red" defaultChecked fontWeight={500} fontSize="16px">
          2/2 ITEMS SELECTED
        </Checkbox>
        <Flex>
          <Text fontWeight={500} color="gray.500" >REMOVE</Text>
          <Box h="100%" borderRight="1px solid" borderColor="gray.300" pl="20px" mr="20px"/>
          <Text fontWeight={500} color="gray.500" >MOVE TO WISHLIST</Text>
        </Flex>
      </Flex>




    </Box>
  );
};

export default CartProducts;

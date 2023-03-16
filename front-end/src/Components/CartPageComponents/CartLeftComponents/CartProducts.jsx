import { Box, Checkbox, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CartProductCard from "./CartProductCard";

const CartProducts = () => {
  return (
    <VStack fontSize="14px" w="100%" alignItems="flex-start" gap="10px">
      <Flex
        justifyContent="space-between"
        p="10px"
        w="100%"
      >
        <Checkbox
          colorScheme="pink"
          defaultChecked
          fontWeight={500}
          fontSize="16px"
        >
          2/2 ITEMS SELECTED
        </Checkbox>
        <Flex>
          <Text fontWeight={500} color="gray.500">
            REMOVE
          </Text>
          <Box
            h="100%"
            borderRight="1px solid"
            borderColor="gray.300"
            pl="20px"
            mr="20px"
          />
          <Text fontWeight={500} color="gray.500">
            MOVE TO WISHLIST
          </Text>
        </Flex>
      </Flex>

      <VStack w="100%" alignItems="flex-start">
        {[1, 2, 3, 4, 5].map((el, idx) => (
          <CartProductCard />
        ))}
      </VStack>
    </VStack>
  );
};

export default CartProducts;

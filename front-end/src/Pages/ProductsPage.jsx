import { HStack, VStack, Text, chakra } from "@chakra-ui/react";
import React from "react";
import FilterSort from "../Components/FilterSort";
import Products from "../Components/Products";

const ProductsPage = () => {
  return (
    <VStack alignItems={"flex-start"}>
      <Text pl="20px" mt="20px" fontSize={"14px"}>
        {" "}
        <chakra.span fontWeight={"bold"}>Men T-Shirts</chakra.span>
        <chakra.span color={"gray.500"}> - 3921 items</chakra.span>
      </Text>
      <HStack alignItems={"flex-start"} w={"100vw"} spacing={"0px"}>
        <FilterSort />
        <Products />
      </HStack>
    </VStack>
  );
};

export default ProductsPage;

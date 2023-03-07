import {
  Checkbox,
  Heading,
  Text,
  HStack,
  InputGroup,
  InputRightElement,
  VStack,
  Input,
  Box,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import FilterGrop from "./FilterGrop";

const FilterSort = () => {

    const data = {
        category: [
          "Topwear",
          "Indian & Festive Wear",
          "Bottomwear",
          "Innerwear & Sleepwear",
          "Footwear",
          "Sports & Active Wear",
          "Gadgets",
          "Fashion Accessories",
        ],
        brands: [
          "Roadster",
          "Tommy Hilfiger",
          "U.S. Polo Assn.",
          "WROGN",
          "Jack & Jones",
          "max",
          "HERE&NOW",
          "HRX by Hrithik Roshan",
        ],
        price: [
          "Rs. 149 to Rs. 3812",
          "Rs. 3912 to Rs. 7475",
          "Rs. 7475 to Rs. 11138",
          "Rs. 11138 to Rs. 14480",
          "Rs. 14480 to Rs. 19552",
          "Rs. 19552 to Rs. 23562",
          "Rs. 23562 to Rs. 25000",
        ],
        discount: [
          "10% and above",
          "20% and above",
          "30% and above",
          "40% and above",
          "50% and above",
          "60% and above",
          "70% and above",
          "80% and above",
          "90% and above",
        ],
      };

  return (
    <VStack>
    <HStack alignItems={'center'} 
    justifyContent={'space-between'} 
    width="100%" p={'0px 20px'} 
    h='40px'>
        <Heading fontSize={"14px"}>FILTER</Heading>
        <Text 
        fontSize={"12px"} 
        color="pink.500" 
        cursor={'pointer'} 
        fontWeight={500}
        >CLEAR ALL</Text>
    </HStack>
        <VStack border={"1px solid"} borderColor={'gray.300'} minW={250} spacing='0px'>
     <FilterGrop filter={"CATEGORY"} data={data.category}/>
     <FilterGrop filter={"BRAND"} data={data.brands}/>
     <FilterGrop filter={"PRICE"} data={data.price}/>
     <FilterGrop filter={"DISCOUNT RANGE"} data={data.discount}/>
    </VStack>
    </VStack>
  );
};

export default FilterSort;



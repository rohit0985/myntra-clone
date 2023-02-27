import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Heading,
  VStack,
  Text,
  HStack,
  Box,
  Flex,
  useDisclosure,
  chakra,
  Collapse,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FilterTab from "./FilterTab";
import ProductCard from "./ProductCard";

const Products = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [selectFilter, setSelectFilter] = useState("Recommended");

  return (
    <VStack w={"100%"} pr="20px">
      <HStack justifyContent="space-between" w="100%" minH="40px" >
        <Flex gap={'10px'} wrap="wrap" pl='30px'>
        <FilterTab/>
        <FilterTab/>
        <FilterTab/>
        <FilterTab/>
        </Flex>

        <VStack
          position={"relative"}
          border="1px solid"
          borderBottom={isOpen ? "0px" : "1px solid"}
          borderRadius={isOpen ? "3px 3px 0px 0px" : "3px"}
          borderColor={'gray.300'}
          minW="250px"
          box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <HStack
            w={"100%"}
            p={"3px 12px"}
            alignItems="center"
            justifyContent={"space-between"}
            onMouseEnter={onToggle}
          >
            <Text fontSize={"14px"}>
              {" "}
              <chakra.span color={"gray.500"}>Sort by :</chakra.span>{" "}
              <chakra.span fontWeight={"bold"}>{selectFilter}</chakra.span>
            </Text>
            <ChevronDownIcon />
            box-shadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"
          </HStack>

          <VStack
            w={"100%"}
            position={"absolute"}
            top="19px"
            display={isOpen ? "flex" : "none"}
            alignItems="flex-start"
            onMouseLeave={onToggle}
            border="1px solid"
            borderTop="none"
            borderColor={'gray.300'}
            borderRadius={"0px 0px 3px 3px"}
            bg="white"
            spacing={"1px"}
            box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
            p={"5px 0px"}
            fontSize={"14px"}
            zIndex={2}
          >
            <Flex
              _hover={{ bg: "gray.100", fontWeight: "bold" }}
              p={"5px 12px"}
              w="100%"
              onClick={(e) => setSelectFilter(e.target.innerText)}
            >
              Recommended
            </Flex>
            <Flex
              _hover={{ bg: "gray.100", fontWeight: "bold" }}
              p={"5px 12px"}
              w="100%"
              onClick={(e) => setSelectFilter(e.target.innerText)}
            >
              What's New
            </Flex>
            <Flex
              _hover={{ bg: "gray.100", fontWeight: "bold" }}
              p={"5px 12px"}
              w="100%"
              onClick={(e) => setSelectFilter(e.target.innerText)}
            >
              Popularity
            </Flex>
            <Flex
              _hover={{ bg: "gray.100", fontWeight: "bold" }}
              p={"5px 12px"}
              w="100%"
              onClick={(e) => setSelectFilter(e.target.innerText)}
            >
              Better Discount
            </Flex>
            <Flex
              _hover={{ bg: "gray.100", fontWeight: "bold" }}
              p={"5px 12px"}
              w="100%"
              onClick={(e) => setSelectFilter(e.target.innerText)}
            >
              Price: High to Low
            </Flex>
            <Flex
              _hover={{ bg: "gray.100", fontWeight: "bold" }}
              p={"5px 12px"}
              w="100%"
              onClick={(e) => setSelectFilter(e.target.innerText)}
            >
              Price: Low to High
            </Flex>
            <Flex
              _hover={{ bg: "gray.100", fontWeight: "bold" }}
              p={"5px 12px"}
              w="100%"
              onClick={(e) => setSelectFilter(e.target.innerText)}
            >
              Customer Rating
            </Flex>
          </VStack>
        </VStack>
      </HStack>

      <VStack h={"100%"} w={"100%"} p={5}>

      <SimpleGrid columns={[1, 2, 4]} spacing="45px">
  {
        new Array(50).fill(0).map((prod, idx)=>(
          <ProductCard/>
        ))
       }
  
</SimpleGrid>

      </VStack>
    </VStack>
  );
};

export default Products;

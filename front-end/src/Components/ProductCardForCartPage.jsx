import {
  HStack,
  Image,
  VStack,
  chakra,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCardForCartPage = () => {
  return (
    <VStack
      width={200}
      align={"flex-start"}
      gap={"0px"}
      bg="white"
      _hover={{
        cursor: "pointer",
      }}
      border="1px solid"
      borderColor="gray.200"
    >
      <VStack position={"relative"}>
        <Image
          w={200}
          h={265}
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg"
          alt="product image"
        />
        <HStack
          background={"gray.200"}
          padding={"0px 3px"}
          borderRadius={"sm"}
          align={"center"}
          justify={"center"}
          position={"absolute"}
          left={"7px"}
          bottom={"5px"}
          spacing="0px"
        >
          <chakra.span fontWeight={"bold"} fontSize="10px">
            4.1
          </chakra.span>
          <AiFillStar color="teal" fontSize="12px" />
        </HStack>
      </VStack>

      <VStack pb={2}>
        <Box borderBottom="1px solid" borderColor="gray.900"></Box>
        <VStack position={"relative"} w={200} spacing="3px">
          <VStack
            lineHeight={1}
            align="flex-start"
            justifyContent={"flex-start"}
            w={"90%"}
            margin="auto"
            spacing="3px"
          >
            <Text textAlign={"left"} fontWeight={"bold"} size={"14px"}>
              Roadster
            </Text>
            <Text fontSize={"12px"} color={"gray.500"}>
              Men Colorblocked Sandals
            </Text>
          </VStack>
          <HStack mt={"-5px"} w={"100%"}>
            <Text pl={3} align={"center"}>
              <chakra.span fontWeight={"bold"} fontSize={14}>
                <chakra.span>₹</chakra.span>1099
              </chakra.span>
              <chakra.span
                ml={2}
                textDecoration={"line-through"}
                fontSize={12}
                color={"gray.500"}
              >
                <chakra.span>₹</chakra.span>1999
              </chakra.span>
              <chakra.span ml={2} fontSize={10} color={"orange.500"}>
                (45% OFF)
              </chakra.span>
            </Text>
          </HStack>
        </VStack>
        <Flex
          alignItems="center"
          justifyContent="center"
          color="#ff3f6c"
          fontWeight="bold"
          fontSize="12px"
          w="90%"
          p="10px"
          bg="white"
          borderTop="1px solid"
          borderColor="gray.200"
        >
          ADD TO BAG
        </Flex>
      </VStack>
    </VStack>
  );
};

export default ProductCardForCartPage;

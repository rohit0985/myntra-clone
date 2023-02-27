import {
  HStack,
  Image,
  VStack,
  chakra,
  Heading,
  Text,
  Box,
  calc,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

const ProductCard = () => {
    const [hover, setHover] = useState(false)
  return (
    <VStack width={200} align={"flex-start"}
    onMouseEnter={()=> setHover(true)}
    onMouseLeave={()=> setHover(false)}
    gap={"0px"}
    
    _hover={{cursor:'pointer', boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`}}
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
          padding={"0px 5px"}
          borderRadius={"sm"}
          align={"center"}
          justify={"center"}
          position={"absolute"}
          left={"7px"}
          bottom={"5px"}
          display={hover ? 'none' : "flex"}
        >
            <chakra.span fontWeight={"bold"} fontSize="12px">
              4.1
            </chakra.span>
            <AiFillStar color="teal" />
          <chakra.span>|</chakra.span>
          <chakra.span fontWeight={"bold"} fontSize="10px">
            746
          </chakra.span>
        </HStack>
      </VStack>

      <VStack pb={2}>

        <VStack position={'relative'} w={200}>
        <VStack
          lineHeight={1}
          align="flex-start"
          justifyContent={"flex-start"}
          w={"90%"}
          margin="auto"
        >
          <Text textAlign={"left"} fontWeight={"bold"} size={"sm"} >
            Roadster
          </Text>
          <Text fontSize={"14px"} color={"gray.500"} >
            Men Colorblocked Sandals
          </Text>
        </VStack>

        <VStack
         w={"100%"} alignItems={"flex-start"}  position={'absolute'}
        bottom={'0px'}
        left={0}
        pt={2}
        background={'white'}
        height={hover ? '60px' : '0px'}
        display={!hover && 'none'}
        transition="ease"
        transitionDuration={"1s"}
        >
          <HStack
            alignItems={"center"}
            justifyContent={"center"}
            w={"90%"}
            h={8}
            border="1px solid"
            borderColor={'gray.300'}
            p={2}
            margin={'auto'}
            borderRadius={'sm'}
            _hover={{ringColor:"black"}}
          >
            <BsHeart size={12} /> <Text fontSize={12} fontWeight={'bold'}>WISHLIST</Text>
          </HStack>
          <Text p="0px" pl={3}  fontSize={14} textAlign={"left"}>Size: UK7</Text>
        </VStack>
        </VStack>

        <HStack  mt={"-5px"} w={"100%"}>
          <Text pl={3} align={"center"}>
            <chakra.span fontWeight={"bold"} fontSize={14}>
              Rs. 1099
            </chakra.span>
            <chakra.span
              ml={2}
              textDecoration={"line-through"}
              fontSize={12}
              color={"gray.500"}
            >
              Rs. 1999
            </chakra.span>
            <chakra.span ml={2} fontSize={12} color={"orange.500"}>
              (45% OFF)
            </chakra.span>
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductCard;

import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Heading,
  chakra,
  Flex,
  Circle,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BsHandbagFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import ImageMagnify from "../Components/ImageMagnify";
import DeliveryOptions from "../Components/ProductDetailsPageComponents/DeliveryOptions";
import Offers from "../Components/ProductDetailsPageComponents/Offers";
import Ratings from "../Components/ProductDetailsPageComponents/Ratings";
import Reviews from "../Components/ProductDetailsPageComponents/Reviews";
import SimilarProducts from "../Components/ProductDetailsPageComponents/SimilarProducts";

const ProductDetails = () => {
  return (
    <>
      <VStack w="100vw" h="100vh" alignItems="flex-start">
        <Text color="gray.800" fontSize="14px" m="30px 0px" ml="50px">
          Home / Clothing / Men Clothing / Tshirts /{" "}
          <chakra.span fontWeight="bold">
            HRX By Hrithik Roshan Tshirts
          </chakra.span>{" "}
          <ChevronRightIcon />{" "}
          <chakra.span fontWeight="bold">
            More By HRX By Hrithik Roshan
          </chakra.span>
        </Text>

        <HStack w="100%" alignItems={"flex-start"}>
          <Box
            flex={1}
            display="flex"
            w="100%"
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            <ImageMagnify image_src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg" />
          </Box>

          <VStack
            borderBottom={"1px solid"}
            borderColor="gray.300"
            flex={1}
            w="100%"
          alignItems="flex-start"
          >
            <VStack
              w="100%"
              alignItems={"flex-start"}
              pb="15px"
              borderBottom="1px solid"
              borderColor={"gray.200"}
            >
              <Heading fontSize={"2xl"}>HRX by Hrithik Roshan</Heading>
              <Text color="gray.500" fontSize={"xl"}>
                Men Teal Blue Printed Pure Cotton T-shirt
              </Text>
              <HStack ring={1} ringColor="gray.200" p="3px 9px" spacing="0px">
                <chakra.span pr={"2px"}>4.2</chakra.span>
                <AiFillStar color="teal" />
                <chakra.span pl={"5px"} color="gray.500">
                  | 52k Ratings
                </chakra.span>
              </HStack>
            </VStack>

            <VStack
              borderBottom="1px solid"
              borderColor={"gray.200"}
              w="100%"
              alignItems="flex-start"
              gap="15px"
            >
              <VStack alignItems="flex-start" spacing="0px">
                <Flex gap="15px" fontSize="20px" alignItems={"center"}>
                  <chakra.span fontWeight={"bold"} fontSize="25px">
                    ₹275
                  </chakra.span>{" "}
                  <Flex color={"gray.600"} gap="2px">
                    <chakra.span>MRP</chakra.span>
                    <chakra.span textDecor={"line-through"}>₹123</chakra.span>
                  </Flex>
                  <chakra.span color={"#ff905a"} fontWeight="500">
                    (60% OFF)
                  </chakra.span>
                </Flex>
                <Text textAlign={"left"} color={"#03a685"} fontWeight="500">
                  inclusive of all taxes
                </Text>
              </VStack>

              <VStack alignItems="flex-start" spacing="40px" pb="25px">
                <VStack gap={"20px"} alignItems="flex-start">
                  <Flex gap={"30px"} alignItems="center">
                    <Heading size="sm">SELECT SIZE</Heading>
                    <Heading fontSize="14px" color="#ff3e6c" cursor={"pointer"}>
                      SIZE CHART <ChevronRightIcon />{" "}
                    </Heading>
                  </Flex>
                  <Flex gap="10px" alignItems="flex-start">
                    {["S", "M", "L", "XL", "XXL"].map((ele, idx) => (
                      <Circle
                        w="50px"
                        h="50px"
                        border="1px solid"
                        borderColor="gray.400"
                        borderRadius="50%"
                        fontWeight={"bold"}
                        fontSize="14px"
                        color="gray.700"
                        _hover={{ borderColor: "#ff3f6c", cursor: "pointer" }}
                        key={idx}
                      >
                        {ele}
                      </Circle>
                    ))}
                  </Flex>
                </VStack>

                <Flex gap="20px">
                  <Button
                    w="230px"
                    h="50px"
                    bg="#ff3f6c"
                    color="white"
                    fontWeight="bold"
                    focus="none"
                    _hover={{ bg: "#ff3f6c" }}
                    fontSize="16px"
                    borderRadius="3px"
                    cursor={"pointer"}
                    zIndex={1}
                  >
                    <BsHandbagFill fontSize={"18px"} />{" "}
                    <chakra.span ml="10px">ADD TO BAG</chakra.span>
                  </Button>

                  <Button
                    w="230px"
                    h="50px"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    fontWeight="bold"
                    focus="none"
                    _hover={{borderColor: "gray.900", }}
                    fontSize="16px"
                    borderRadius="3px"
                    zIndex={1}
                  >
                    <BsHeart fontSize={"18px"} />{" "}
                    <chakra.span ml="10px" color="gray.800">
                      WISHLIST
                    </chakra.span>
                  </Button>
                </Flex>
              </VStack>
            </VStack>

           <VStack gap="30px" alignItems="flex-start">
           <DeliveryOptions />
            <Offers />
            <Ratings />
            <Reviews /> 
           </VStack>
          </VStack>
        </HStack>

        <SimilarProducts />
      </VStack>
    </>
  );
};

export default ProductDetails;

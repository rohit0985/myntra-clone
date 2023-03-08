import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  chakra,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import SelectQuantityModal from "./SelectQuantityModal";
import SelectSizeModal from "./SelectSizeModal";
import { TbTruckReturn } from "react-icons/tb";
import { CloseIcon } from "@chakra-ui/icons";

const CartProductCard = () => {
  return (
    <Flex
      gap="15px"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="5px"
      p="10px"
      w="100%"
    >
      <Box position="relative">
        <Checkbox
          colorScheme="red"
          defaultChecked
          position="absolute"
          top="5px"
          left="5px"
        ></Checkbox>
        <Image
          w="120px"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
        />
      </Box>

      <VStack
        alignItems="flex-start"
        spacing="10px"
        position="relative"
        w="100%"
      >
        <CloseIcon position="absolute" top="5px" right="5px" cursor="pointer" />
        <Box textAlign="left">
          <Heading size="sm">HRX by Hrithik Roshan</Heading>
          <Text>Men Teal Blue Printed Pure Cotton T-shirt</Text>
          <Text color="gray.500">Sold by: Omnitech Retail</Text>
        </Box>

        <Flex gap="10px">
          <SelectSizeModal />
          <SelectQuantityModal />
        </Flex>

        <Flex gap="5px" fontSize="14px">
          <chakra.span fontWeight={"bold"}>₹314</chakra.span>
          <chakra.span textDecoration="line-through" color="gray.500">
            ₹699
          </chakra.span>
          <chakra.span color="#f16565" fontWeight={400}>
            55% OFF
          </chakra.span>
        </Flex>
        <Flex fontSize="12px" gap="5px" alignItems="center">
          <TbTruckReturn fontSize="18px" />
          <chakra.span fontWeight={"bold"}>14 days</chakra.span>
          <chakra.span>return available</chakra.span>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default CartProductCard;

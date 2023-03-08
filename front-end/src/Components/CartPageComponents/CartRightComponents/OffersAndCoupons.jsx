import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  chakra,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { MdOutlineLocalOffer } from "react-icons/md";

const OffersAndCoupons = () => {
  return (
    <VStack
      alignItems="flex-start"
      fontSize="14px"
      p="20px"
      pb="0px"
      gap="10px"
    >
      <Text textAlign="left" fontWeight='bold' color="gray.700" fontSize="12px">
        OFFERS AND COUPONS
      </Text>
      <Flex
        alignItems="center"
        gap="3px"
        bg="#fff8f5"
        fontWeight="bold"
        p="3px"
        borderRadius="3px"
        w="100%"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image
            w="30px"
            src="https://constant.myntassets.com/checkout/assets/img/additional-offer.webp"
          />
          <Text>1 Offer On Your Bag</Text>
        </Flex>
        <ChevronRightIcon fontSize="20px" />
      </Flex>

      <Box w="100%" pb="20px" borderBottom="1px solid" borderColor="gray.200">
        <Flex alignItems="center" width="100%" justifyContent="space-between">
          <Flex alignItems="center" gap="10px">
            <MdOutlineLocalOffer fontSize="20px" />
            <Text fontWeight="bold">Apply Coupons</Text>
          </Flex>
          <Button
            p="0px 10px"
            h="25px"
            bg="white"
            border="1px solid"
            borderColor="#ff3f6c"
            fontWeight={500}
            focus="none"
            fontSize="14px"
            borderRadius="3px"
            _hover={{ bg: "pink.50" }}
          >
            <chakra.span color="#ff3f6c" fontSize="14px">
              APPLY
            </chakra.span>
          </Button>
        </Flex>
        <Text textAlign="left" ml="30px">
          {" "}
          <chakra.span color="#ff3f6c" fontWeight="bold">
            Login
          </chakra.span>{" "}
          to get upto <chakra.span fontWeight={500}>₹</chakra.span>400 OFF on
          first order{" "}
        </Text>
      </Box>
    </VStack>
  );
};

export default OffersAndCoupons;

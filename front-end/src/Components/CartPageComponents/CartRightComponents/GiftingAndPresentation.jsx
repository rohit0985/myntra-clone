import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  chakra,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const GiftingAndPresentation = () => {
  return (
    <VStack
      alignItems="flex-start"
      gap="5px"
      fontSize="14px"
      p="20px"
      pb="0px"
    >
      <Text textAlign="left" fontWeight='bold' color="gray.700" fontSize="12px">
        GIFTING AND PERSONALIZATION
      </Text>

      <Box pb="20px" borderBottom="1px solid" borderColor="gray.200" w="100%">
        <Flex h="100px" gap="15px" bg="#fff1ec" p="0px 10px" borderRadius="3px">
          <Image
            h="100%"
            src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
          />
          <VStack
            alignItems="flex-start"
            justifyContent="space-between"
            p="10px"
          >
            <VStack alignItems="flex-start" spacing="3px">
              <Heading fontSize="14px">Buying for a loved one?</Heading>
              <Text textAlign="left" fontSize="12px">
                Gift wrap and personalised message on card, <br /> only for
                <chakra.span fontWeight={500}>₹</chakra.span>25
              </Text>
            </VStack>
            <Heading fontSize="12px" fontWeight='bold' color="#ff3f6c" cursor="pointer">
              ADD GIFT WRAP
            </Heading>
          </VStack>
        </Flex>
      </Box>
    </VStack>
  );
};

export default GiftingAndPresentation;

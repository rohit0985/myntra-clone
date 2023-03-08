import { Box, Checkbox, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SupportSociety = () => {
  return (
    <VStack
      alignItems="flex-start"
      fontSize="14px"
      p="20px"
      pb="0px"
      gap="15px"
    >
      <Text textAlign="left" fontWeight='bold' color="gray.700" fontSize="12px">
        SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
      </Text>

<Box pb="20px" borderBottom="1px solid" borderColor="gray.200">
<VStack alignItems='flex-start' gap="10px">
        <Checkbox
          size="md"
          colorScheme="orange"
          defaultChecked
          fontWeight="bold"
        >
          <Text fontSize="14px">Support Us</Text>
        </Checkbox>
        <Flex gap="12px" flexWrap="wrap" fontSize="14px">
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius="20px"
            p="5px 15px"
            fontWeight="bold"
          >
            ₹10
          </Box>
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius="20px"
            p="5px 15px"
            fontWeight="bold"
          >
            ₹50
          </Box>
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius="20px"
            p="5px 15px"
            fontWeight="bold"
          >
            ₹100
          </Box>
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius="20px"
            p="5px 15px"
            fontWeight="bold"
          >
            Other
          </Box>
        </Flex>
        <Text textAlign='left' fontSize='14px' color='#ff3f6c' cursor='pointer' fontWeight='bold'>Know More</Text>
      </VStack>
</Box>
      
    </VStack>
  );
};

export default SupportSociety;

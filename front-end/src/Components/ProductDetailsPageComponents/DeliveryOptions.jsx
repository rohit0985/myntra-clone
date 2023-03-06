import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";

const DeliveryOptions = () => {
  
  return (
    <Box ringColor="green" textAlign="left">
      <Flex gap="7px" m="20px 0px" >
        <Heading size={"sm"}>DELIVERY OPTIONS</Heading>
        <BsTruck fontSize="20px"/>
      </Flex>

      <Box>
      <Box
        border="1px solid"
        borderColor="gray.300"
        p="0px 10px"
        borderRadius="5px"
        width="300px"
        mb="10px"
        _hover={{borderColor:"gray.500"}}
      >
        <InputGroup >
          <Input type="tel" placeholder="Enter pincode" variant="unstyled" />
          <InputLeftAddon
            children="Check"
            color="red"
            bg="none"
            outline="none"
            border="none"
          />
        </InputGroup>
      </Box>
      <Text fontSize="14px">Please enter PIN code to check delivery time & Pay on Delivery Availability</Text>
      </Box>

      <UnorderedList listStyleType={"none"} textAlign="left" ml={0} spacing="3px" mt="10px" >
  <ListItem>100% Original Products</ListItem>
  <ListItem>Pay on delivery might be available</ListItem>
  <ListItem>Easy 14 days returns and exchanges</ListItem>
  <ListItem>Try & Buy might be available</ListItem>
</UnorderedList>

    </Box>
  );
};

export default DeliveryOptions;

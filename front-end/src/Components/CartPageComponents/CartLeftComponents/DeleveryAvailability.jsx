import { Button, Flex, Text, chakra } from "@chakra-ui/react";
import React from "react";

const DeleveryAvailability = () => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="5px"
      p="10px"
    >
      <Text fontWeight={500} fontSize="16px">
        Check delivery time & services
      </Text>
      <Button
        p="0px 10px"
        bg="white"
        border="1px solid"
        borderColor="#ff3f6c"
        fontWeight={500}
        focus="none"
        fontSize="16px"
        borderRadius="3px"
        _hover={{ bg: "pink.50" }}
      >
        <chakra.span color="#ff3f6c" fontSize="14px">
          ENTER PIN CODE
        </chakra.span>
      </Button>
    </Flex>
  );
};

export default DeleveryAvailability;

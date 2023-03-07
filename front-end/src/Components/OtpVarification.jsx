import {
  Box,
  Heading,
  HStack,
  Image,
  PinInput,
  PinInputField,
  Text,
  VStack,
  chakra,
  calc,
} from "@chakra-ui/react";
import React from "react";

const OtpVarification = () => {
  return (
    <Box w="100vw" h="calc(100vh - 80px)" border="1px solid" borderColor="pink.100" bg="linear-gradient(90deg, rgba(254,237,246,1) 0%, rgba(252,240,226,1) 100%)">
      <VStack w="400px" h="460px" bg="white" margin="auto" alignItems="flex-start" p="30px" mt="20px" gap="15px" fontSize="12px" borderRadius="3px">
        <Image w="100px" src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg" />

        <VStack alignItems="flex-start">
          <Heading size="sm" fontSize="20px">Verify with OTP</Heading>
          <Text color="gray.500">Sent to 8320574518</Text>
        </VStack>

        <HStack>
          <PinInput variant="unstyled">
            <PinInputField
              w="30px"
              h="40px"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="2px"
              _focus={{ borderColor: "gray.900" }}
            />
            <PinInputField
              w="30px"
              h="40px"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="2px"
              _focus={{ borderColor: "gray.900" }}
            />
            <PinInputField
              w="30px"
              h="40px"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="2px"
              _focus={{ borderColor: "gray.900" }}
            />
            <PinInputField
              w="30px"
              h="40px"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="2px"
              _focus={{ borderColor: "gray.900" }}
            />
          </PinInput>
        </HStack>

        <Text color="gray.500" fontWeight={500}>
          Resend OTP in: <chakra.span color="black" fontWeight={500}>02:00 min</chakra.span>
        </Text>
        <Text color="#ff3f6c" fontWeight={500}>
          RESEND OTP
        </Text>
        <Text>
          Log in using{" "}
          <chakra.span color="#ff3f6c" fontWeight={500}>
            Password
          </chakra.span>{" "}
        </Text>
        <Text>
          Having triuble logging in?{" "}
          <chakra.span color="#ff3f6c" fontWeight={500}>
            Get help
          </chakra.span>{" "}
        </Text>
      </VStack>
    </Box>
  );
};

export default OtpVarification;

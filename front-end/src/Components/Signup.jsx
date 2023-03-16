import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  chakra,
  Flex,
  InputGroup,
  InputLeftAddon,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiCheckBadge } from "react-icons/hi";
import { TbDiscountCheckFilled } from "react-icons/tb"

const Signup = () => {
  const [focus, setFocus] = useState(false);
  return (
    <Box
      w="100vw"
      border="1px solid"
      borderColor="pink.100"
      bg="linear-gradient(90deg, rgba(254,237,246,1) 0%, rgba(252,240,226,1) 100%)"
      display="flex" 
      alignItems="center"
      justifyContent="center"
    >
    
    <Box w="400px"  margin="auto" position='relative'>
    
    <VStack
        w="100%"
        bg="white"
        alignItems="flex-start"
        p="40px"
        mt="20px"
        gap="20px"
        fontSize="12px"
        borderRadius="3px"
      >
        <Heading size="sm">Complete your signup</Heading>

        <VStack w="100%" gap="20px" >
          <Flex alignItems="flex-start" justifyContent="space-between" w="100%">
            <Flex direction="column" alignItems="flex-start">
              <Text color="gray.500">Mobile Number</Text>
              <Text>8320574518</Text>
            </Flex>
            <AiFillCheckCircle fontSize="20px" color="teal" />
          </Flex>

          <FormControl
            isRequired
            display="flex"
            flexDirection="column"
            gap="20px"
            fontSize="12px"
          >

            <Box>
              <Input
                variant="unstyled"
                placeholder="Create Password"
                border="1px solid"
                h="40px"
                fontSize="12px"
                borderRadius="none"
                borderColor={"gray.300"}
                _focus={{ borderColor: "gray.900" }}
                p="0px 10px"
              />
              <Flex gap="5px" mt="5px" fontSize="10px" color="gray.500">
                <Box bg="gray.100" p=" 3px 5px">
                  8 Character
                </Box>
                <Box bg="gray.100" p=" 3px 5px">
                  1 Special
                </Box>
                <Box bg="gray.100" p=" 3px 5px">
                  1 Uppercase
                </Box>
                <Box bg="gray.100" p=" 3px 5px">
                  1 Numeric
                </Box>
              </Flex>
            </Box>

            <Box>
              <Input
                variant="unstyled"
                placeholder="Full Name"
                border="1px solid"
                h="40px"
                fontSize="12px"
                borderRadius="none"
                p="0px 10px"
                borderColor={"gray.300"}
                _focus={{ borderColor: "gray.900" }}
              />
            </Box>

            <Box>
              <Input
                variant="unstyled"
                placeholder="Email (Optional)"
                border="1px solid"
                h="40px"
                fontSize="12px"
                borderRadius="none"
                borderColor={"gray.300"}
                _focus={{ borderColor: "gray.900" }}
                p="0px 10px"
              />
            </Box>

            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Text>Select Gender:</Text>
                <RadioGroup defaultValue="2">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="Female">
                      <Text fontSize="12px">Female</Text>
                    </Radio>
                    <Radio colorScheme="green" value="Make">
                      <Text fontSize="12px">Male</Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </Box>

            <Box>
              <Box
                border="1px"
                borderColor={focus ? "black" : "gray.300"}
                w="100%"
              >
                <InputGroup h="40px" display={"flex"} alignItems="center">
                  <InputLeftAddon
                    children="+91"
                    color={focus ? "black" : "gray.400"}
                    fontSize="12px"
                    bg={"transparent"}
                    h="20px"
                    border={"none"}
                  />
                  <Input
                    type="tel"
                    placeholder="Alternate Mobile Number"
                    h="20px"
                    outline={"none"}
                    fontSize="12px"
                    _focusVisible="none"
                    border={"none"}
                    borderLeft="1px"
                    borderColor={focus ? "black" : "gray.400"}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                  />
                </InputGroup>
              </Box>
              <Text fontSize="10px" textAlign="left" color="gray.600" mt="5px">
                This will help recover your account if needed
              </Text>
            </Box>

            <Box>
              <Input
                variant="unstyled"
                placeholder="Hint Name (Alternate Number)"
                border="1px solid"
                h="40px"
                fontSize="12px"
                borderRadius="none"
                borderColor={"gray.300"}
                _focus={{ borderColor: "gray.900" }}
                p="0px 10px"
              />
              <Text fontSize="10px" textAlign="left" color="gray.600" mt="5px">
                This will the help name while recovering your account
              </Text>
            </Box>

          </FormControl>
          
        </VStack>
      </VStack>

      
      <Button
            w="400px"
            rounded="none"
            bg="#ff3f6c"
            color="white"
            fontWeight="bold"
            focus="none"
            _hover={{ bg: "#ff3f6c" }}
            fontSize="14px"
            position='fixed'
           bottom="22px"
            left="50%"
            transform= "translate(-48%, 0)"
          >
            CREATE NEW ACCOUNT
          </Button>
    </Box>

      
    </Box>
  );
};

export default Signup;

import {
  VStack,
  Heading,
  Image,
  Box,
  HStack,
  Text,
  chakra,
  InputGroup,
  Input,
  InputLeftAddon,
  Button,
  calc,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LoginOrSignup = () => {
 const [focus, setFocus] = useState(false)
  return (
    <Box
      w="100vw"
      h={"100vh"}
      bg="linear-gradient(90deg, rgba(254,237,246,1) 0%, rgba(252,240,226,1) 100%)"
      border="1px solid white"
      box-shadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    >
      <VStack w={400}  m=" auto" mt="32px" spacing={'0px'} >
        <Image
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"
          alt="img-login-or-signup"
        />
        <VStack bg='whiteAlpha.900' w='300px' p='37px 35px' width="100%" alignItems={'flex-start'} gap="15px">
         
            <Heading size={"md"}>
              Login
              <chakra.span
                fontWeight={"400"}
                fontSize="md"
                color={"gray.500"}
                m="0px 5px"
              >
                or
              </chakra.span>
              Signup{" "}
            </Heading>

            <Box border="1px" borderColor={focus ? "black" : "gray.400"} w="100%" >
              <InputGroup h="40px" display={"flex"} alignItems="center">
                <InputLeftAddon
                  children="+91"
                  color={focus ? "black" : "gray.400"}
                  fontSize='14px'
                  bg={"transparent"}
                  h="20px"
                  border={"none"}
                />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  h="20px"
                  outline={"none"}
                  fontSize='14px'
                  _focusVisible="none"
                  border={"none"}
                  borderLeft="1px"
                  borderColor={focus ? "black" : "gray.400"}
                  onFocus={()=> setFocus(true)}
                  onBlur={()=> setFocus(false)}
                />
              </InputGroup>
            </Box>

            <Text fontSize={"12px"} color="gray.500">  By continuing, I agree to the <chakra.span color="#ff3c6f" fontWeight="bold">Terms of use</chakra.span> & <chakra.span color="#ff3c6f" fontWeight="bold" >Privecy Policy</chakra.span> </Text>

            <Button w='100%' rounded='none' bg="#ff3f6c" color='white' fontWeight='bold' focus="none" _hover={{bg:"#ff3f6c"}} fontSize="14px">
                CONTINUE
            </Button>

            <Text fontSize={"12px"} color="gray.500">  Have trouble logging in? <chakra.span color="#ff3c6f" fontWeight="bold">Get help</chakra.span></Text>
         
        </VStack>
      </VStack>

    </Box>
  );
};

export default LoginOrSignup;

import { Box, Button, FormControl, FormLabel, Heading, Input, Text, VStack, chakra } from '@chakra-ui/react'
import React from 'react'

const SignIn = () => {
  return (
    <Box w="100vw" h="calc(100vh - 80px)" border="1px solid" borderColor="pink.100" bg="linear-gradient(90deg, rgba(254,237,246,1) 0%, rgba(252,240,226,1) 100%)" display="flex" alignItems="center" justifyContent="center">
    <VStack w="400px" h="460px" bg="white" margin="auto" alignItems="flex-start" p="40px" mt="20px" gap="20px" fontSize="12px" borderRadius="3px">
     

<Heading size="md">Login to your account</Heading>

<VStack w="100%" gap="15px">
<FormControl isRequired display="flex" flexDirection="column" gap="15px" >
 <Box>
 <FormLabel fontSize="12px">Email or Mobile Number</FormLabel>
  <Input variant="unstyled" placeholder='Email or Mobile Number' border="1px solid" h="40px" fontSize="12px" borderRadius="none" borderColor={"gray.300"} _focus={{borderColor:"gray.900"}} p="0px 10px" />
 </Box>

 <Box>
 <FormLabel fontSize="12px">Password</FormLabel>
  <Input variant="unstyled" placeholder='Password' border="1px solid" h="40px" fontSize="12px" borderRadius="none" borderColor={"gray.300"} _focus={{borderColor:"gray.900"}} p="0px 10px" />
 </Box>
</FormControl>

<Button w='100%' rounded='none' bg="#ff3f6c" color='white' fontWeight='bold' focus="none" _hover={{bg:"#ff3f6c"}} fontSize="14px">
                LOGIN
            </Button>

</VStack>

<Text>Forget your password? <chakra.span color="#ff3f6c" fontWeight={500}>Reset here</chakra.span> </Text>
<Text>Have trouble logging in? <chakra.span color="#ff3f6c" fontWeight={500}>Get help</chakra.span> </Text>

    </VStack>
  </Box>
  )
}

export default SignIn

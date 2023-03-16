import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const IconicBrands = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >ICONIC BRANDS</Heading>
    
          <Box>
            <SimpleGrid columns={ICONIC_BRANDS.length} spacing="0px">
              {ICONIC_BRANDS.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default IconicBrands;
    
    const  ICONIC_BRANDS = [
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f79446fb-46b9-455a-a6c0-4ffe3f58dd071604906586106-23-IconicBrands-H_M.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ba882da-667c-4f6e-a27e-292d0ffe477a1604906586228-26-IconicBrands-MangoKids.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/37147834-2bc5-4cdb-8eb9-68bf0fd48ca01604906586191-25-IconicBrands-Chicco.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f23d49ee-a598-4039-a6cd-33dab8a7e2011604906586056-22-IconicBrands-M_S.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0f9ec937-304a-433a-9433-5409c556831c1604906586152-24-IconicBrands-TommyHilfiger.jpg"
        }
        ]
    
    
    
    
    



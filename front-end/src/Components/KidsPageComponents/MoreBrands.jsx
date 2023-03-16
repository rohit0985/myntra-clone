import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const MoreBrands = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >SHOP MORE BRANDS</Heading>
    
          <Box>
            <SimpleGrid columns={SHOP_MORE_BRANDS.length} spacing="0px">
              {SHOP_MORE_BRANDS.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default MoreBrands;
    
    const  SHOP_MORE_BRANDS = [
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/19/00da8e7c-c7b2-4386-be22-29e6ce7f93491626685981220-Top-Nav_Life-Style.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3b15613e-57c1-451c-bc7d-66ea2ba0066a1604906588521-69-MoreBrands-PepeJeans.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/aa944cdd-33ff-4576-988d-fe8310cf9db91604906588585-70-MoreBrands-HRXU17.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3bfd54e9-06ca-4a1c-8286-fc1eb73242661604906588708-72-MoreBrands-Sangria.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/706a41d7-9d15-4b56-81be-2f02bac65ebb1604906588761-73-MoreBrands-Cherokee.jpg"
        }
        ]
    
    
    
    
    






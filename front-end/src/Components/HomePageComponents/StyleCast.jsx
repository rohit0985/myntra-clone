import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const StyleCast = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} >STYLECAST HOTTEST FINDS</Heading>
    
          <Box>
            <SimpleGrid columns={STYLECAST_HOTTEST_FINDS.length} spacing="0px">
              {STYLECAST_HOTTEST_FINDS.map((deal, idx) => (
                <Box>
                  <Image src={deal.image} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default StyleCast;
    
    const STYLECAST_HOTTEST_FINDS = [
        {
          "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/fe3325dc-3293-4670-96c9-4449be4efad81647330317086-StyleCast-Mar-HP-DesiGirl.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/58386d41-5cd6-47f4-874c-d53f83075bf41647330317173-StyleCast-Mar-HP-InternationalBrands.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/1dceb1b3-90f5-49f0-8681-e08ee888911c1647330317155-StyleCast-Mar-HP-GlobalBrands.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/23b20478-678e-4191-8245-84886f8094df1647330317259-StyleCast-Mar-HP-Urbanic.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/47f4c13c-a1a3-42f4-b9f6-02864f364b791647330317103-StyleCast-Mar-HP-EnglishSummer.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/ba8e2b64-3701-482a-b059-e1d3e8b96a221647330317190-StyleCast-Mar-HP-KeepItCasual.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/b3c39fe3-9ac4-42f0-b492-8575a2fc8ae21647330317225-StyleCast-Mar-HP-PartyInTheCity.jpg"
        }
      ]
    
    
    
    

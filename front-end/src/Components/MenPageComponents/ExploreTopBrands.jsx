import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const ExploreTopBrands = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >BIGGEST DEALS ON TOP BRANDS</Heading>
    
          <Box>
            <SimpleGrid columns={BIGGEST_DEALS_ON_TOP_BRANDS.length/2} spacing="0px">
              {BIGGEST_DEALS_ON_TOP_BRANDS.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default ExploreTopBrands;
    
    const  BIGGEST_DEALS_ON_TOP_BRANDS = [
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg"
        }
      ]
    
    
    
    
    



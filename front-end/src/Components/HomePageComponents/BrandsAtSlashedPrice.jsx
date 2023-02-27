import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

const BrandsAtSlashedPrice = () => {
  return (
    <VStack
   w={'100%'}
   alignItems={'flex-start'}
   gap={8}
   m={'50px 0px'}
    >
      <Heading pl={10} fontWeight={500} fontSize={'3xl'} >BRANDS AT SLASHED PRICES</Heading>

      <Box>
        <SimpleGrid columns={BRANDS_AT_SLASHED_PRICES.length/2} spacing="0px">
          {BRANDS_AT_SLASHED_PRICES.map((deal, idx) => (
            <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default BrandsAtSlashedPrice;

const BRANDS_AT_SLASHED_PRICES = [
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/8cd7ec33-78fe-4b40-802d-365238b1376e1644475927229-Sangria.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/5809282f-372d-4881-a8dc-95d5958a86be1644338988944-Roadster_HP.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/e96d85b8-7a62-4f57-898a-6c291ffb4d7f1644339048429-HRX_HP.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/e8546602-b217-45b0-a2d4-9469ba59938f1644475927176-Chemistry.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/3cbf365e-8027-4aed-859b-6d40886418d21644475927244-Anouk--1-.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/af85f560-cd67-469a-8405-4ec64a33f9971644475927251-Dressberry.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/a0be607a-142c-4433-90ad-d13f22148f111644475927161-All-about-you.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/b55aac85-4eb7-44d0-94bb-5077e8da70001644475927183-House-of-Pataudi.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/f3120cb8-1af3-40fa-b7ed-02466eb03def1644475927205-Kook-N-Keech.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/83ac07a7-65b3-4ede-a434-d9e3d103e3591644475927220-Moda-Rapido_1.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fa16e2c8-d5af-4d71-8dfb-14484fd0db811644475927213-Moda-Rapido_2.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/40ddc119-a9bd-4117-ad8b-fc5bcc6a09141644475927190-ether.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/4900ccb0-86be-4fa4-806e-9cad9496e3db1644475927196-INVICTUS.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fdbf3336-1777-46fd-aff6-7786268bc0d71644475927169-Harvard.jpg"
    }
  ]





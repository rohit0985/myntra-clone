import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const FashionAndEssentials = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >FASHION & ESSENTIALS</Heading>
    
          <Box>
            <SimpleGrid columns={FASHION_AND_ESSENTIALS.length/2} spacing="0px">
              {FASHION_AND_ESSENTIALS.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default FashionAndEssentials;
    
    const  FASHION_AND_ESSENTIALS = [
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f20838ab-108c-4fe6-bd74-0dc7551a2bbd1604906586589-34-Essentials-Masks.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3df8a117-4db8-4cb6-ac0e-e60291d957241604906586646-35-Essentials-BabyCare.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/29baf945-9e5b-4f0e-bb05-0ce65c57f9c91604906586502-32-Essentials-Shorts.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/353fd453-6a17-45b9-b3da-a3dfd88121a31604906586547-33-Essentials-Valuepacks.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c22c8c4b-753a-4f90-8def-511d2ed6caf31604906586731-37-Essentials-EthnicWear.jpg"
        },
        {
            "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/efc4b19d-179f-4437-961c-839df50299a51604906586690-36-Essentials-Night_innerwear.jpg"
            },
            {
            "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4e6eefd3-3355-4c1c-851e-48a49c97d5b31604906586407-30-Essentials-Onesies.jpg"
            },
            {
            "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/33368b8b-8702-4108-96a9-b8fa5b7ed36f1604906586455-31-Essentials-FlipFlop_sandals.jpg"
            },
            {
            "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg"
            },
            {
            "image":"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c75a2039-4199-4174-b1b9-fecd30f7d3f91604906586359-29-Essentials-Tshirts_Tops.jpg"
            }
        ]
    
    
    
    
    



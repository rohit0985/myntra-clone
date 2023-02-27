import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const LatestInBeauty = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >LATEST IN BEAUTY & GROOMING</Heading>
    
          <Box>
            <SimpleGrid columns={LATEST_IN_BEAUTY_and_GROOMING.length/2} spacing="0px">
              {LATEST_IN_BEAUTY_and_GROOMING.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default LatestInBeauty;
    
    const LATEST_IN_BEAUTY_and_GROOMING = [
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/2c49ab74-5efa-4104-b71c-cdb4891762931645791174303-SS22-Beauty-Philips.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1850cdd3-e1be-47b3-ac4b-f8f395afce491645791174169-SS22-Beauty-Biotique.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/7f7c368a-fa16-44f9-b7a2-8562ec21ba0a1645791174190-SS22-Beauty-ColorBar.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/45b5535a-38c4-4c10-a301-3b6f3b56e43f1645791174266-SS22-Beauty-Lakme.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/b0ed0a6a-5b23-42d4-9dce-3fceb80ff68c1645791174229-SS22-Beauty-Himalaya.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/564b3c15-dba4-422e-acd5-72aac85b75541645791174149-SS22-Beauty-Beardo.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/f4330a78-6a11-4edc-bad9-dc03f02dec0e1645791174210-SS22-Beauty-FacesCanada.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/31253277-4623-43ed-9129-9b8015520e901645791174285-SS22-Beauty-Mamaearth.jpg"
        }
      ]
    
    
    




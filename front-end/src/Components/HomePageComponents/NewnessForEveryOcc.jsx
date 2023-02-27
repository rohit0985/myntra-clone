import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const NewnessForEveryOcc = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >NEWNESS FOR EVERY OCCASION</Heading>
    
          <Box>
            <SimpleGrid columns={NEWNESS_FOR_EVERY_OCCASION.length/2} spacing="0px">
              {NEWNESS_FOR_EVERY_OCCASION.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default NewnessForEveryOcc;
    
    const NEWNESS_FOR_EVERY_OCCASION = [
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/407be362-f208-4d84-a723-f30045e4a6151645784458357-SS22-ShopByOccassion-BackToOffice-1-.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/4ff811f4-1ece-46dc-baf4-3454c9dc41831645784458532-SS22-ShopByOccassion-PilatesClass-1-.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/90f48b14-9947-4637-8f92-75e13dbc3a6f1645784458462-SS22-ShopByOccassion-HappyHours-1-.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/d99b81d4-a71f-406e-9a54-5b14d2800d6d1645784458375-SS22-ShopByOccassion-BackToOffice.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/8bde42f6-0001-4fdf-89ba-bdeb7d41a8081645784458585-SS22-ShopByOccassion-SummerWedding.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/ff13247e-84d8-4bd3-ba09-38aa0eb61fc01645784458550-SS22-ShopByOccassion-PilatesClass.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/0771918e-d4cb-4fc7-9bbe-719ff27f78201645784458410-SS22-ShopByOccassion-BeachVacation.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/7920b25a-11be-46f0-8dee-efca6cd045911645784458497-SS22-ShopByOccassion-NetflixParty-1-.jpg"
        }
      ]
    
    
    



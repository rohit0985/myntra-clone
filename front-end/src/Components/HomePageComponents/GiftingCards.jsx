import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const GiftingCards = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >BEST BUYS</Heading>
    
         <Box>
         <Box>
            <SimpleGrid columns={GIFTING_CARDS_1.length} spacing="0px">
              {GIFTING_CARDS_1.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          
          <Box>
            <SimpleGrid columns={GIFTING_CARDS_2.length} spacing="0px">
              {GIFTING_CARDS_2.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
         </Box>
        </VStack>
      );
    };
    
    export default GiftingCards;
    
    const GIFTING_CARDS_1 = [
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/22/22b3c59a-fa16-434d-b2e1-d8779f1abe871661164884892-Gift-Card-Banner.png"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/ef1e7c6b-bec4-471c-9c36-72fffd975c0c1636738225251-happy-wedding.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/72f3fe20-f0a5-4894-852c-817b40b285291636738225244-happy-birthday.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/934a734c-ebb4-48c4-96d0-018e1e5eb7e21636738225215-milestones.jpg"
        }
      ];

    const GIFTING_CARDS_2 =  [
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/17209d4a-6c5e-4ba7-8d12-77b77dd3d04f1647340317606-SS22-KeyHighlights-Homedecor.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/6f5ef7a2-3562-4221-8f89-f7dd6c157bd31647340281629-SS22-KeyHighlights-TommyHilfiger.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/c3792c79-967a-4d54-9cde-963e86defe331647340317589-SS22-KeyHighlights-F21.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/042e2643-e1af-435b-8e20-1afcbc171b3e1647340281452-SS22-KeyHighlights-Forever21.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/d48d0786-3f7c-4124-83a7-e414bc3ccd021647340317640-SS22-KeyHighlights-ModaRapido.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/3/348b6eba-104d-472e-90d3-a29cf315b9ed1646296933371-FirstonMyntra-Men-Campus.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/bb442c92-90d4-4c5e-99c3-aa5bf5a5dbae1647340391242-SS22-KeyHighlights-Women-ForeverNew.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/2ecfa799-6de6-425f-8578-3c59986d28951647340317709-SS22-KeyHighlights-Zeneme.jpg"
        }
      ]
    
    
    
    
    

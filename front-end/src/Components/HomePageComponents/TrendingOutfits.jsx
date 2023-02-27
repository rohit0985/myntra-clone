 import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const TrendingOutfits = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >TRENDING OUTFITS BY INFLUENCERS</Heading>
    
          <Box>
            <SimpleGrid columns={TRENDING_OUTFITS_BY_INFLUENCERS.length} spacing="0px">
              {TRENDING_OUTFITS_BY_INFLUENCERS.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default TrendingOutfits;
    
    const TRENDING_OUTFITS_BY_INFLUENCERS = [
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d8bee915-9dbd-4cbb-9562-896dd16afdf31647418012563-Studiocontent-HPCarousel-Men-BeyondBasicsCasulaWear.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fa1a37d5-db35-4df5-9f3b-dfeebf9a22bd1647418012703-Studiocontent-HPCarousel-Women-IndianWearGuide.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/843d4a44-833a-4179-a5a2-7f8c52bb1ef71647418012580-Studiocontent-HPCarousel-Men-FootwearFavouritesjpg.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ce751fad-7e3a-456d-87cd-457c6de7fccc1647418012597-Studiocontent-HPCarousel-Men-FormalWear.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0b6937a5-cf76-49c6-a3ab-551b7a17fafa1647418012686-Studiocontent-HPCarousel-Women-GymWear.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3edddaf4-c192-4651-966d-6b8e04fa309b1647418012668-Studiocontent-HPCarousel-Women-FormalWear.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/99b98dd2-83e4-4ac1-b2a5-b0bf8b81d62a1647418012633-Studiocontent-HPCarousel-Men-LoungeWear.jpg"
        }
      ]
    
    
    
  
  
  
  
  
  
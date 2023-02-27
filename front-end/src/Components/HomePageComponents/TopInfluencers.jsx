import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
  import React from "react";
  
  const TopInfluencers = () => {
    return (
      <VStack
     w={'100%'}
     alignItems={'flex-start'}
     gap={8}
     m={'50px 0px'}
      >
        <Heading pl={10} >TOP INFLUENCERS EXCLUSIVE STYLES</Heading>
  
        <Box>
          <SimpleGrid columns={TOP_INFLUENCERS_EXCLUSIVE_STYLES.length} spacing="0px">
            {TOP_INFLUENCERS_EXCLUSIVE_STYLES.map((deal, idx) => (
              <Box>
                <Image src={deal.image} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    );
  };
  
  export default TopInfluencers;
  
  const TOP_INFLUENCERS_EXCLUSIVE_STYLES = [
    {
      "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/c7fff41e-a426-4188-b319-bde1651f109e1647417948711-Studiocontent-HPBanner-Men-FestiveWearBythomson_19071gif.gif"
    },
    {
      "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ab0ac260-8f5d-4a64-a626-83b58129e3491647417948743-Studiocontent-HPBanner-Women-WeddingOutfitsBy-thankgod_itsfashion.gif"
    },
    {
      "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d210ddcf-73f4-4044-a75d-e8a6665fb9151647417948735-Studiocontent-HPBanner-Women-PartyLooksByiamartichauhan.gif"
    },
    {
      "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/8872ea7e-92a1-4be6-9706-d78845d480781647417948726-Studiocontent-HPBanner-Men-StreetWearByurban.lad.gif"
    },
    {
      "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/462e80ef-51d4-4a81-a509-72d45ec7f6331647417948751-Studiocontent-HPBanner-Women-WorkWearBasicsByoutlanSrish.gif"
    },
    {
      "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f6826795-22fa-4d40-8573-d5e1ee1178531647417948719-Studiocontent-HPBanner-MenGymBasicsByiakashchoudhary.gif"
    }
  ]
  
  
  






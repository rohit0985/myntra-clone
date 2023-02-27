import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
  import React from "react";
  
  const BudgetPicks = () => {
    return (
      <VStack
     w={'100%'}
     alignItems={'flex-start'}
     gap={8}
     m={'50px 0px'}
      >
        <Heading pl={10} >BUDGET PICKS INFLUENCERS LOVE</Heading>
  
        <Box>
          <SimpleGrid columns={BUDGET_PICKS_INFLUENCERS_LOVE.length} spacing="0px">
            {BUDGET_PICKS_INFLUENCERS_LOVE.map((deal, idx) => (
              <Box>
                <Image src={deal.image} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    );
  };
  
  export default BudgetPicks;
  
  const BUDGET_PICKS_INFLUENCERS_LOVE = [
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f7dd9f7e-e99d-42ee-b968-22ffa616d8681647418063204-Studiocontent-HPGrid-SummerShirts.png"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/13c90fd6-62ca-459a-86c6-ebdf19617a251647418063195-Studiocontent-HPGrid-ClassicDenim.png"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/973855e5-a1d8-4a4a-810c-60a02068b0cb1647418043970-Studiocontent-HPGrid-TrendyTops.png"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/bf5c8576-26e6-42a7-a4d0-eba5dd2a59f11647418043962-Studiocontent-HPGrid-SummerSkirts.png"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f9d82a54-06f3-4bfb-8dd3-0f6c258212a71647418043955-Studiocontent-HPGrid-ElegantSarees.png"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/e14a3767-485e-4f99-a92f-e5880dcc39181647418063210-Studiocontent-HPGrid-TraditionalKurtas.png"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/5ba2861b-33cd-45cb-a526-cca93d2629a31647418063217-Studiocontent-HPGrid-TrendyTshirts.png"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/37ad6a46-8dfc-46cc-9d4b-a1781079a0511647418043947-Studiocontent-HPGrid-DreamyDresses.png"
    }
  ]
  
  
  






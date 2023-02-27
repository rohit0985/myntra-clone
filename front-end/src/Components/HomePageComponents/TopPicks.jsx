import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

const TopPicks = () => {
  return (
    <VStack
   w={'100%'}
   alignItems={'flex-start'}
   gap={8}
   m={'50px 0px'}
    >
      <Heading pl={10} >TOP PICKS</Heading>

      <Box>
        <SimpleGrid columns={TOP_PICKS.length} spacing="0px">
          {TOP_PICKS.map((deal, idx) => (
            <Box>
              <Image src={deal.image} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default TopPicks;

const TOP_PICKS= [
  {
    "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg"
  },
  {
    "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg"
  },
  {
    "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg"
  },
  {
    "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg"
  },
  {
    "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg"
  },
  {
    "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg"
  },
  {
    "image": "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg"
  }
]

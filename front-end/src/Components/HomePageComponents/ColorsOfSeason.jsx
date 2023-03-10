import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
  import React from "react";
  
  const ColorsOfSeason = () => {
    return (
      <VStack
     w={'100%'}
     alignItems={'flex-start'}
     gap={8}
     m={'50px 0px'}
      >
        <Heading pl={10} fontWeight={500} fontSize={'3xl'} >COLOURS OF THE SEASON</Heading>
  
        <Box>
          <SimpleGrid columns={COLOURS_OF_THE_SEASON.length/2} spacing="0px">
            {COLOURS_OF_THE_SEASON.map((deal, idx) => (
              <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    );
  };
  
  export default ColorsOfSeason;
  
  const COLOURS_OF_THE_SEASON = [
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/53a0e7bc-64e7-4fb3-94fd-a1ada51fbefa1647516450800-SS22-Colours-Metallic-Hues.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/a6ef0785-eb3c-4726-a6ba-c09f6a44379c1647516450782-SS22-Colours-Elegant-Olive.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/65446aed-c0e9-4bab-af02-3e96c6ad7ab51646753796263-SS22-Colours-Cobalt.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3b1d43f4-46bf-4e3f-903b-ec5ca5c2bac91645860983331-SS22-Colours-Mens-BreezyWhite.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/96018800-d6b6-47e1-9998-62de5ce5c16a1647516450837-SS22-Colours-Soft-Pastels.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/389fe98d-b379-4816-9411-63624b03c0671647516450765-SS22-Colours-Electric-Lime.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/c1c00661-aff4-439e-9fd1-76982e7784831647516450875-SS22-Colours-Turquoise-Blue.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/3a8ac38f-76fe-4ee4-84fa-f9bd4947c4431647516450746-SS22-Colours-Coffee-Browns.jpg"
    }
  ]
  
  
  





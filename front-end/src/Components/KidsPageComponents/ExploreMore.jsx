import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const ExploreMore = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >EXPLORE MORE</Heading>
    
          <Box>
            <SimpleGrid columns={EXPLORE_MORE.length/3} spacing="0px">
              {EXPLORE_MORE.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default ExploreMore;
    
    const  EXPLORE_MORE = [
        {
        "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/630c5d84-b4fa-4ba8-aa92-c91cd134b9201604906586823-39-Banner-LogoMania.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg"
        },
        {
            "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg",
            "url":"https://www.myntra.com/organic-cotton-boys-girls"
            },
            {
            "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg",
            "url":"https://www.myntra.com/essntlssmrkds"
            },
            {
                "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb420f64-fea8-4d66-87b7-03c7f7fb6e621604906587041-43-Banner-Uniquely-Myntra.jpg"
                },
                {
                "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1ac6219d-54b8-484e-813b-c239bb9880141604906587091-44-Banner-ActiveWearStore.jpg"
                }
        ]
    
    
    
    




import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const KidsSpace = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >THE KIDS SPACE</Heading>
    
          <Box>
            <SimpleGrid columns={THE_KIDS_SPACE.length} spacing="0px">
              {THE_KIDS_SPACE.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default KidsSpace;
    
    const  THE_KIDS_SPACE = [
        {
        "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/817ada39-86d3-4162-b10f-443c7d658f541604906587912-59b-Banner-KidsSpace.jpg",
        "url":"https://www.myntra.com/kdshmebscs?f=Categories%3ABath%20Robe%2CBath%20Rugs%2CBath%20Sets%2CBath%20Towels%2CRobe%2CTowel%20Set"
        },
        {
        "image":"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/9906ea02-f0e5-40b8-b6db-ce3c5fd5fcf31604906587854-59a-Banner-KidsSpace.jpg",
        "url":"https://www.myntra.com/kdshmebscs?f=Categories%3ABedsheets%2CBlankets%20Quilts%20and%20Dohars%2CCarpets%2CClocks%2CCurtains%20and%20Sheers%2CCushion%20Covers%2CCushions%2CDoormats%2CFloor%20Mats%20%26%20Dhurries%2COrganisers%2CPillow%20Covers%2CPillows"
        }
        ]
    
    
    
    
    





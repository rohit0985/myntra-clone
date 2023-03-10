import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const NewInTopBrands = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >NEW IN TOP BRANDS</Heading>
    
          <Box>
            <SimpleGrid columns={NEW_IN_TOP_BRANDS.length} spacing="0px">
              {NEW_IN_TOP_BRANDS.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default NewInTopBrands;
    
    const NEW_IN_TOP_BRANDS = [
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3ce3c5e7-6060-4b15-b80b-6ddcd19d385a1645860227491-SS22-BestOfBrands-Max.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/96b79372-852b-4e41-904a-ffc47f840d171645860227477-SS22-BestOfBrands-Levis.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/ae3f2d8b-4f02-40ab-8233-d9ab9c7be4941645860227438-SS22-BestOfBrands-CKJeans.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/426cb519-be57-4970-b23c-edb9e442cb761645860227551-SS22-BestOfBrands-W.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/823d5fd5-48e6-4eb1-bd66-1ea70306275a1645860227498-SS22-BestOfBrands-Metro.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fd730d26-ff9d-41e5-af2e-b20f71757b5f1645779089335-BestOfBrands-Nike.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/b69656bd-7766-45db-96ea-d45df19a7a361645860227484-SS22-BestOfBrands-LP.jpg"
        }
      ]
    
    


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
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >TOP PICKS</Heading>
    
          <Box>
            <SimpleGrid columns={TOP_PICKS.length} spacing="0px">
              {TOP_PICKS.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default TopPicks;
    
    const  TOP_PICKS = [
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/cca065d6-f192-44dd-9e12-40be8c5ed9ee1649781648648-H_M.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/00a95486-20dc-42e4-95d9-91242ba7f83b1649781648667-Kids-wear.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/54794130-d358-421b-a73f-1ea5f98330641649781648655-Indian-Wear.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/2d7c5cdb-1859-4883-8ba6-8fa2bc8ace841649781648661-Jeans-_-Trousers.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/d535f930-b28d-4aaa-a3a1-e6cbf43ac18f1649781648685-Redtape.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/603cd248-fa30-43be-b649-55b5ec70e5431649781648679-Max.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/c97dcb69-4b36-4f4a-adde-d473b2e5ae9d1649781648698-Top-Brands.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/46e55402-2a6b-4397-8332-4a786cf6fd801649781648704-Tops-_-Tees.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/489b294a-84f4-4858-8f8e-ca485a36c5811649781648673-Kids-Wear-1.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/38907e29-87e1-46ec-8542-43a29e3c82c81649781648691-Teens-Clothing.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/728e97e1-4845-41b8-8830-19e7cb0cf4161649781648642-Baby-Utilities.jpg"
        }
        ]
    
    
    
    
    


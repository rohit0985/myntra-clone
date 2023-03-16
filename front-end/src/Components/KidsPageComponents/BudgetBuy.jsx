 import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
    import React from "react";
    
    const BudgetBuy = () => {
      return (
        <VStack
       w={'100%'}
       alignItems={'flex-start'}
       gap={8}
       m={'50px 0px'}
        >
          <Heading pl={10} fontWeight={500} fontSize={'3xl'} >BUDGET BUY</Heading>
    
          <Box>
            <SimpleGrid columns={BUDGET_BUY.length} spacing="0px">
              {BUDGET_BUY.map((deal, idx) => (
                <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      );
    };
    
    export default BudgetBuy;
    
    const  BUDGET_BUY = [
        {
        "image":"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/df528847-96b6-48cc-9104-064ad788804c1604906588040-61-BudgetBuys-TshirtsUnder499.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/e42fbdcd-31cd-43de-b1eb-0f3f4351e08d1604906588093-62-BudgetBuys-DressesUnder799.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1abffc52-836d-4778-a034-a851b45e43c31604906588162-63-BudgetBuys-EthnicWearUnder999.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb9520c5-20c6-496c-811e-4693bc2828b31604906588221-64-BudgetBuys-ShortsUnder599.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/8430d7ff-a2f4-496a-bf90-b1c3a8cc7d231604906588272-65-BudgetBuys-ValuePacksUnder799.jpg"
        },
        {
        "image":"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/af518c66-a610-4ab7-91bf-b343b9c1b8501604906588337-66-BudgetBuys-FootwearUnder699.jpg"
        }
        ]
    
    
    
    






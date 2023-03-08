import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import ProductCardForCartPage from "../ProductCardForCartPage";

const YouMayLike = () => {
  return (
    <Box
      w="80%"
      m="auto"
      mt="30px"
      p="10px"
      bg="linear-gradient(180deg,#fff5f7 0,#fff)"
    >
      <Box w="100%" borderTop="1px solid">
        <Heading textAlign={"left"} m="10px 0px" size={"sm"}>
          You may also like:
        </Heading>

        <VStack h={"100%"} w={"100%"}>
          <SimpleGrid columns={[1, , 2, 3, 4]} spacing="45px" mt="20px">
            {new Array(20).fill(0).map((prod, idx) => (
              <ProductCardForCartPage key={idx} />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};

export default YouMayLike;

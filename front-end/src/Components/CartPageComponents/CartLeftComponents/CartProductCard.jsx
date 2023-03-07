import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import SelectQuantityModal from "./SelectQuantityModal";
import SelectSizeModal from "./SelectSizeModal";

const CartProductCard = () => {
  return (
    <Flex>
      <Box>
        <Image src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg" />
      </Box>

      <VStack>
        <Heading>HRX by Hrithik Roshan</Heading>
        <Text>Men Teal Blue Printed Pure Cotton T-shirt</Text>
        <Text>Sold by: Omnitech Retail</Text>

<Flex>
  <SelectSizeModal/>
  <SelectQuantityModal/>
</Flex>

      </VStack>
    </Flex>
  );
};

export default CartProductCard;

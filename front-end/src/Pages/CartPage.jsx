import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import CartLeft from "../Components/CartPageComponents/CartLeft";
import CartRight from "../Components/CartPageComponents/CartRight";
import YouMayLike from "../Components/CartPageComponents/YouMayLike";

const CartPage = () => {
  return (
    <Box>
      <Flex ringColor="green" w="80%" margin="auto">
        <CartLeft />
        <CartRight />
      </Flex>
      <YouMayLike />
    </Box>
  );
};

export default CartPage;

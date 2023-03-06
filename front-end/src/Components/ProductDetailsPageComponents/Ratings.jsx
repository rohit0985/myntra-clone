import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import RangeShowCase from "./RangeShowCase";

const Ratings = () => {
  return (
    <HStack gap="30px" borderBottom="1px solid" borderColor="gray.300" pb="10px">
      <Box borderRight="1px solid" borderColor="#a9abb3" pr="30px">
        <Flex alignItems="center" gap="10px">
          <Heading size={"2xl"} fontWeight={500}>
            4
          </Heading>
          <AiFillStar fontSize="25px" color="teal" />
        </Flex>
        <Text fontSize="14px" mt="10px">
          15.4k Verified Buyers
        </Text>
      </Box>

      <Box >
      <RangeShowCase/>
      </Box>
    </HStack>
  );
};

export default Ratings;

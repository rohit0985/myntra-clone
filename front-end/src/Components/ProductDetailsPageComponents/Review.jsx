import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = ({el}) => {



  return (
    <HStack alignItems="flex-start" borderBottom={'1px solid'} borderColor="gray.300" pb="20px">
      <Flex
        ring={1}
        bg="teal.500"
        alignItems="center"
        justifyContent="center"
        p="0px 5px"
        fontSize="12px"
        color="white"
        borderRadius="2px"
      >
        {el.rating} <AiFillStar />
      </Flex>

      <VStack alignItems={"flex-start"} gap="5px">
        <Text>
          {el.review}
        </Text>
        <HStack>
          {el.images?.length > 0 &&
            el.images.map((image, idx) => <Image src={image} w="50px" key={idx} />)}
            {el.images.length>5 ? <Text textDecoration="underline" cursor="pointer">+ {el.images.length - 5} more images</Text> : null}

        </HStack>
        <Text>{el.user} | {el.date}</Text>
      </VStack>
    </HStack>
  );
};

export default Review;



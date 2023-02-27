import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Input,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const FilterGrop = ({ filter, data }) => {
  const [searchOption, setSearchOption] = useState(true);

  return (
    <VStack
      p={"20px"}
      borderBottom="1px solid"
      borderColor="gray.300"
      w={"100%"}
    >
      <VStack
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        w={"100%"}
      >
        <HStack w="100%" h={"30px"} alignItems="center">
          {searchOption ? (
            <HStack justifyContent="space-between" w="100%">
              <Heading fontSize={"14px"}>{filter}</Heading>
              <Flex
                h="25px"
                w="25px"
                borderRadius={"50%"}
                alignItems="center"
                justifyContent="center"
                bg="gray.100"
                fontSize={"15px"}
                cursor={"pointer"}
                onClick={() => setSearchOption(!searchOption)}
              >
                <SearchIcon color={'gray.400'} />
              </Flex>
            </HStack>
          ) : (
            <HStack>
              <Input
                type="text"
                placeholder={`Search for ${filter.toLowerCase()}`}
                h="30px"
                outline={"none"}
                _focus={{ bg: "gray.100" }}
                focusBorderColor="gray.100"
              />
              <Flex
                h="25px"
                w="25px"
                borderRadius={"50%"}
                alignItems="center"
                justifyContent="center"
                bg="gray.100"
                fontSize={"12px"}
                p={2}
                cursor={"pointer"}
                onClick={() => setSearchOption(!searchOption)}
              >
                <CloseIcon color={'gray.400'}/>
              </Flex>
            </HStack>
          )}
        </HStack>
        <VStack
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          spacing="2px"
        >
          {data.map((el, idx) => ( idx<5 && 
            <Checkbox size="md" colorScheme="pink"  key={idx} color="blackAlpha.800">
              <Text fontSize={'14px'}>{el}</Text>
            </Checkbox>
          ))}
          {
            data.length>5 ? <Text pl="20px" fontSize={'14px'} color="pink.500">+{data.length - 5} more</Text> : null
          }
        </VStack>
      </VStack>
    </VStack>
  );
};

export default FilterGrop;

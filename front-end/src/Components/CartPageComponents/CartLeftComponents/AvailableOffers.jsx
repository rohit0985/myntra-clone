import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CiPercent } from "react-icons/ci";

const AvailableOffers = () => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <VStack
      alignItems="flex-start"
      textAlign="left"
      fontSize="14px"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="5px"
      p="10px"
    >
      <Flex alignItems="center" gap="5px" fontWeight={500}>
        <CiPercent fontWeight="bold" fontSize="20px" />
        <Text>Available offers</Text>
      </Flex>

      <Accordion allowMultiple>
        <UnorderedList>
          <ListItem ml="15px">
            <Text fontSize="14px">
              10% Instant Discount on Kotak Credit and Debit Cards on a minimum
              spend of Rs 3,000. TCA
            </Text>
          </ListItem>
        </UnorderedList>
        <AccordionItem border="none">
          <AccordionPanel pb={2}>
            <UnorderedList spacing="10px">
              <ListItem>
                <Text fontSize="14px">
                  Flat Rs 200 Cashback on Paytm Wallet and Postpaid Transactions
                  on a minimum spend of Rs 2,000. TCA
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize="14px">
                  Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices
                  only) on a minimum spend of Rs 1000. TCA
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize="14px">
                  5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize="14px">
                  10% Cashback upto Rs 150 on Freecharge Paylater transaction.
                  TCA
                </Text>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>

          <AccordionButton
            _hover={{ bg: "none" }}
            border="none"
            onClick={() => setAccordianOpen(!accordianOpen)}
          >
            <Flex
              alignItems="center"
              gap="3px"
              color="#ff3f6c"
              fontWeight={500}
            >
              <Text fontSize="14px">
                {accordianOpen ? "See Less" : "See More"}
              </Text>
              {accordianOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </Flex>
          </AccordionButton>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default AvailableOffers;

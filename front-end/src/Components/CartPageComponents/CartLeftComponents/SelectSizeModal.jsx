import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  Circle,
  Image,
  Box,
  Heading,
  Text,
  chakra,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiCaretDown } from "react-icons/bi"

const SelectSizeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg="#E9EAEC" h="25px" p="0px 7px" borderRadius="2px" onClick={onOpen} fontSize="14px" fontWeight="bold">Size: L <BiCaretDown/></Button>

      <Modal isOpen={isOpen} onClose={onClose} w="300px">
        <ModalOverlay />
        <ModalContent w="400px">
          <ModalCloseButton />
          <ModalBody>
            <Flex
              gap="15px"
              borderBottom="1px solid"
              borderColor="gray.300"
              p="20px 0px"
            >
              <Image
                w="70px"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
              />
              <VStack alignItems="flex-start" justifyContent="space-between">
               <VStack alignItems="flex-start">
               <Heading size="sm">HRX by Hrithik Roshan</Heading>
                <Text fontSize="14px">Men Teal Blue Printed Pure Cotton T-shirt</Text>
               </VStack>
                <Flex gap="5px" fontSize="14px">
                  <chakra.span fontWeight={500}>₹314</chakra.span>
                  <chakra.span textDecoration="line-through" color="gray.500">
                    ₹699
                  </chakra.span>
                  <chakra.span color="#f16565" fontWeight={400}>
                    55% OFF
                  </chakra.span>{" "}
                </Flex>
              </VStack>
            </Flex>

            <VStack alignItems="flex-start" gap="10px" p="10px 0px">
              <ModalHeader fontSize="16px" fontWeight="bold" p="0px">
                Select Quantity
              </ModalHeader>

              <Flex gap="10px" alignItems="flex-start" flexWrap="wrap">
                {["S", "M", "L", "XL", "XXL"].map((ele, idx) => (
                  <Circle
                    w="40px"
                    h="40px"
                    border="1px solid"
                    borderColor="gray.400"
                    borderRadius="50%"
                    fontWeight={"bold"}
                    fontSize="14px"
                    color="gray.700"
                    _hover={{ borderColor: "#ff3f6c", cursor: "pointer" }}
                    key={idx}
                  >
                    {ele}
                  </Circle>
                ))}
              </Flex>
              <Text fontSize="14px" color="gray.500">
                Seller:{" "}
                <chakra.span fontWeight={500} color="black">
                  Ommini RetailTech
                </chakra.span>{" "}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter mb="10px">
            <Button
              w="100%"
              bg="#ff3f6c"
              color="white"
              onClick={onClose}
              borderRadius="2px"
              fontSize="14px"
              fontWeight="bold"
              _hover={{ bg: "#ff3f6c" }}
            >
              DONE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectSizeModal;

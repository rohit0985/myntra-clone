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
  Center,
  Flex,
  Circle,
} from "@chakra-ui/react";
import React from "react";
import { BiCaretDown } from "react-icons/bi"

const SelectQuantityModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg="#E9EAEC" h="25px" p="0px 7px" borderRadius="2px" onClick={onOpen}fontSize="14px" fontWeight="bold">Qty: 1 <BiCaretDown/></Button>

      <Modal isOpen={isOpen} onClose={onClose} w="300px">
        <ModalOverlay />
        <ModalContent w="300px">
          <ModalHeader fontSize="16px" fontWeight="bold">
            Select Quantity
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="10px" alignItems="flex-start" flexWrap="wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, idx) => (
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

export default SelectQuantityModal;

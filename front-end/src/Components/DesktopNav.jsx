/*
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Badge,
  Heading,
  chakra,
  VStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import MenItems from "./Navbar/MenItems";
import { SlUser } from "react-icons/sl";
import { BsHeart, BsHandbag } from "react-icons/bs";
import WomenItems from "./Navbar/WomenItems";
import KidsItems from "./Navbar/KidsItems";
import HomeAndLivingItems from "./Navbar/HomeAndLivingItems";
import BeautyItems from "./Navbar/BeautyItems";
import StudioItems from "./Navbar/StudioItems";
// import { Link } from "react-router-dom"

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
   
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"50px"}
        w={"100vw"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={"space-between"}
        
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
          <Image
          cursor={'pointer'}
            w="60px"
            h="60px"
            src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
          />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          mr={10}
          w={{ base: "50%", md: "40%", lg: "30%" }}
          display={{ base: "flex", md: "none", lg: "flex" }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              focusBorderColor="pink.400"
              type="text"
              placeholder="Search your product..."
            />
          </InputGroup>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <VStack  cursor={'pointer'}>
            <SlUser color="black" />
            <Text fontSize={12} fontWeight={"bold"} color={"black"}>
              Profile
            </Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <BsHeart color="black" />
            <Text fontSize={12} fontWeight={"bold"} color={"black"}>
              Wishlist
            </Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <BsHandbag color="black" />
            <Text fontSize={12} fontWeight={"bold"} color={"black"}>
              Bag
            </Text>
          </VStack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack align={"center"} direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, idx) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
             
              <Link
              
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                pb={4}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  borderBottom: "2px",
                }}
              >
                {navItem.label}
                {idx === NAV_ITEMS.length - 1 ? (
                  <chakra.span
                    fontWeight="bold"
                    position={"relative"}
                    top={"-7px"}
                    fontSize={"10"}
                    ml={1}
                    color={"pink.400"}
                  >
                    NEW
                  </chakra.span>
                ) : null}
              </Link>

            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                // p={4}
                rounded={"xl"}
                minW={"sm"}
                w={"100%"}
                position={'relative'}
              
                left={"0px"}
              >
                <Stack>{navItem.children.map((child, idx) => <div key={idx}>{child.subLabel}</div> )}</Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}  >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: "MEN",
    href:"/shop/men",
    children: [
      {
        label: "Explore Design Work",
        subLabel: <MenItems/>,
        href: "#",
      },
    ],
  },
  {
    label: "WOMEN",
    href:"/shop/women",
    children: [
      {
        label: "Job Board",
        subLabel: <WomenItems/>,
        href: "#",
      },
    ],
  },
  {
    label: "KIDS",
    href:"/shop/kids",
    children: [
      {
        label: "Job Board",
        subLabel: <KidsItems/>,
        href: "#",
      },
    ],
  },
  {
    label: "HOME & LIVING",
    href:"/",
    children: [
      {
        label: "Job Board",
        subLabel: <HomeAndLivingItems/>,
        href: "#",
      },
    ],
  },
  {
    label: "BEAUTY",
    href:"/",
    children: [
      {
        label: "Job Board",
        subLabel: <BeautyItems/>,
        href: "#",
      },
    ],
  },
  {
    label: "STUDIO",
    href:"/",
    children: [
      {
        label: "Job Board",
        subLabel: <StudioItems/>,
        href: "#",
      },
    ],
  },
];

export {};



*/

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  // Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Badge,
  Heading,
  chakra,
  VStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import MenItems from "./Navbar/MenItems";
import { SlUser } from "react-icons/sl";
import { BsHeart, BsHandbag } from "react-icons/bs";
import WomenItems from "./Navbar/WomenItems";
import KidsItems from "./Navbar/KidsItems";
import HomeAndLivingItems from "./Navbar/HomeAndLivingItems";
import BeautyItems from "./Navbar/BeautyItems";
import StudioItems from "./Navbar/StudioItems";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"50px"}
        w={"100vw"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={"space-between"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            cursor={"pointer"}
            w="60px"
            h="60px"
            src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          mr={10}
          w={{ base: "50%", md: "40%", lg: "30%" }}
          display={{ base: "flex", md: "none", lg: "flex" }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              focusBorderColor="pink.400"
              type="text"
              placeholder="Search your product..."
            />
          </InputGroup>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <VStack cursor={"pointer"}>
            <SlUser color="black" />
            <Text fontSize={12} fontWeight={"bold"} color={"black"}>
              Profile
            </Text>
          </VStack>
          <VStack cursor={"pointer"}>
            <BsHeart color="black" />
            <Text fontSize={12} fontWeight={"bold"} color={"black"}>
              Wishlist
            </Text>
          </VStack>
          <VStack cursor={"pointer"}>
            <BsHandbag color="black" />
            <Text fontSize={12} fontWeight={"bold"} color={"black"}>
              Bag
            </Text>
          </VStack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack align={"center"} direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, idx) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                pb={4}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  borderBottom: "2px",
                }}
              >
                <chakra.span color="black" fontSize="14px" fontWeight={500}>
                  {navItem.label}
                </chakra.span>
                {idx === NAV_ITEMS.length - 1 ? (
                  <chakra.span
                    fontWeight="bold"
                    position={"relative"}
                    top={"-7px"}
                    fontSize={"10"}
                    ml={1}
                    color={"pink.400"}
                  >
                    NEW
                  </chakra.span>
                ) : null}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                // p={4}
                rounded={"xl"}
                minW={"sm"}
                w={"100%"}
                position={"relative"}
                left={"0px"}
              >
                <Stack>
                  {navItem.children.map((child, idx) => (
                    <div key={idx}>{child.subLabel}</div>
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MEN",
    href: "/shop/men",
    children: [
      {
        label: "Explore Design Work",
        subLabel: <MenItems />,
        href: "#",
      },
    ],
  },
  {
    label: "WOMEN",
    href: "/shop/women",
    children: [
      {
        label: "Job Board",
        subLabel: <WomenItems />,
        href: "#",
      },
    ],
  },
  {
    label: "KIDS",
    href: "/shop/kids",
    children: [
      {
        label: "Job Board",
        subLabel: <KidsItems />,
        href: "#",
      },
    ],
  },
  {
    label: "HOME & LIVING",
    href: "/",
    children: [
      {
        label: "Job Board",
        subLabel: <HomeAndLivingItems />,
        href: "#",
      },
    ],
  },
  {
    label: "BEAUTY",
    href: "/",
    children: [
      {
        label: "Job Board",
        subLabel: <BeautyItems />,
        href: "#",
      },
    ],
  },
  {
    label: "STUDIO",
    href: "/",
    children: [
      {
        label: "Job Board",
        subLabel: <StudioItems />,
        href: "#",
      },
    ],
  },
];

export {};

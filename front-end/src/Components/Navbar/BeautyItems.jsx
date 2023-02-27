import {
  Box,
  Heading,
  HStack,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const BeautyItems = () => {
  return (
    <HStack 
    p={3}
    align
    width={"100vw"}
    justify={'space-between'}
    >
     
      <VStack align="flex-start" gap={2}>
        <IndianWear/>
      </VStack>

      <VStack align="flex-start" gap={2}>
        <WesternWear/>
      </VStack>

      <VStack align="flex-start" gap={2}>
        <Footwear/>
        <SportsWear/>
      </VStack>

      <VStack align="flex-start" gap={2}>
        <Lingerie/>
        <BeautyAndPersonalCare/>
      </VStack>

      <VStack align="flex-start" gap={2}>
        <Gadgets/>
        <Jewellery/>
      </VStack>

    </HStack>
  );
};

export default BeautyItems;



const IndianWear = () => {
  const data = {
    category: "Indian & Fashion Wear",
    subCategories: [
        {lebel: "", href: "",},
    ],
  };

  return (
    <ListRender data={data}/>
  );
};

const WesternWear = () => {
  const data = {
    category: "Western Wear",
    subCategories: [
        {lebel: "Kurtas & Kurta Sets", href: "",},
    ],
  };

  return (
    <ListRender data={data}/>
  );
};

const Footwear = () => {
  const data = {
    category: "Footwear",
    subCategories: [
      {lebel: "Jeans", href: "",},
    ],
  }

  return (
   <ListRender data={data}/>
  );
};

const SportsWear = () => {
  const data = {
    category: "Sports & Active Wear",
    subCategories: [
      {lebel: "Briefs & Trunks", href: "",},      
     ],
  }

  return (
   <ListRender data={data}/>
  );
};
const Lingerie = () => {
  const data = {
    category: "Lingerie & Sleepwear",
    subCategories: [
      {lebel: "Casual Shoes", href: "",},
     ],
  }

  return (
   <ListRender data={data}/>
  );
};

const BeautyAndPersonalCare = () => {
  const data = {
    category: "Beauty & Personal Care",
    subCategories: [
      {lebel: "Sports Shoes", href: "",},     
     ],
  }

  return (
   <ListRender data={data}/>
  );
};

const Gadgets = () => {
  const data = {
    category: "Beauty & Personal Care",
    subCategories: [
      {lebel: "Sports Shoes", href: "",},     
      ],
  }

  return (
   <ListRender data={data}/>
  );
};

const Jewellery = () => {
  const data = {
    category: "Beauty & Personal Care",
    subCategories: [
      {lebel: "Sports Shoes", href: "",},     
      ],
  }

  return (
   <ListRender data={data}/>
  );
};

const ListRender = ({data})=>{
return (
    <VStack justify={"flex-start"} align={"flex-start"}>
    <Heading color={"teal.600"} textAlign={"left"} size={"sm"}>{data.category}</Heading>
    <UnorderedList styleType={"none"} textAlign={"left"} gap="1">
      {data.subCategories.map((item, idx) => (
        <ListItem key={idx} fontSize={"14px"} _hover={{ fontWeight: "bold" }}>
          {item.lebel}
        </ListItem>
      ))}
    </UnorderedList>
  </VStack>
)
}


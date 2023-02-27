import {
  Box,
  Heading,
  HStack,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const MenItems = () => {
  return (
    <HStack 
    p={3}
    align
    width={"100vw"}
    justify={'space-between'}
    >
     
      <VStack align="flex-start" gap={2}>
        <Topwear/>
        <Indian_Festive />
      </VStack>

      <VStack align="flex-start" gap={2}>
        <BottomWear/>
        <Innerwear/>
      </VStack>

      <VStack align="flex-start" gap={2}>
        <FootWear/>
        <Indian_Festive/>
      </VStack>

      <VStack align="flex-start" gap={2}>
        <Sports/>
        <Gadgets/>
      </VStack>

      <VStack align="flex-start" gap={2}>
        <Indian_Festive/>
        <BottomWear/>
      </VStack>

    </HStack>
  );
};

export default MenItems;



const Topwear = () => {
  const data = {
    category: "Topwear",
    subCategories: [
        {lebel: "T-Shirts", href: "",},
        {lebel: "Casual Shirts", href: "",},
        {lebel: "Formal Shirts", href: "",},
        {lebel: "Sweetshirts", href: "",},
        {lebel: "Sweaters", href: "",},
        {lebel: "Jackets", href: "",},
        {lebel: "Blazers & Coats", href: "",},
        {lebel: "Suits", href: "",},
        {lebel: "Ran Jackets", href: "",},
    ],
  };

  return (
    <ListRender data={data}/>
  );
};

const Indian_Festive = () => {
  const data = {
    category: "Indian & Festive Wear",
    subCategories: [
        {lebel: "Kurtas & Kurta Sets", href: "",},
        {lebel: "Sherwanis", href: "",},
        {lebel: "Nehru Jackets", href: "",},
        {lebel: "Dhotis", href: "",},
    ],
  };

  return (
    <ListRender data={data}/>
  );
};

const BottomWear = () => {
  const data = {
    category: "Bottomwear",
    subCategories: [
      {lebel: "Jeans", href: "",},
      {lebel: "Casual Trousers", href: "",},
      {lebel: "Formal Trousers", href: "",},
      {lebel: "Shorts", href: "",},
      {lebel: "Track Pants & Joggers", href: "",},
      
    ],
  }

  return (
   <ListRender data={data}/>
  );
};

const Innerwear = () => {
  const data = {
    category: "Innerwear & Sleepwear",
    subCategories: [
      {lebel: "Briefs & Trunks", href: "",},      
      {lebel: "Boxers", href: "",},      
      {lebel: "Vests", href: "",},      
      {lebel: "Sleepwear & Loungewear", href: "",},      
      {lebel: "Thermal", href: "",},      
    ],
  }

  return (
   <ListRender data={data}/>
  );
};
const FootWear = () => {
  const data = {
    category: "Footwear",
    subCategories: [
      {lebel: "Casual Shoes", href: "",},
      {lebel: "Sports Shoes", href: "",},
      {lebel: "Formal Shoes", href: "",},
      {lebel: "Sneakers", href: "",},
      {lebel: "Sandals & Floaters", href: "",},
      {lebel: "Flip Flops", href: "",},
      {lebel: "Socks", href: "",},
    ],
  }

  return (
   <ListRender data={data}/>
  );
};

const Sports = () => {
  const data = {
    category: "Sports & Active Wear",
    subCategories: [
      {lebel: "Sports Shoes", href: "",},     
      {lebel: "Sports Sandals", href: "",},     
      {lebel: "Active T-Shirts", href: "",},     
      {lebel: "Track Pants & Shorts", href: "",},     
      {lebel: "Tracksuits", href: "",},     
      {lebel: "Jackets & Sweetshirts", href: "",},     
      {lebel: "Sports Accessories", href: "",},     
      {lebel: "Swimwear", href: "",},     
    ],
  }

  return (
   <ListRender data={data}/>
  );
};

const Gadgets = () => {
  const data = {
    category: "Gadgets",
    subCategories: [
      {lebel: "Smart Wearables", href: "",},        
      {lebel: "Fitness Gadgets", href: "",},        
      {lebel: "Headphones", href: "",},        
      {lebel: "Speakers", href: "",},        
    ],
  }

  return (
   <ListRender data={data}/>
  );
};

const Fashion = () => {
  const data = {
    category: "Fashion Accessories",
    subCategories: [
      {lebel: "Wallets", href: "",},        
      {lebel: "Belts", href: "",},        
      {lebel: "Perfumes & Body Mists", href: "",},        
      {lebel: "Trimmers", href: "",},        
      {lebel: "Deodorants", href: "",},        
      {lebel: "Ties, Cufflinks & Pocket Squares", href: "",},        
      {lebel: "Accessory Gift Sets", href: "",},        
      {lebel: "Caps & Hats", href: "",},        
      {lebel: "Mufflers, Scarves & Gloves", href: "",},        
      {lebel: "Phone Cases", href: "",},        
      {lebel: "Rings & Wristwear", href: "",},        
      {lebel: "Helmets", href: "",},        
    ],
  }

  return (
   <ListRender data={data}/>
  );
};





const ListRender = ({data})=>{
return (
    <VStack justify={"flex-start"} align={"flex-start"}>
    <Heading color={"pink.600"} textAlign={"left"} size={"sm"}>{data.category}</Heading>
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


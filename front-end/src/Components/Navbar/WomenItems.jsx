import {
    Box,
    Heading,
    HStack,
    ListItem,
    UnorderedList,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  
  const WomenItems = () => {
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
  
  export default WomenItems;
  
  
  
  const IndianWear = () => {
    const data = {
      category: "Indian & Fashion Wear",
      subCategories: [
          {lebel: "Kurtas & Suits", href: "",},
          {lebel: "Kurtas, Tunics & Tops ", href: "",},
          {lebel: "Sarees ", href: "",},
          {lebel: "Ethnic Wears ", href: "",},
          {lebel: "Leggings, Salwars & Churidars ", href: "",},
          {lebel: "Skirts & Palazzos ", href: "",},
          {lebel: "Dress Materials ", href: "",},
          {lebel: "Lehenga Cholis ", href: "",},
          {lebel: "Dupattas & Shawls ", href: "",},
          {lebel: "Jackets ", href: "",},
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
          {lebel: "Dress", href: "",},
          {lebel: "Tops", href: "",},
          {lebel: "Tshirts", href: "",},
          {lebel: "Jeans", href: "",},
          {lebel: "Trousers & Capris", href: "",},
          {lebel: "Shorts & Skirts", href: "",},
          {lebel: "Co0ords", href: "",},
          {lebel: "Plasuits", href: "",},
          {lebel: "Jumpsuits", href: "",},
          {lebel: "Shrugs", href: "",},
          {lebel: "Sweaters & Sweatshirts", href: "",},
          {lebel: "Jackets & Coats", href: "",},
          {lebel: "Blazers & Waistcoats", href: "",},
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
        {lebel: "Flats", href: "",},
        {lebel: "Casuals", href: "",},
        {lebel: "Heels", href: "",},
        {lebel: "Boots", href: "",},
        {lebel: "Sports Shoes & Floaters", href: "",},
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
        {lebel: "Chothing", href: "",},      
        {lebel: "Footwear", href: "",},      
        {lebel: "Sports Accessories", href: "",},      
        {lebel: "Sports Equipment", href: "",},      
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
        {lebel: "Bra", href: "",},
        {lebel: "Briefs", href: "",},
        {lebel: "Shapewear", href: "",},
        {lebel: "Sleepwear & Loungewear", href: "",},
        {lebel: "Swimwear", href: "",},
        {lebel: "Camisoles & Thermals", href: "",},
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
        {lebel: "Makeup", href: "",},     
        {lebel: "Skincare", href: "",},     
        {lebel: "Premium Beauty", href: "",},     
        {lebel: "Lipsticks", href: "",},     
        {lebel: "Fragrances", href: "",},     
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
  
  const Jewellery = () => {
    const data = {
      category: "Jewellery",
      subCategories: [
        {lebel: "Fashion Jewellery", href: "",},     
        {lebel: "Fine Jewellery", href: "",},     
        {lebel: "Earrings", href: "",},     
        ],
    }
  
    return (
     <ListRender data={data}/>
    );
  };

  const ListRender = ({data})=>{
  return (
      <VStack justify={"flex-start"} align={"flex-start"}>
      <Heading color={"pink.300"} textAlign={"left"} size={"sm"}>{data.category}</Heading>
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
  
  
import {
    Box,
    Heading,
    HStack,
    ListItem,
    UnorderedList,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  
  const KidsItems = () => {
    return (
      <HStack 
      p={3}
      align
      width={"100vw"}
      justify={'space-between'}
      >
       
        <VStack align="flex-start" gap={2}>
          <BoysClothings/>
        </VStack>
  
        <VStack align="flex-start" gap={2}>
          <GirlsClothing/>
        </VStack>
  
        <VStack align="flex-start" gap={2}>
          <Footwear/>
          <Toys/>
        </VStack>
  
        <VStack align="flex-start" gap={2}>
          <Infants/>
        </VStack>
  
        <VStack align="flex-start" gap={2}>
          <KidsAccessories/>
          <Brands/>
        </VStack>
  
      </HStack>
    );
  };
  
  export default KidsItems;
  
  
  
  const BoysClothings = () => {
    const data = {
      category: "Boys Clothing",
      subCategories: [
          {lebel: "T-Shirts", href: "",},
          {lebel: "Shirts", href: "",},
          {lebel: "Shorts", href: "",},
          {lebel: "Jeans", href: "",},
          {lebel: "Trousers", href: "",},
          {lebel: "Clothing Sets", href: "",},
          {lebel: "Ethnic Wear", href: "",},
          {lebel: "Track Pants & Pyjamas", href: "",},
          {lebel: "Jacket, Sweater & Sweatshirts", href: "",},
          {lebel: "Party Wear", href: "",},
          {lebel: "Innerwear & Thermals", href: "",},
          {lebel: "Nightwear & Loungewear", href: "",},
          {lebel: "Value Packs", href: "",},
      ],
    };
  
    return (
      <ListRender data={data}/>
    );
  };
  
  const GirlsClothing = () => {
    const data = {
      category: "Girls Clothing",
      subCategories: [
          {lebel: "Dresses", href: "",},
          {lebel: "Tops", href: "",},
          {lebel: "Tshirts", href: "",},
          {lebel: "Clothing Sets", href: "",},
          {lebel: "Lehenga choli", href: "",},
          {lebel: "Kurta Sets", href: "",},
          {lebel: "Party wear", href: "",},
          {lebel: "Dungarees & Jumpsuits", href: "",},
          {lebel: "Skirts & shorts", href: "",},
          {lebel: "Tights & shorts", href: "",},
          {lebel: "Jeans, Trousers & Capris", href: "",},
          {lebel: "Jacket, Sweaters & Sweatshirts", href: "",},
          {lebel: "Innerwear & Loungewear", href: "",},
          {lebel: "Value Packs", href: "",},
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
          {lebel: "Casuals", href: "",},
          {lebel: "Flipflops", href: "",},
          {lebel: "Sports Shoes", href: "",},
        {lebel: "Flats", href: "",},
        {lebel: "Sandals", href: "",},
        {lebel: "Heels", href: "",},
        {lebel: "School Shoes", href: "",},
        {lebel: "Socks", href: "",},
      ],
    }
  
    return (
     <ListRender data={data}/>
    );
  };

  const Toys = () => {
    const data = {
      category: "Footwear",
      subCategories: [
          {lebel: "Learning & Development", href: "",},
          {lebel: "Activity Toys", href: "",},
          {lebel: "Soft Toys", href: "",},
          {lebel: "Action Figure / Play set", href: "",},
      ],
    }
  
    return (
     <ListRender data={data}/>
    );
  };
  
  const Infants = () => {
    const data = {
      category: "Infants",
      subCategories: [
        {lebel: "Bodysuits", href: "",},      
        {lebel: "Rompers & Sleepsuits", href: "",},      
        {lebel: "Clothing Sets", href: "",},      
        {lebel: "Tshirts & Tops", href: "",},      
        {lebel: "Dresses", href: "",},      
        {lebel: "Bottom wear", href: "",},      
        {lebel: "Winter wear", href: "",},      
        {lebel: "Innerwear & Sleepwear", href: "",},      
        {lebel: "Infant Care", href: "",},      
       ],
    }
  
    return (
     <ListRender data={data}/>
    );
  };
  const KidsAccessories = () => {
    const data = {
      category: "Kids Accessories",
      subCategories: [
        {lebel: "Bags & Backpacks", href: "",},
        {lebel: "Watches", href: "",},
        {lebel: "Jewellery & Hair accessory", href: "",},
        {lebel: "Sunglasses", href: "",},
        {lebel: "Mask & Protective Gears", href: "",},
        {lebel: "Caps & Hats", href: "",},
       ],
    }
  
    return (
     <ListRender data={data}/>
    );
  };
  
  const Brands = () => {
    const data = {
      category: "Brands",
      subCategories: [
        {lebel: "H&M", href: "",},     
        {lebel: "Max Kids", href: "",},     
        {lebel: "Pantaloons", href: "",},     
        {lebel: "United Colors Of Benetton Kids", href: "",},     
        {lebel: "YK", href: "",},     
        {lebel: "U.S. Polo Assn. Kids", href: "",},     
        {lebel: "Mothercare", href: "",},     
        {lebel: "HRX", href: "",},     
       ],
    }
  
    return (
     <ListRender data={data}/>
    );
  };
  

  const ListRender = ({data})=>{
  return (
      <VStack justify={"flex-start"} align={"flex-start"}>
      <Heading color={"yellow.600"} textAlign={"left"} size={"sm"}>{data.category}</Heading>
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
  
  
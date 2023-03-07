import { Box, Heading, HStack, Image, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Review from "./Review";

const Reviews = () => {
  const reveiws = [
    {
      rating: 5,
      user: "Ashwani Kadyan",
      date: "2 Mar 2022",
      review: "Great product for its price. Slightly loose from waste and sleeves but overall a good product. Also the colour is slightly different from the images. In reality the colour is lighter and cooler shade of grey. Nice for summers.",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
      ],
    },
    {
      rating: 2,
      user: "Prashant Bhushan",
      date: "5 Dec 2000",
      review: "Great product for its price. Slightly loose from waste and sleeves but overall a good product. Also the colour is slightly different from the images. In reality the colour is lighter and cooler shade of grey. Nice for summers.",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
      ],
    },
    {
      rating: 4,
      user: "Ashwani Kadyan",
      date: "2 Mar 2022",
      review: "Great product for its price. Slightly loose from waste and sleeves but overall a good product. Also the colour is slightly different from the images. In reality the colour is lighter and cooler shade of grey. Nice for summers.",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
      ],
    },
  
  ];
const images = []
reveiws.length>0 && reveiws.forEach((el)=> el.images.forEach((el)=> images.push(el)))

  return (
    <Box>
      <Box
        textAlign="left"
        display="flex"
        alignItems="flex-start"
        gap="10px"
        flexDirection="column"
      >
        <Heading size="sm">Customer Photos (119)</Heading>
        <HStack>
          {reveiws.length > 0 &&
            images.map((image, idx) =>
              idx < 5 ? <Image src={image} w="50px" key={idx} /> : null
            )}
            <Text textDecoration="underline" cursor="pointer">+ {images.length - 5} more images</Text>
        </HStack>
      </Box>

      <Box mt="25px" textAlign="left">
        <Heading size="sm" m="10px 0px">
          Customer Reviews (1264)
        </Heading>
        <VStack alignItems="flex-start" gap="10px">
          {reveiws.map((el, idx) => (
            <Review el={el} key={idx}/>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Reviews;



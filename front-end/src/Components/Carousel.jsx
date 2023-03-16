import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React,{useState, useEffect} from 'react'

const Carousel = ({slides}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <Flex
    mt='50px'
    h="300px"
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      alignItems="center"
      justifyContent="center"
      mb={"100px"}
      
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="100%" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {/* {sid + 1} / {slidesCount} */}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
                h="100%"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Carousel

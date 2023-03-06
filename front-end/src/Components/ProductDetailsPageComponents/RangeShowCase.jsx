import { Box, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const RangeShowCase = () => {
    let arr = [{rating:1, count: 100}, {rating:2, count: 500}, {rating:3, count: 250}, {rating:4, count: 700}, {rating:5, count: 1300}]
    let total = arr.reduce((cc,el,i)=> cc+el.count, 0)
  return (
   <Box>
     {
        arr.reverse().map((el,i)=>(
          <Flex alignItems="center" gap="7px" fontSize="14px" color="#a9abb3" key={i}>
          {el.rating} <AiFillStar />
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={[0, el.count]}
            colorScheme={el.count> total/2 ? "teal" : el.count>total/4 ? "green" : el.count>total/6 ? "blue" : "red"}
            max= {total}
            w="150px"
            isDisabled={true}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
          </RangeSlider>
          {el.count}
        </Flex>
        ))
       }
   </Box>
  )
}

export default RangeShowCase

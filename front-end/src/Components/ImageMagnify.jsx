import { Box } from '@chakra-ui/react';
import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

const ImageMagnify = ({image_src}) => {
   
  return (
    <Box w='300px' h='350px' zIndex={1}>
      <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: image_src
    },
    largeImage: {
        src: image_src,
        width: 800,
        height: 900
    },
    isHintEnabled: true,
    enlargedImageContainerDimensions : {width: '150%', height: '150%'}
}} />
    </Box>
  )
}

export default ImageMagnify

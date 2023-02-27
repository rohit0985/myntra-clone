import { VStack  } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from '../DesktopNav'




const Navbar = () => {
  
  return (
   <VStack 
    position={"sticky"}
    top={'0px'}
    zIndex={1}
    boxShadow= {`rgba(149, 157, 165, 0.2) 0px 8px 24px`}
   >
<WithSubnavigation/>
   </VStack>
  )
}

export default Navbar
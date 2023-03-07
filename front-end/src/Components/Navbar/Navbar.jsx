import { VStack  } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from '../DesktopNav'




const Navbar = () => {
  
  return (
   <VStack 
   
    boxShadow= {`rgba(149, 157, 165, 0.2) 0px 8px 24px`}
    zIndex={100}
    position={"sticky"}
    top={'0px'}
   >
<WithSubnavigation/>
   </VStack>
  )
}

export default Navbar
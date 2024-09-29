import { Box } from '@chakra-ui/react'
import React, { Children } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

type Props = {
    children?: any
}

const layout = (props: Props) => {
  return (
    <Box
    h="100vh"
    minW="100vw"
    >
         <Header />
         <Box
         px="4"
         >
        {props.children}
         </Box>
         <Footer/>
    </Box>
  )
}

export default layout
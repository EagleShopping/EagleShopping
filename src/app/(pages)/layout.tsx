import { Box } from '@chakra-ui/react'
import React, { Children } from 'react'
import Header from './components/Header'

type Props = {
    children?: any
}

const layout = (props: Props) => {
  return (
    <Box>
         <Header />
         <Box
         px={{base: '20px', md: '75px'}}
         >
        {props.children}
         </Box>
    </Box>
  )
}

export default layout
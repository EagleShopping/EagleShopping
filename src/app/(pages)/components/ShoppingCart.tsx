import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ShoppingCartIcon } from '@/utils/icons'

const ShoppingCart = () => {
  return (
    <Flex>
        <ShoppingCartIcon />
        <Box
        bg="gray.900"
        borderRadius="50%"
        height="34px"
        width="34px"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="medium"
        >
            0
        </Box>
    </Flex>
  )
}

export default ShoppingCart
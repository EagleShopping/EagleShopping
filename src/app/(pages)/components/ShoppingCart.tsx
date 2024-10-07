"use client"

import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ShoppingCartIcon } from '@/utils/icons'
import CartExebition from './CartExebition'
import { useSelector } from 'react-redux'
import { selectProductsCount } from '@/redux/products/cartSelection'
const ShoppingCart = () => {

  const productCounter = useSelector(selectProductsCount)

  return (
    <Flex
    position="relative"
    >
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
            {productCounter}
        </Box>
        <CartExebition />
    </Flex>
  )
}

export default ShoppingCart
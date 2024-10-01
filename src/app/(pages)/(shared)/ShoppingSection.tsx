"use client"

import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CategoryShop from './CategoryShop'
import { AllProductsMock } from '@/mockdata'
import CategoryPhotos from './CategoryPhotos'

type Props = {}

const ShoppingSection = (props: Props) => {

    const [selectCategory,SetselectCategory] = useState<string>('todos')

  return (
    <Box
    mb="20px"
    >
        <Text
            fontSize={{base:'28px', md: '30px', lg: '35px'}}
                fontWeight='bold'
            >
                Shop
            </Text>
        <CategoryShop selectCategory={selectCategory} />

        {AllProductsMock.map((products) => (
           <CategoryPhotos products={products} />
        ))}
    </Box>
  )
}

export default ShoppingSection
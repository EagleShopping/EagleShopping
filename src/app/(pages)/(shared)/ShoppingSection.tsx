"use client"

import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
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

        <Flex 
        my="20px"
        gap={{base: '10px', md: '20px', lg: '30px'}}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
       >
        {AllProductsMock.map((products) => (
           <CategoryPhotos 
           products={products} 
           onBuyProduct={(Product) => console.log(Product)}
           key={products.id}
           />
          ))}
          </Flex>
    </Box>
  )
}

export default ShoppingSection
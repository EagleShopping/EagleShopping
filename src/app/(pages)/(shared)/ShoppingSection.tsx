"use client"

import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CategoryShop from './CategoryShop'
import CategoryPhotos from './CategoryPhotos'
import { useShopping } from './hooks/useShopping'

type Props = {}

const ShoppingSection = (props: Props) => {
    const { selectCategory, SetselectCategory, products, isLoading, error } = useShopping()

    return (
      <Box mb="20px">
        <Text fontSize={{ base: '28px', md: '30px', lg: '35px' }} fontWeight='bold'>
          Shop
        </Text>
      
        <CategoryShop selectCategory={selectCategory} SetselectCategory={(category) => SetselectCategory(category)} />

        <Flex 
          my="20px"
          gap={{ base: '10px', md: '20px', lg: '30px' }}       
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {Array.isArray(products) && products.map((product) => (
            <CategoryPhotos 
              products={product} 
              onBuyProduct={(Product) => console.log(Product)}
              onViewProduct={(Product) => console.log(Product)}
              key={product.id}
            />
          ))}
          {isLoading && <Spinner></Spinner>}
          {error && <Text>Erro ao carregar os produtos</Text>}
        </Flex>
      </Box>
    )
}

export default ShoppingSection
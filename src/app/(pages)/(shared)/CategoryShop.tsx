import { Box, Flex, background } from '@chakra-ui/react'
import React from 'react'
import { AllcategoryMock } from '@/mockdata'
import { useShopping } from './hooks/useShopping'

type CategoryShop = {
selectCategory: string
}

const CategoryShop = ({selectCategory}: CategoryShop) => {

  const {categoryActual} = useShopping()

  return (
    <Flex
    w="100%"
    justifyContent="center"
    alignItems="center"
    gap="23px"
    padding="20px"
    borderRadius="24px"
    border="1px solid"
    borderColor="gray.900"
    overflowX="auto"
    >
        {AllcategoryMock.map((category) => (
            <Box 
            padding="4px"
            border="1px solid"
            borderColor={categoryActual(category.name,selectCategory) ? 'transparent' : 'gray.900'}
            minW="123px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="24px"
            cursor="pointer"
            _hover={
                {
                background:"gray.400",
                border:"none"
                }
            }
            bg={categoryActual(category.name,selectCategory)  ? 'gray.300' : 'transparent'}
            key={category.id}
            > 
                {category.name}
            </Box>
        ))}

    </Flex>
  )
}

export default CategoryShop
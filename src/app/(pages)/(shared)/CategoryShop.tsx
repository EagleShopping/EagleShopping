import { Box, Flex, background } from '@chakra-ui/react'
import React from 'react'
import { AllCategory } from '@/mockdata'

type CategoryShop = {

}

const CategoryShop = (props: CategoryShop) => {

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
    >
        {AllCategory.map((category) => (
            <Box 
            padding="4px"
            border="1px solid"
            borderColor="gray.900"
            minW="123px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="24px"
            cursor="pointer"
            _hover={
                {
                background:"gray.300",
                border:"none"
                }
            }
            key={category.id}
            > 
                {category.name}
            </Box>
        ))}

    </Flex>
  )
}

export default CategoryShop
import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { ArrowDownIcon, LogoIcon } from '@/utils/icons'
import ShoppingCart from './ShoppingCart'

type Props = {}

const Header = (props: Props) => {
  return (
    <Box 
    as="header"
    h="120px"
    p="2"
    >
        <Box 
        border="1px solid"
        borderColor="black.300"
        borderRadius="53px"
        p="2"
        px="3em"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        >
            <Flex
            gap="2"
            justifyContent="center"
            alignItems="center"
            >

              <LogoIcon />

               <Text
               fontWeight="bold"
               >EAGLESHOP</Text>
            </Flex>       
            <Flex
            as='ul'
            justifyContent="center"
            alignItems="center"
            gap="8"
            >
               
               <Flex
               as="li"
               gap="4"
                cursor="pointer"
                fontWeight="500"
                display={{base: 'none', md: 'flex'}}
               >
                 <Text>Entrar</Text>
                 <Text
                 display="flex"
                 justifyContent="center"
                 alignItems="center"
                 gap="1"  
                 >
                    Shop
                    <ArrowDownIcon />
                 </Text>
                 <Text>Sobre nós</Text>
               </Flex>

                <ShoppingCart />
            
            </Flex>     
        </Box>
    </Box>
  )
}

export default Header
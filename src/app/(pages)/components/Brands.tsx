import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Brands(){

    const sizeBrands = 60
    
    return (
        <Box>
            <Text
            fontSize={{base:'28px', md: '30px', lg: '35px'}}
                fontWeight='bold'
            >
                Marcas
            </Text>

            <Flex
            height='7em'
            as='ul'
            mt={10}
            gap={73}
           
            >
                <Box  as="li" listStyleType='none'>
                    <Image width={sizeBrands} height={sizeBrands} src={'/images/Brands/Brands_Ferrari.svg'} alt="Brands_Ferrari"/>
                </Box>

                <Box  as="li" listStyleType='none'>
                    <Image width={sizeBrands} height={sizeBrands} src={'/images/Brands/Brands_Heineken.svg'} alt="Brands_Heineken"/>
                </Box>

                <Box  as="li" listStyleType='none'>
                    <Image width={sizeBrands} height={sizeBrands} src={'/images/Brands/Brands_Apple.svg'} alt="Brands_Apple"/>
                </Box>

                <Box  as="li" listStyleType='none'>
                    <Image width={sizeBrands} height={sizeBrands} src={'/images/Brands/Brands_Airbnb.svg'} alt="Brands_Airbnb"/>
                </Box>
            </Flex>
        </Box>
    )
}
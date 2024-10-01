import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

const ShowCaseHome = () => {
  return (
    <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    gap="2em"
    py="2em"
    >

    <Badge
    variant="outline"
    fontSize={{base:'12px', md: '14px'}}
    p="4px"
    px="10px"
    borderRadius="24px"
    >
      EAGLE CLUB
    </Badge>
    <Heading
    display="flex"
    alignItems="center"
    flexDirection="column"
    fontSize={{base: '28px', md: '34px', lg: '40px'}}
    textAlign="center"
    >
    Eleve Seu Jogo <Text as='span'> Atingindo Novas Altitudes no Golfe </Text>
    </Heading>
    <Box
     position="relative"
     width='100%'
     height={{base: '340px', md:'450px'}}
     borderRadius="24px"
    >
    <Box
        position='absolute'
        width='156px'
        height='156px'
        borderRadius="24px"
        top="-4em" 
        left="0"
        zIndex={1}
        >
     <Image
    src={'/images/ball.png'} 
    fill 
    style={{objectFit: 'cover'}} 
    alt="playing golf"
    />  
    </Box>
    
    <Box
    position='relative'
    width='100%'
    height={{base: '340px', md:'450px'}}
    borderRadius="24px"
    overflow="hidden"
    >
    <Image
    src={'/images/background.png'} 
    fill 
    style={{objectFit: 'cover'}} 
    alt="playing golf"
    />  
    </Box>
    </Box>
    <Text
    fontWeight="light"
    fontSize={{base: '18px', md: '24px', lg: '28px'}}
    >
    Descubra a Essência do Golfe com Equipamentos de Alta Performance.
    </Text>
    </Flex>
  )
}

export default ShowCaseHome
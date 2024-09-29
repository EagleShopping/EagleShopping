import { BlueskyLogo, FacebookIcon, InstagramIcon, LogoIcon, TwitterIcon } from '@/utils/icons'
import { Box, Flex, Text } from '@chakra-ui/react'


type FooterProps = {}


export default function Footer(props: FooterProps){
    return(
        <Box
        display='flex'
        as='footer'
        boxShadow="-4px -4px 10px rgba(0, 0, 0, 0.1)"
        w='full'
        h='115px'
        >
            <Box
            as='ul'
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            px='90px'
            w='full'
            
            >
                <Flex
                as='li'
                gap='2'
                alignItems='center'
                >
                    <LogoIcon/>
                    <Text
                    fontWeight="bold"
                    >EAGLESHOP</Text>
                </Flex>


                <Flex
                as='li'
                width={'full'}
                display='flex'
                justifyContent={{base: 'end', md: 'center'}}
                
                >
                    <Flex 
                    fontSize={{base: '1.5em', md: '2em'}}
                    gap={{base: 3}}
                    >
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <InstagramIcon/>
                        <BlueskyLogo/>
                    </Flex>
                    
                </Flex>

                <Flex
                display={{base: 'none', md: 'flex'}}
                as='li'
                gap={5}
                
                >
                    <Text _hover={{color: 'gray'}} cursor='pointer'>
                        Sobre
                    </Text>

                    <Text _hover={{color: 'gray'}} cursor='pointer'>
                        Suporte
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}
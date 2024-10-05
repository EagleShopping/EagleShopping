import { Iproducts } from "@/interface/Iproducts";
import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useShopping } from "./hooks/useShopping";
import { convertNumberToCurrency } from "@/utils/utils";

type IcategoryPhotos = {
  products: Iproducts & { rating: number };
  onBuyProduct: (products: Iproducts) => void;
  onViewProduct: (productsId: string) => void;
};

const CategoryPhotos = ({ products, onBuyProduct, onViewProduct }: IcategoryPhotos) => {

  const { ratingShopping } = useShopping();

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      width={{base:"300px", md: "250px"}}
      minHeight="460px"
      p="10px"
      bg="gray.100"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
      gap="2px"
      maxW="350px"
      flex={{ base: "column", md: "1" }}
    >

        <Box 
        position="relative" 
        width="100%" 
        height="250px" 
        borderRadius="10px"
        bg="white"
        _hover={{
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        }}
        cursor="pointer"
        onClick={() => onViewProduct(products.id.toString())}
        >
          <Image src={products.imagePreview} fill style={{objectFit: 'contain'}} alt={products.name} />
        </Box>

        <Box>
          <Heading 
          cursor="pointer"
          color="gray.800"
          _hover={{
            color: "blue.500",
          }}
          fontSize="16px"
          >{
          products.name}
          </Heading>
        </Box>

        <Box>
          <Text 
          fontWeight="bold"
          fontSize="18px"
          color="green.500"
          onClick={() => onViewProduct(products.id.toString())}
           >
            {convertNumberToCurrency(products.preco)}
          </Text>
        </Box>

        <Box>

          <Flex
          justifyContent="start"
          alignItems="center"
          gap="10px"
          >
          <HStack 
          spacing={1} 
          mt={2}
          >
            {ratingShopping(products.rating).map((rating, index) => (
              <Box 
              key={index} 
              fontSize="20px"
              color={rating.rating}
              >
                {rating.svg}
              </Box>
            ))}
          </HStack>
          <Text
          fontSize="14px"
          fontWeight="medium"
          color="gray.500"
          >
          {products.rating} de 5
          </Text>
            </Flex>

        </Box>
        
      <Button 
      variant="outline" 
      colorScheme="blue"
      onClick={() => onBuyProduct(products)}
      >
        Adicionar ao carrinho
      </Button>
    </Flex>
  );
};
export default CategoryPhotos;

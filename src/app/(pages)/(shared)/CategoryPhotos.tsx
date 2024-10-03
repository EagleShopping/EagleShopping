import { Iproducts } from "@/interface/Iproducts";
import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useShopping } from "./hooks/useShopping";
import { convertNumberToCurrency } from "@/utils/utils";

type IcategoryPhotos = {
  products: Iproducts & { rating: number };
  onBuyProduct: (products: Iproducts) => void;
};

const CategoryPhotos = ({ products, onBuyProduct }: IcategoryPhotos) => {
  const { ratingShopping } = useShopping();
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      width="250px"
      minHeight="460px"
      p="10px"
      bg="gray.100"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
      gap="2px"
    >

        <Box 
        position="relative" 
        width="100%" 
        height="250px" 
        borderRadius="10px"
        bg="white"
        >
          <Image src={products.imagePreview} fill style={{objectFit: 'contain'}} alt={products.name} />
        </Box>

        <Box>
          <Heading 
          fontSize="20px"
          >{
          products.name}
          </Heading>
        </Box>

        <Box>
          <Text 
          fontWeight="bold"
           fontSize="18px"
           >
            {convertNumberToCurrency(products.preco)} R$
          </Text>
        </Box>

        <Box>
          Avaliação
          <HStack 
          spacing={1} 
          mt={2}
          >
            {ratingShopping(products.rating).map((rating, index) => (
              <Box 
              key={index} 
              color={rating.rating}
              >
                {rating.svg}
              </Box>
            ))}
          </HStack>
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

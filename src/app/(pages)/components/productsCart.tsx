import { Iproducts } from "@/interface/Iproducts";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { RootState } from "@/redux/root-reduces";
import { useSelector, useDispatch } from "react-redux";
import { convertNumberToCurrency } from "@/utils/utils";
import { decreaseProducts, increaseProducts, removeProducts} from "@/redux/products/slice";

const ProductsCart = () => {
  const reduxProducts = useSelector(
    (state: RootState) => state.products.products
  ) as Iproducts[];

  const dispatch = useDispatch();

  return (
    <Flex flexDirection="column" alignItems="center" gap="20px" pb="2em">
      {Array.isArray(reduxProducts) && reduxProducts.length > 0 ? (
        reduxProducts.map((product) => (
          <Flex
            justifyContent="space-between"
            gap="40px"
            key={product.id}
            width="300px"
            position="relative"
            bg="gray.50"
            p="2px"
            borderRadius="4px "
          >
            <Button
              size="sm"
              position="absolute"
              right="0"
              color="red.400"
              variant="outline"
              border="none"
             onClick={() => dispatch(removeProducts({ id: product.id }))}
            >
              X
            </Button>
            <Box
              width="150px"
              height="140px"
              position="relative"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="20px"
              bg="white"
            >
              <Image
                src={product.imagePreview}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              pt="1em"
              gap="10px"
            >
              <Heading fontSize="18px">{product.name}</Heading>
              <Text fontWeight="medium" color="green.500" fontSize="18px">
                {convertNumberToCurrency(product.preco)}
              </Text>
              <Flex gap="10px">
                <Button
                  variant="outline"
                  borderRadius="50%"
                  width="32px"
                  height="32px"
                  bg="black"
                  color="white"
                  _hover={{ color: "black", background: "white" }}
                  onClick={() => dispatch(decreaseProducts({ id: product.id }))}
                >
                  -
                </Button>
                <Box
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius="50px"
                  width="53px"
                  height="32px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize="18px" fontWeight="medium" color="gray.500">
                    {" "}
                    {product.quantity}
                  </Text>
                </Box>
                <Button
                  variant="outline"
                  borderRadius="50%"
                  width="32px"
                  height="32px"
                  bg="black"
                  color="white"
                  _hover={{ color: "black", background: "white" }}
                  onClick={() => dispatch(increaseProducts({ id: product.id }))}
                >
                  +
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ))
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </Flex>
  );
};

export default ProductsCart;

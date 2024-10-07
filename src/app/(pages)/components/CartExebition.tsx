"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import ProductsCart from "./productsCart";
import { useSelector } from "react-redux";
import { selectProductsTotalPrice, selectProductsCount } from "@/redux/products/cartSelection";
import { convertNumberToCurrency } from "@/utils/utils";

type Props = {};

const CartExebition = (props: Props) => {
  const totalPrice = useSelector(selectProductsTotalPrice)
  const totalItem = useSelector(selectProductsCount)
  
  return (
    <Box position="fixed" zIndex={200}>
      <Menu>
        <MenuButton
          as={Button}
          bg="none"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
        >
          <CiMenuBurger />
        </MenuButton>
        <MenuList
          display="flex"
          flexDirection="column"
          width="361px"
          height="100vh"
          gap="4"
          p="4"
        >
          <Heading fontSize="20px">Carrinho ({totalItem})</Heading>
          <hr />
          <Box
          overflow="auto"
          height="300px"
          >
          <ProductsCart />
          </Box>
          <hr />
          <Flex
          justifyContent="space-between"
          fontWeight="bold"
          fontSize="18px"
          color="gray.700"
          >
          <Text>Total</Text>
          <Text>
          {convertNumberToCurrency(totalPrice)}
          </Text>
          </Flex>
          <Button
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black", border: "1px solid black" }}
          >
            Finalizar compra
          </Button>
        </MenuList>
      </Menu>
    </Box>
  );
};
export default CartExebition;

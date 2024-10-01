import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";

const ButtonHamburguer = () => {
  return (
    <Box display={{ base: "block", md: "none" }}>
      <Menu>
        <MenuButton
          as={Button}
          bg="none"
          border="1px solid"
          borderColor="gray.700"
        >
          <CiMenuBurger />
        </MenuButton>
        <MenuList
          display="flex"
          flexDirection="column"
          width="30vw"
          height="100vh"
          gap="4"
        >
          <MenuItem>Home</MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem>About us</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ButtonHamburguer;

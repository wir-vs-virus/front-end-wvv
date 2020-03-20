import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Link
} from "@chakra-ui/core";

import { AuthContext } from "../context/Auth";

const MenuItems = ({ children, to }: { children: string; to: string }) => (
  //@ts-ignore
  <Link as={RouterLink} to={to}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
);

const Header = () => {
  // Menu
  const [showMenu, setMenu] = React.useState(false);
  const handleMenu = () => setMenu(!showMenu);

  const Auth = useContext(AuthContext);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.600"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          WVW
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleMenu}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: showMenu ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems to="/">Home</MenuItems>
        {Auth?.isLoggedIn && <MenuItems to="/privat">Privat</MenuItems>}
      </Box>

      <ButtonGroup
        display={{ base: showMenu ? "block" : "none", md: "block" }}
        mt={{ base: 10, md: 0 }}
      >
        {Auth?.isLoggedIn ? (
          //@ts-ignore
          <Link
            onClick={() => {
              Auth?.logout();
            }}
          >
            <Button bg="transparent" border="1px">
              Logout
            </Button>
          </Link>
        ) : (
          //@ts-ignore
          <Link as={RouterLink} to="/login">
            <Button bg="transparent" border="1px">
              Signup / Login
            </Button>
          </Link>
        )}
      </ButtonGroup>
    </Flex>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Stack,
  ButtonGroup
} from "@chakra-ui/core";

const MenuItems = ({ children, to }) => (
  <Link to={to}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.600"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          WVW
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
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
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems to="/">Home</MenuItems>
        <MenuItems to="/profile">Profile</MenuItems>
      </Box>

      <ButtonGroup
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 10, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
        <Button bg="transparent" border="1px">
          Login
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;

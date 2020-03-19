import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Text, Button, ButtonGroup } from "@chakra-ui/core";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from "@chakra-ui/core";

const MenuItems = ({ children, to }) => (
  <Link to={to}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
);

const Header = (props) => {
  // Menu
  const [showMenu, setMenu] = React.useState(false);
  const handleMenu = () => setMenu(!showMenu);

  // Modal Control
  const {
    isOpen: formIsOpen,
    onOpen: formOnOpen,
    onClose: formOnClose
  } = useDisclosure();

  // Signup or Login
  const [isSignup, setSignup] = React.useState(false);

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
        <MenuItems to="/profile">Profile</MenuItems>
      </Box>

      <ButtonGroup
        display={{ base: showMenu ? "block" : "none", md: "block" }}
        mt={{ base: 10, md: 0 }}
      >
        <Button
          bg="transparent"
          border="1px"
          onClick={() => {
            setSignup(true);
            formOnOpen();
          }}
        >
          Create account
        </Button>
        <Button
          bg="transparent"
          border="1px"
          onClick={() => {
            setSignup(false);
            formOnOpen();
          }}
        >
          Login
        </Button>
      </ButtonGroup>

      {/* Modal */}
      <FormModal
        isOpen={formIsOpen}
        onClose={formOnClose}
        isSignup={isSignup}
      />
    </Flex>
  );
};

export default Header;

const FormModal = ({ isOpen, onClose, isSignup }) => {
  const initialRef = React.useRef();

  let passwordRepeatInValid = false;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  if (isSignup) {
    passwordRepeatInValid = password !== password2;
  }

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isSignup ? "Create your account" : "Login"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>E-Mail</FormLabel>
            <Input
              ref={initialRef}
              placeholder="E-Mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {isSignup && (
            <FormControl mt={4}>
              <FormLabel>Repeat Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                value={password2}
                isInvalid={passwordRepeatInValid}
                errorBorderColor="red.300"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </FormControl>
          )}
        </ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3}>
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

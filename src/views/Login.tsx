import * as React from "react";

import { appName } from "../config";

import { Box, Heading } from "@chakra-ui/core";
import { Row } from "../components/Elements";
import { LoginOrSignUp } from "../components/LoginOrSignup";

const WrapperBox = ({ children }: { children: React.ReactNode }) => (
  <Box m="8" p="8" minWidth={{ base: "sm" }} shadow="md">
    {children}
  </Box>
);

export default function Login() {
  return (
    <>
      <Row mt={8}>
        <Heading>Welcome to {appName}</Heading>
      </Row>
      <Row>
        <WrapperBox>
          <Heading as="h2" pb="8">
            Signup
          </Heading>
          <LoginOrSignUp isSignUp={true} />
        </WrapperBox>
        <WrapperBox>
          <Heading as="h2" pb="8">
            Login
          </Heading>
          <LoginOrSignUp isSignUp={false} />
        </WrapperBox>
      </Row>
    </>
  );
}

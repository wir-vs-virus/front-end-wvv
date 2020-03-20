import * as React from "react";
import { Flex, FlexProps } from "@chakra-ui/core";

interface iRowProps extends FlexProps {
  children: React.ReactNode;
}

export const Row: React.FunctionComponent<iRowProps> = (props) => (
  <Flex {...props} justifyContent="center" maxWidth="80em" mx="auto" px="8">
    {props.children}
  </Flex>
);

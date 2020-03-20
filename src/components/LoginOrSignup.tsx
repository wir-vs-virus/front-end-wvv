import * as React from "react";

import { Redirect } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast
} from "@chakra-ui/core";

import { AuthContext } from "../context/Auth";
import { useAuthenticateUser, useRegisterUser } from "../client/fetcher";

export const LoginOrSignUp = ({ isSignUp }: { isSignUp: boolean }) => {
  const toast = useToast();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  let passwordRepeatInValid = false;
  if (isSignUp) {
    passwordRepeatInValid = password !== password2;
  }

  const Auth = React.useContext(AuthContext);
  const { mutate: login } = useAuthenticateUser({});
  const { mutate: signup } = useRegisterUser({});

  if (Auth?.isLoggedIn) return <Redirect to="/profile" />;

  const signUpLoginClickHandle = async () => {
    try {
      if (isSignUp) {
        await signup({ name, email, password });
        const _: unknown = await login({ email, password });
        const { accessToken } = _ as LoginSuccess;
        Auth?.setKey(accessToken);
      } else {
        const _: unknown = await login({ email, password });
        const { accessToken } = _ as LoginSuccess;
        Auth?.setKey(accessToken);
      }
    } catch (_) {
      const error = _ as LoginError;
      toast({
        title: isSignUp ? "Sign up Error" : "Login Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true
      });
    }
  };

  return (
    <>
      {isSignUp && (
        <InputWrap
          displayName="Name"
          type="text"
          value={name}
          setValue={setName}
        />
      )}
      <InputWrap
        displayName="E-Mail"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <InputWrap
        displayName="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />

      {isSignUp && (
        <InputWrap
          displayName="Password"
          type="password"
          value={password2}
          isInvalid={passwordRepeatInValid}
          setValue={setPassword2}
        />
      )}

      <Button my="8" onClick={signUpLoginClickHandle}>
        Send
      </Button>
    </>
  );
};

type FieldErrors = {
  field: string;
  defaultMessage: string;
};

type LoginError = {
  data: {
    errors?: [FieldErrors];
  };
  message: string;
  status: number;
};

type LoginSuccess = {
  accessToken: string;
  tokenType: "Bearer";
};

type InputWrapProps = {
  displayName: string;
  type: "text" | "email" | "password";
  value: string;
  isInvalid?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputWrap = ({
  displayName,
  type,
  value,
  setValue,
  isInvalid
}: InputWrapProps) => {
  return (
    <FormControl mt={4}>
      <FormLabel>{displayName}</FormLabel>
      <Input
        placeholder={displayName}
        type={type}
        value={value}
        isInvalid={isInvalid}
        errorBorderColor="red.300"
        onChange={(e: React.FormEvent<HTMLInputElement>): void =>
          setValue(e.currentTarget.value)
        }
      />
    </FormControl>
  );
};

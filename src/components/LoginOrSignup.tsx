import * as React from "react";

import { Redirect } from "react-router-dom";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

import { AuthContext } from "../context/Auth";
import { useAuthenticateUser, useRegisterUser } from "../client/fetcher";

type LoginOrSignUpProps = {
  isSignUp: boolean;
  initialRef?: React.RefObject<HTMLInputElement> | undefined;
};

export const LoginOrSignUp = (props: LoginOrSignUpProps) => {
  const { isSignUp, initialRef } = props;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  let passwordRepeatInValid = false;
  if (isSignUp) {
    passwordRepeatInValid = password !== password2;
  }

  const Auth = React.useContext(AuthContext);
  const setToken = ({ accessToken }: { accessToken: string }) =>
    Auth?.setKey(accessToken);
  const { mutate: login } = useAuthenticateUser({});
  const { mutate: signup } = useRegisterUser({});

  if (Auth?.isLoggedIn) return <Redirect to="/profile/me" />;

  return (
    <>
      {isSignUp && (
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            ref={initialRef}
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e: React.FormEvent<HTMLInputElement>): void =>
              setName(e.currentTarget.value)
            }
          />
        </FormControl>
      )}
      <FormControl mt={4}>
        <FormLabel>E-Mail</FormLabel>
        <Input
          placeholder="E-Mail"
          type="email"
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setEmail(e.currentTarget.value)
          }
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setPassword(e.currentTarget.value)
          }
        />
      </FormControl>
      {isSignUp && (
        <FormControl mt={4}>
          <FormLabel>Repeat Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            value={password2}
            isInvalid={passwordRepeatInValid}
            errorBorderColor="red.300"
            onChange={(e: React.FormEvent<HTMLInputElement>): void =>
              setPassword2(e.currentTarget.value)
            }
          />
        </FormControl>
      )}

      <Button
        my="8"
        onClick={() => {
          if (isSignUp) {
            const resp = signup({ name, email, password });

            //@ts-ignore
            resp.then(({ success }) => {
              if (success) {
                //@ts-ignore
                login({ email, password }).then(setToken);
              }
            });
          } else {
            const resp = login({ email, password });
            // TODO: Why does login return void?
            //@ts-ignore
            resp.then(setToken);
          }
        }}
      >
        Send
      </Button>
    </>
  );
};

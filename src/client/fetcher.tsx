/* Generated by restful-react */

import React from "react";
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from "restful-react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface GrantedAuthority {
  authority?: string;
}

export interface UserPrincipal {
  id?: number;
  password?: string;
  authorities?: GrantedAuthority[];
  attributes?: {
  [key: string]: {[key: string]: any};
};
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  username?: string;
  enabled?: boolean;
  name?: string;
}

export interface User {
  id?: number;
  name?: string;
  email?: string;
  provider: "FACEBOOK" | "GOOGLE" | "LOCAL";
  providerId?: string;
}

export type AuthenticateUserProps = Omit<MutateProps<void, unknown, void, LoginRequest>, "path" | "verb">;

export const AuthenticateUser = (props: AuthenticateUserProps) => (
  <Mutate<void, unknown, void, LoginRequest>
    verb="POST"
    path={`/auth/login`}
    {...props}
  />
);

export type UseAuthenticateUserProps = Omit<UseMutateProps<void, void, LoginRequest>, "path" | "verb">;

export const useAuthenticateUser = (props: UseAuthenticateUserProps) => useMutate<void, unknown, void, LoginRequest>("POST", `/auth/login`, props);


export type RegisterUserProps = Omit<MutateProps<void, unknown, void, SignUpRequest>, "path" | "verb">;

export const RegisterUser = (props: RegisterUserProps) => (
  <Mutate<void, unknown, void, SignUpRequest>
    verb="POST"
    path={`/auth/signup`}
    {...props}
  />
);

export type UseRegisterUserProps = Omit<UseMutateProps<void, void, SignUpRequest>, "path" | "verb">;

export const useRegisterUser = (props: UseRegisterUserProps) => useMutate<void, unknown, void, SignUpRequest>("POST", `/auth/signup`, props);


export interface GetCurrentUserQueryParams {
  userPrincipal: UserPrincipal;
}

export type GetCurrentUserProps = Omit<GetProps<void, unknown, GetCurrentUserQueryParams>, "path">;

export const GetCurrentUser = (props: GetCurrentUserProps) => (
  <Get<void, unknown, GetCurrentUserQueryParams>
    path={`/users/me`}
    {...props}
  />
);

export type UseGetCurrentUserProps = Omit<UseGetProps<void, GetCurrentUserQueryParams>, "path">;

export const useGetCurrentUser = (props: UseGetCurrentUserProps) => useGet<void, unknown, GetCurrentUserQueryParams>(`/users/me`, props);


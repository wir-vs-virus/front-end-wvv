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
  authorities?: {
  authority?: string;
}[];
  attributes?: {
  [key: string]: {[key: string]: any};
};
  name?: string;
  enabled?: boolean;
  username?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
}

export interface User {
  id?: number;
  name?: string;
  email?: string;
  provider: "facebook" | "google" | "local";
  providerId?: string;
}

export interface AuthenticateUserRequestBody {
  email: string;
  password: string;
}

export type AuthenticateUserProps = Omit<MutateProps<void, unknown, void, AuthenticateUserRequestBody>, "path" | "verb">;

export const AuthenticateUser = (props: AuthenticateUserProps) => (
  <Mutate<void, unknown, void, AuthenticateUserRequestBody>
    verb="POST"
    path={`/auth/login`}
    {...props}
  />
);

export type UseAuthenticateUserProps = Omit<UseMutateProps<void, void, AuthenticateUserRequestBody>, "path" | "verb">;

export const useAuthenticateUser = (props: UseAuthenticateUserProps) => useMutate<void, unknown, void, AuthenticateUserRequestBody>("POST", `/auth/login`, props);


export interface RegisterUserRequestBody {
  name: string;
  email: string;
  password: string;
}

export type RegisterUserProps = Omit<MutateProps<void, unknown, void, RegisterUserRequestBody>, "path" | "verb">;

export const RegisterUser = (props: RegisterUserProps) => (
  <Mutate<void, unknown, void, RegisterUserRequestBody>
    verb="POST"
    path={`/auth/signup`}
    {...props}
  />
);

export type UseRegisterUserProps = Omit<UseMutateProps<void, void, RegisterUserRequestBody>, "path" | "verb">;

export const useRegisterUser = (props: UseRegisterUserProps) => useMutate<void, unknown, void, RegisterUserRequestBody>("POST", `/auth/signup`, props);


export type GetHomeContentProps = Omit<GetProps<void, unknown, void>, "path">;

export const GetHomeContent = (props: GetHomeContentProps) => (
  <Get<void, unknown, void>
    path={`/`}
    {...props}
  />
);

export type UseGetHomeContentProps = Omit<UseGetProps<void, void>, "path">;

export const useGetHomeContent = (props: UseGetHomeContentProps) => useGet<void, unknown, void>(`/`, props);


export interface GetCurrentUserQueryParams {
  userPrincipal: {
  id?: number;
  password?: string;
  authorities?: {
  authority?: string;
}[];
  attributes?: {
  [key: string]: {[key: string]: any};
};
  name?: string;
  enabled?: boolean;
  username?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
};
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


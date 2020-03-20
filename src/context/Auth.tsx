import React, { ReactChild, useEffect } from "react";

type AuthContextType = {
  key: string;
  setKey: (key: string) => void;
  isLoggedIn: boolean;
  logout: () => void;
};

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: { children: ReactChild }) => {
  const [key, _setKey] = React.useState("");

  const isLoggedIn = () => !!key;

  const logout = () => {
    setKey("");
  };

  const setKey = (key: string) => {
    store.set(key);
    _setKey(key);
  };

  // OnMount read key from localStorage
  useEffect(() => {
    const userKey = store.get();
    if (userKey) {
      setKey(userKey);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ key, setKey, isLoggedIn: isLoggedIn(), logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const store = {
  get: () => window.localStorage.getItem("AUTHKEY"),
  set: (key: string) => window.localStorage.setItem("AUTHKEY", key)
};

import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth";
import {
  useParams,
  useRouteMatch,
  RouteComponentProps,
  Redirect,
  useLocation
} from "react-router-dom";

interface RouteMatch {
  provider: "google" | "facebook";
}

const OAuthController = () => {
  const Auth = useContext(AuthContext);

  const location = useLocation();

  const getUrlParameter = (name: string) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("code");
  const error = getUrlParameter("error");

  useEffect(() => {
    if (token) Auth?.setKey(token);
  }, []);

  if (token) {
    return (
      <Redirect
        to={{
          pathname: "/profile",
          state: { from: location }
        }}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            from: location,
            error: error
          }
        }}
      />
    );
  }

  return null;
};

export default OAuthController;

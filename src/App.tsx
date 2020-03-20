import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps
} from "react-router-dom";

import { backendHost } from "./config";

import { RestfulProvider } from "restful-react";

// Styling
import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "./utilities/styling";
import "./base.css";

//Contexts
import { AuthContext } from "./context/Auth";

// Components
import Header from "./components/Header";

// Views
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  const Auth = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <RestfulProvider
        base={backendHost}
        requestOptions={() => ({
          headers: { Authorization: "Bearer " + Auth?.key }
        })}
      >
        <Router>
          <Header />
          <main>
            <Routes />
          </main>
        </Router>
      </RestfulProvider>
    </ThemeProvider>
  );
}

export default App;

const Privat = () => <div>Privat</div>;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <ProtectedRoutes path="/privat">
        <Privat />
      </ProtectedRoutes>
    </Switch>
  );
};

const ProtectedRoutes = ({ children, ...rest }: RouteProps) => {
  const auth = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth?.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

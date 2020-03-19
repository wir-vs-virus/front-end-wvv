import React, { ReactChild } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps
} from "react-router-dom";

// Styling
import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "./utilities/styling";
import "./base.css";

// Components
import Header from "./components/Header";

// Views
import Home from "./views/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <main>
          <Routes />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <PrivateRoute path="/privat-home">
        <Home />
      </PrivateRoute>
    </Switch>
  );
};

function PrivateRoute({ children, ...rest }: RouteProps) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

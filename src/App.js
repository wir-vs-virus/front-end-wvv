import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;

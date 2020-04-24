import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import darkTheme from "./themes/themeDark";
import { MuiThemeProvider } from "@material-ui/core";
import Main from "./pages/Main";

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;

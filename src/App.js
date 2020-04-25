import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import darkTheme from "./themes/themeDark";
import { MuiThemeProvider } from "@material-ui/core";
import Main from "./pages/Main";
import ClientManager from "./pages/ClientManager";

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/ClientManager" component={ClientManager} />
        <Route exact path="/ClientManager/:option" component={ClientManager} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;

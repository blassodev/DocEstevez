import React from "react";
import { Route, Switch } from "react-router-dom";
import darkTheme from "./themes/themeDark";
import { MuiThemeProvider } from "@material-ui/core";
import Main from "./pages/Main";
import ClientManager from "./pages/ClientManager";
import { ClientProvider } from "./context/Client";
import ClientDetails from "./pages/ClientDetails";

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <ClientProvider>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ClientManager" component={ClientManager} />
          <Route
            exact
            path="/ClientManager/:option"
            component={ClientManager}
          />
          <Route exact path="/ClientDetails/:dni" component={ClientDetails} />
        </Switch>
      </ClientProvider>
    </MuiThemeProvider>
  );
}

export default App;

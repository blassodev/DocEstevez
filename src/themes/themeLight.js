import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "San Francisco",
    h1: {
      fontWeight: 100,
    },
  },
});

export default themeLight;

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#8f79b5",
    },
  },
  typography: {
    fontFamily: "San Francisco",
    allVariants: {
      color: "#fff",
    },
    h1: {
      fontWeight: 100,
    },
  },
});

export default themeDark;

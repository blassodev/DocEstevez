import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    },
    typography: {
        fontFamily: "San Francisco",
        allVariants:{
            color: '#fff'
        },
        h1: {
            fontWeight: 100
        },

    }
});

export default themeDark;
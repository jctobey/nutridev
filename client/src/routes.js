import React from "react";
import App from "./App";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e35183",
      main: "#ad1457",
      dark: "#78002e",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#bc477b",
      main: "#880e4f",
      dark: "#560027",
      contrastText: "#ffffff"
    },
    typography: {
      useNextVariants: true
    }
  }
});

const NoMatch = () => <h3>No match</h3>;

export const makeMainRoutes = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <App {...props} />} />

          <Route component={NoMatch} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

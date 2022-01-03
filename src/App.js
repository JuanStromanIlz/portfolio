import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Folder from "./pages/Folder";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/react";
import Works from "./pages/Works";

const newTheme = extendTheme({
  colors: {
    brand: {
      50: "#e8e5ff",
      100: "#b9b5fc",
      200: "#8c84f9",
      300: "#5e53f6",
      400: "#3323f3",
      500: "#1d0cda",
      600: "#1608aa",
      700: "#0e0579",
      800: "#07034a",
      900: "#02001c",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={newTheme}>
      {/* <ThemeProvider theme={themeWhite}> */}
      {/* <GlobalStyles /> */}
      <Router>
        <Switch>
          <Route exact path="/works" component={Works} />
          <Route path="/works/:title" component={Folder} />
        </Switch>
      </Router>
      {/* </ThemeProvider> */}
    </ChakraProvider>
  );
}

export default App;

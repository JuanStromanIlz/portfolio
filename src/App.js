import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Folder from "./pages/Folder";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/react";
import Works from "./pages/Works";
import "@fontsource/hauora-sans";

const newTheme = extendTheme({
  fonts: {
    body: "Hauora Sans",
    heading: "Hauora Sans",
  },
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
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/works" />
          </Route>
          <Route exact path="/works" component={Works} />
          <Route path="/works/:title" component={Folder} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;

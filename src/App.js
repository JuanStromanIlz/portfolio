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
import About from "./pages/About";
import NewFolder from "./pages/NewFolder";
import EditFolder from "./pages/EditFolder";
import "@fontsource/hauora-sans";
import Layout from "./components/Layout";
import AdminContext from "./context/Admin";

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
        <AdminContext>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Redirect to="/works" />
              </Route>
              <Route path="/about" component={About} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/works/new" component={NewFolder} />
              <Route exact path="/works/:title" component={Folder} />
              <Route path="/works/edit/:title" component={EditFolder} />
            </Switch>
          </Layout>
        </AdminContext>
      </Router>
    </ChakraProvider>
  );
}

export default App;

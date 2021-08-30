import { GlobalStyles, themeWhite } from "./styled-components/GlobalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from "./pages/Home";
import Folder from "./pages/Folder";

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:title' component={Folder} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

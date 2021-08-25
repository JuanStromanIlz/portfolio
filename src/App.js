import { GlobalStyles, themeWhite } from "./styled-components/GlobalStyles";
import Navbar from "./styled-components/Navbar";
import { ThemeProvider } from 'styled-components';
import Section from "./styled-components/Section";

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <GlobalStyles />
      <div id='appWrapper'>
        <Navbar />
        <Section />
      </div>
    </ThemeProvider>
  );
}

export default App;

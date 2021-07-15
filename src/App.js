import { GlobalStyles, themeWhite } from "./styled-components/GlobalStyles";
import { Navbar } from "./styled-components/Navbar";
import { PageHeader } from "./styled-components/PageHeader";
import { ThemeProvider } from 'styled-components';
import { Projects } from "./styled-components/Projects";
import { Contacto } from "./styled-components/Contacto";
import { Footer } from "./styled-components/Footer";

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <GlobalStyles />
      <Navbar />
      <PageHeader />
      <Projects />
      <Contacto />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

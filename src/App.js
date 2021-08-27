import { GlobalStyles, themeWhite } from "./styled-components/GlobalStyles";
import Navbar from "./styled-components/Navbar";
import { ThemeProvider } from 'styled-components';
import Section from "./styled-components/Section";
import trabajos from './trabajos.json';
import proyectos from './proyectos.json';

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <GlobalStyles />
      <div id='appWrapper'>
        <Navbar />
        <Section id='trabajos' folders={trabajos} title='Trabajos'/>
        <Section id='proyectos' folders={proyectos} title='Proyectos'/>
      </div>
    </ThemeProvider>
  );
}

export default App;

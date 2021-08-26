import { GlobalStyles, themeWhite } from "./styled-components/GlobalStyles";
import Navbar from "./styled-components/Navbar";
import { ThemeProvider } from 'styled-components';
import Section from "./styled-components/Section";
import db from './db.json';

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <GlobalStyles />
      <div id='appWrapper'>
        <Navbar />
        <Section id='trabajos' slider={true} folders={db} title='Trabajos'/>
        <Section id='proyectos' folders={db} title='Proyectos'/>
      </div>
    </ThemeProvider>
  );
}

export default App;

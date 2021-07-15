import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding: 53px 0 0 0;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colors.backgroundSolid};
    color: ${props => props.theme.colors.text};
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const themeWhite = {
  colors: {
    main: 'blue',
    text: 'black',
    lines: 'black',
    background: 'rgba(255,255,255, .7)',
    backgroundSolid: 'white'
  }
};

export { GlobalStyles, themeWhite };
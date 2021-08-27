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
    font-family: 'Urbanist', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-style: inherit;
  }
  #appWrapper {
    > * {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
const themeWhite = {
  black: '#080808',
  main: '#21B534',
  white: '#F5F5F5'
};

export { GlobalStyles, themeWhite };
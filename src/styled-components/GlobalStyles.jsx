import { createGlobalStyle } from "styled-components";
import HaasRg from '../fonts/Haas/HaasRg.ttf';
import HaasMd from '../fonts/Haas/HaasMd.ttf';
import HaasBd from '../fonts/Haas/HaasBd.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: HaasRg;
    font-style: normal;
    font-weight: 400;
    src: url(${HaasRg});
  }
  @font-face {
    font-family: HaasMd;
    font-style: normal;
    font-weight: 400;
    src: url(${HaasMd});
  }
  @font-face {
    font-family: HaasBd;
    font-style: normal;
    font-weight: 400;
    src: url(${HaasBd});
  }
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
    font-family: 'HaasRg', sans-serif;
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
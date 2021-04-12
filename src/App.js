import styled from 'styled-components';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProfileContainer from './components/ProfileContainer';
import NavBar from './components/NavBar';
import SocialMedia from "./components/SocialMedia";
import Footer from './components/Footer';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-family: 'Roboto', sans-serif;
  background: url('noise.png') center, #120F0F;
  color: #F0ECE0;
  .material-icon {
    font-family: 'Material Icons';
    color: rgba(225, 216, 191, 0.5);
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  h2 {
    font-size: 2.3rem;
    line-height: 2.3rem;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  p, span{
    font-size: 1rem;
    line-height: 1.35rem;
  }
  .link {
    color: #E1D8BF;
    text-decoration: none;
    :hover {
      text-decoration: underline;
      filter: blur(1px);
    }
  }
`;

function App() {
  return (
    <StyledApp className={StyledApp}>
      <NavBar />
      <Header />
      <ProfileContainer />
      <ProjectList />
      <SocialMedia />
      <Footer />
    </StyledApp>
  );
}

export default App;

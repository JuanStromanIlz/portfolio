import { forwardRef, useRef } from 'react';
import styled from 'styled-components';

const SideBar = forwardRef((props, ref) => ( 
  <nav ref={ref} className={props.className}>
    <ul>
      <li><a className="link" href="#aboutMe" onClick={() => props.openMenu()}>/me</a></li>
      <li><a className="link" href="#projects" onClick={() => props.openMenu()}>/projects</a></li>
      <li><a className="link" href="#personalData" onClick={() => props.openMenu()}>personalData</a></li>
    </ul>
  </nav>
));

const StyledSideBar = styled(SideBar)`
  display: none;
  height: 100vh;
  ul {
    margin: 0 0 1.3em 0;
    padding-right: 1.3em;
    display: flex;
    flex-direction: column;
    gap: 1.3em;
    list-style-type:none;
    text-align: right;
  }
`;

const Nav = forwardRef((props, ref) => (
  <nav ref={ref} className={props.className}>
    <ul className="box">
      <li><a className="link" href="#aboutMe">/me</a></li>
      <li><a className="link" href="#projects">/projects</a></li>
      <li><a className="link" href="#personalData">personalData</a></li>
    </ul>
    <span className="button material-icons" onClick={() => props.openMenu()}>
      menu
    </span>
  </nav>
));

const StyledNav = styled(Nav)`
  font-family: 'Roboto', light;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1.3em;
  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 1.3em;
    list-style-type:none;
  }
  .button {
    display: none;
    visibility: hidden;
    background: transparent;
    border: none;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  .background {
    background: rgba(0, 0, 0, 0.4);
  }
  .open {
    position: absolute;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.4);
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 1em 0;
      gap: 2em;
      > * {
        margin: 0;
      }
    }
  }
  @media (max-width: 1500px) {
    a {
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
  }
  @media (max-width: 800px) {

  }
  @media (max-width: 480px) {
    ${StyledNav} {
      ul {
      display: none;
      }
      .button {
        display: block;
        visibility: visible;
      }
    }
    a {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`;

export default function NavBar() {
  const sideMenu = useRef(null);
  const bar = useRef(null);

  function openMenu() {
    sideMenu.current.classList.toggle("open");
    bar.current.classList.toggle("background");
  }
  return (
    <NavContainer>
      <StyledNav 
        ref={bar}
        className={StyledNav}
        openMenu={openMenu}
      />
      <StyledSideBar 
        ref={sideMenu}
        className={StyledSideBar}
        openMenu={openMenu}
      />
    </NavContainer>
  );
}
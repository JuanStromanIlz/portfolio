import styled from 'styled-components';
import { scroller, animateScroll } from 'react-scroll';
import { useState, useEffect } from 'react';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  padding: 1.6rem 0;
  z-index: 1;
  background: ${props => props.theme.white};
  #wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 45px;
    ul {
      display: flex;
      flex-direction: row;
      li {
        display: flex;
        margin: auto;
        padding: .4rem 1.6rem;
        a {
          color: inherit;
          text-decoration: none;
        }
      }
    }
    #menuButton {
      font-weight: inherit;
      font-size: inherit;
      padding: .4rem 1.6rem;
      border-radius: 25px;
      margin: auto 0;
      border: 1px solid ${props => props.theme.black}; 
      background: ${props => props.theme.white};
    }
    #pages {
      display: none;
    }
    #social {
      display: none;
      li:first-child {
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border: 1px solid ${props => props.theme.black}; 
      }
      li:last-child {
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        border: 1px solid ${props => props.theme.black};
        border-left: none;
      }
    }
    #menu {
      position: fixed;
      top: 61px;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1.6rem;
      transition: .6s;
      transform: translateX(-100%);
      background: ${props => props.theme.white};
    }
    .menu__open {
      transform: translateX(0) !important;
    }
  }
  @media (hover:hover) {
    #pages li:hover {
      color: ${props => props.theme.green};
    }
  }
  @media (min-width: 920px) {
    #wrapper {
      #menuButton {
        display: none;
      }
      #pages, #social {
        display: flex;
      }
    }
  }
`;

const Navbar = () => {
  function openMenu() {
    document.getElementById('menu').classList.toggle('menu__open');
  }
  return (
    <NavContainer>
      <div id='wrapper'>
        <button onClick={openMenu} id='menuButton'>Menu</button>
        <ul id='pages'>
          <li><a href='#sobreMi'>Sobre Mi</a></li>
          <li><a href='#trabajos'>Trabajos</a></li>
          <li><a href='#proyectos'>Proyectos</a></li>
        </ul>
        <ul id='social'>
          <li><a href='/'>LinkedIn</a></li>
          <li><a href='/'>GitHub</a></li>
        </ul>
        <div id='menu'>
          <ul>
            <li><a href='#sobreMi'>Sobre Mi</a></li>
            <li><a href='#trabajos'>Trabajos</a></li>
            <li><a href='#proyectos'>Proyectos</a></li>
          </ul>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;
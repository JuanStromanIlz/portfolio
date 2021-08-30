import styled from 'styled-components';
import { scroller, animateScroll } from 'react-scroll';
import { useState, useEffect } from 'react';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 8;
  #wrapper {
    padding-top: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    #menuButton {
      z-index: 10;
      margin: 0;
      padding: 0;
      border: inherit;
      background: inherit;
      img {
        display: block;
        margin: auto;
        height: 45px;
      }
    }
    .menuButton__open {
      background: ${props => props.theme.white};
    }
    #pages {
      display: none;
      flex-direction: row;
      gap: 1.6rem;
      li {
        border-radius: 25px;
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};
        padding: .4rem .8rem;
        font-size: 1.8rem;
        :hover {
          background: ${props => props.theme.main};
        }
      }
    }
    #menu {
      z-index: 9;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: .6s;
      transform: translateX(-100%);
      background: ${props => props.theme.main};
      .menuContainer {
        margin-top: 61px;
        padding: 1.6rem .8rem;
        color: ${props => props.theme.black};
        .contact {
          gap: .8rem;
          li {
            font-size: inherit;
            font-weight: inherit;
            span {
              font-weight: 700;
              margin-right: .4rem;
            }
            a {
              color: ${props => props.theme.white};
              text-decoration: underline;
            }
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          li {
            font-size: 6rem;
            font-weight: 700;
            a {
              color: inherit;
              text-decoration: none;
            }
          }
        }
      }
    }
    .menu__open {
      transform: translateX(0) !important;
    }
  }
  @media (min-width: 920px) {
    #wrapper {
      #menuButton {
        display: none;
      }
      #pages {
        display: flex;
      }
      #menu {
        display: none;
      }
    }
  }
`;

const Navbar = () => {
  function openMenu() {
    document.getElementById('menuButton').classList.toggle('menuButton__open');
    document.getElementById('menu').classList.toggle('menu__open');
  }
  return (
    <NavContainer>
      <div id='wrapper'>
        <button onClick={openMenu} id='menuButton'>
          <img src='/icons/menu.svg' alt='menu' />
        </button>
        <ul id='pages'>
          <li><a href='#sobreMi'>Sobre Mi</a></li>
          <li><a href='#trabajos'>Trabajos</a></li>
        </ul>
        <div id='menu'>
          <div className='menuContainer'>
            <ul className='contact'>
              <li><span>email:</span><a href='mailto:juanstroman@gmail.com'>juanstroman@gmail.com</a></li>
              <li><span>linkedin:</span><a href='https://www.linkedin.com/in/jstromanilz'>jstromanilz</a></li>
            </ul>
            <ul>
              <li><a href='#sobreMi'>Sobre Mi</a></li>
              <li><a href='#trabajos'>Trabajos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;
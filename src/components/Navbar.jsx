import styled from 'styled-components';
import Button from './Button';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  #wrapper {
    padding-top: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    #menuButton {
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
    }
    #menu {
      position: fixed;
      opacity: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: .6s;
      transform: translateX(-100%);
      background: ${props => props.theme.main};
      .closeMenu {
        padding-top: 1.6rem;
        padding-left: .8rem;
        padding-right: .8rem;
        display: flex;
        flex-direction: row;
        button {
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
      }
      .menuContainer {
        padding: 1.6rem .8rem;
        color: ${props => props.theme.white};
        .contact {
          margin-bottom: 1.6rem;
          li {
            border-bottom: 1px solid ${props => props.theme.white};
            padding-bottom: .4rem;
            margin-bottom: .4rem;
            display: flex;
            flex-direction: row;
            .title {
              min-width: 30%;
              margin-right: .4rem;
            }
            a {
              transition: .2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              color: inherit;
              text-decoration: none;
              backdrop-filter: brightness(.8);
            }
            .list {
              flex-grow: 1;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              gap: .8rem;
            }
          }
        }
        .sections {
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
      opacity: 1 !important;
      transform: translateX(0) !important;
    }
  }
  @media (hover:hover) {
    #menuContainer a:hover {
      text-decoration: underline !important;
      backdrop-filter: brightness(1) !important;
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
          <li><Button><a href='/#sobreMi'>Sobre Mi</a></Button></li>
          <li><Button><a href='/#trabajos'>Trabajos</a></Button></li>
          <li><Button><a href='https://www.linkedin.com/in/jstromanilz'>Linkedin</a></Button></li>
          <li><Button><a href='mailto:juanstroman@gmail.com'>Email</a></Button></li>
        </ul>
        <div id='menu'>
          <div className='closeMenu'>
            <button onClick={openMenu}>
              <img src='/icons/menuWhite.svg' alt='menu' />
            </button>
          </div>
          <div className='menuContainer'>
            <ul className='contact'>
              <li><span className='title'>email:</span><a href='mailto:juanstroman@gmail.com'>juanstroman@gmail.com</a></li>
              <li><span className='title'>linkedin:</span><a href='https://www.linkedin.com/in/jstromanilz'>jstromanilz</a></li>
            </ul>
            <ul className='sections'>
              <li><a onClick={openMenu} href='/#sobreMi'>Sobre Mi</a></li>
              <li><a onClick={openMenu} href='/#trabajos'>Trabajos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;
import styled from 'styled-components';
import { scroller, animateScroll } from 'react-scroll';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  padding: 0 1.6rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${props => props.theme.colors.backgroundSolid};
  .navWrapper { 
    padding: 1.6rem 0;
    border-bottom: 2px solid ${props => props.theme.colors.black};
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        margin: auto 0;
        span {
          display: block;
          cursor: pointer;
          margin: auto 0;
          text-decoration: none;
          color: ${props => props.theme.colors.black};
          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }
    #backToTop {
      position: fixed;
      left: 1.6rem;
      bottom: 4.6rem;
      border-radius: 50%;
      width: 15vw;
      max-width: 40px;
      aspect-ratio: 1;
    }
  }
  .selected {
    color: ${props => props.theme.colors.main} !important; 
  }
`;

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  function scrollTo(index) {
    setMenu(index);
    scroller.scrollTo(index, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }
  function scrollToTop() {
    setMenu(null);
    animateScroll.scrollToTop();
  }

  useEffect(() => {
    function onScroll() {
      let icon = document.getElementById('backToTop');
      icon.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Nav>
      <div className='navWrapper'>
        <ul>
          <li><span className={`${menu === 'proyectos' && 'selected'}`} onClick={() => scrollTo('proyectos')}>trabajos</span></li>
          <li><span className={`${menu === 'contacto' && 'selected'}`} onClick={() => scrollTo('contacto')}>contacto</span></li>
        </ul>
        <img id='backToTop' src={process.env.PUBLIC_URL + 'icon.svg'} alt='home' onClick={scrollToTop}></img>
      </div>
    </Nav>
  );
};

export { Navbar };
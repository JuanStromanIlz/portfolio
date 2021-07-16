import { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const Header = styled.header`
  padding-top: 1.6rem;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
  border-bottom: 2px solid ${props => props.theme.colors.black};
  .headerWrapper {
    display: flex;
    flex-direction: column;
    h1, h2 {
      margin: 0;
    }
    span {
      font-size: 2rem;
      font-weight: 400;
    }
    #headerName {
      font-size: 4rem;
      -webkit-text-stroke: 1px black;
      color: white;
      margin-bottom: 1.6rem;
      text-shadow: .3rem .3rem 0 ${props => props.theme.colors.main};
    }
    #profileImg {
      width: 100%;
      display: block;
    }
    #icon {
      position: fixed;
      inset: 0;
      margin: auto;
      width: 60vw;
      max-width: 300px;
      z-index: -1;
    }
  }
  .lazyload-wrapper {
    background: ${props => props.theme.colors.main};
  }
  @media (min-width: 920px) {
    height: calc(100vh - 10.2rem);
    position: relative;
    .headerWrapper {
      span {
        font-size: 4rem;
      }
      #headerName {
        font-size: 8rem;
      }
      .infoWrapper {
        #profileImg {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 40%;
          height: 100%;
          object-fit: cover;
        }
        .infoText {
          max-width: 50%;
          p {
            padding-right: 1.6rem;
          }
        }
      }
    }
  }
`;

const PageHeader = () => {

  return (
    <Header>
      <div className='headerWrapper'>
        <span>¡hola, mundo!</span>
        <h1 id='headerName'>Juan Stroman Ilz</h1>
        <div className='infoWrapper'>
          <LazyLoad once resize={true}>
            <img id='profileImg' src={process.env.PUBLIC_URL + '/Juan.jpg'} alt='hi!'></img>
          </LazyLoad>
          <div className='infoText'>
            <p>Desarrollador web y artista.</p>
            <p>Con formación en la Universidad Nacional de las Artes encuentro en la programación una via de expresion donde la informacion y el medio tienen el mismo peso.</p>
            <p>Me fascinan los diseños abiertos, de pocos objectos y con una estetica marcada. Siempre buscando un equilibrio entre el contenido y la forma de mostrarlo.</p>
            <p>¡Hagamos contacto!</p>
          </div>
        </div>
      </div>
    </Header>
  );
};

export { PageHeader };
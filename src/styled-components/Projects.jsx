import styled from 'styled-components';
import { Slice } from './Slice';

const Projects = styled.div`
  article {
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    header {
      margin-bottom: 1.6rem;
      div:first-child {
        h3 {
          font-size: 3rem;
          margin: 0;
          a {
            -webkit-text-stroke: 1px ${props => props.theme.colors.text};
            color: transparent;
            text-decoration: none;
          }
        }
        span {
          color: ${props => props.theme.colors.main};
        }
      }
    }
    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.6rem;
      .button {
        display: block;
        transition: .1s ease-out;
        box-shadow: 0 0 1px 1px ${props => props.theme.colors.main};
        border-radius: 25px;
        padding: .2rem 1rem;
        color: ${props => props.theme.colors.main};
        text-decoration: none;
        font-size: 2rem;
      }
    }
  }
  article:last-child {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  @media (hover: hover) {
    div:first-child a:hover {
      -webkit-text-stroke-color: ${props => props.theme.colors.main};
      font-style: italic;
    }
    .button:hover {
      background: ${props => props.theme.colors.main};
      font-weight: 700;
      color: white !important;
      box-shadow: 0 0 1px 2px blue !important;
    }
  }
  @media (min-width: 920px) {
    article {
      header {
        h3 {
          font-size: 5.2rem !important;
        }
        .articleText {
          max-width: 60%;
          p {
            padding-right: 1.6rem;
          }
        }
      }
      
    }
  }
`;

const ProjectsContainer = () => {

  return (
    <Slice id='proyectos'>
      <Projects>
        <h2 className='sliceTitle'>trabajos</h2>
        <div className='sliceWrapper projectView'>
          <article>
            <header>
              <div>
                <h3><a href='https://merramarie.vercel.app/' target='_blank'>Merra Marie Portfolio</a></h3>
                <span>#fotografia #video #blog</span>
              </div>
              <div className='articleText'>
                <p>Portfolio y blog personal para la artista visual Merra Marie.<br />Cuenta con un servidor para subir, editar y eliminar los archivos que se muestran al publico en la web.</p>
              </div>
            </header>
            <div className='info'>
              <a className='button' href='https://github.com/JuanStromanIlz/merramarie-front/' target='_blank'>Github</a>
              <a className='button' href='https://merramarie.vercel.app/' target='_blank'>Online</a>
            </div>
          </article>
        </div>
      </Projects>
    </Slice>
  );
}

export { ProjectsContainer as Projects };
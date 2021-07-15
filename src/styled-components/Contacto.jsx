import styled from 'styled-components';
import { Slice } from './Slice';

const Contact = styled.div`
  .contactList {
    min-height: calc(100vh - 8.6rem);
    display: flex;
    flex-direction: column;
    button {
      display: block;
      width: fit-content;
      border: none;
      background: transparent;
      transition: .1s ease-out;
      box-shadow: 0 0 1px 1px ${props => props.theme.colors.main};
      border-radius: 25px;
      margin-bottom: 1.6rem;
      padding: .1rem 1.4rem;
      color: ${props => props.theme.colors.main};
      a {
        font-size: 3rem;
        text-transform: uppercase;
        -webkit-text-stroke: 1px ${props => props.theme.colors.text};
        color: transparent;
        -webkit-text-stroke-color: transparent;
        color: ${props => props.theme.colors.main};
        text-decoration: none;
      }
    }
  }
  @media (hover: hover) {
    button:hover {
      background: ${props => props.theme.colors.main};
      box-shadow: 0 0 1px 2px blue !important;
      a { 
        color: white !important;
      }
    }
  }
  @media (min-width: 920px) {
    .contactList {
      button a {
        font-size: 4.2rem;
      }
    }
  }
`;

const Contacto = () => {
  return (
    <Slice id='contacto'>
      <Contact>
        <h2 className='sliceTitle sliceTitle__right'>Contacto</h2>
        <div className='sliceWrapper contactList'>
          <button><a href='mailto:juanstroman@gmail.com'>Mail</a></button>
          <button><a href='https://www.linkedin.com/in/jstromanilz'>LinkedIn</a></button>
          <button><a href='https://github.com/JuanStromanIlz'>Github</a></button>
        </div>
      </Contact>
    </Slice>
  );
};

export { Contacto };
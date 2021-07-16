import styled from 'styled-components';
import { Slice } from './Slice';

const Contact = styled.div`
  .contactList {
    min-height: calc(100vh - 8.6rem);
    display: flex;
    flex-direction: column;
    .button {
      display: block;
      width: fit-content;
      border: none;
      background: transparent;
      transition: .1s ease-out;
      box-shadow: 0 0 1px 1px ${props => props.theme.colors.main};
      border-radius: 25px;
      margin-bottom: 1.6rem;
      padding: .1rem 1.4rem;
      font-size: 3rem;
      text-transform: uppercase;
      color: ${props => props.theme.colors.main};
      text-decoration: none;
    }
  }
  @media (hover: hover) {
    .button:hover {
      background: ${props => props.theme.colors.main};
      box-shadow: 0 0 1px 2px blue !important;
        color: white !important;
    }
  }
  @media (min-width: 920px) {
    .contactList {
      .button {
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
          <a className='button' href='mailto:juanstroman@gmail.com'>Mail</a>
          <a className='button' href='https://www.linkedin.com/in/jstromanilz'>LinkedIn</a>
          <a className='button' href='https://github.com/JuanStromanIlz'>Github</a>
        </div>
      </Contact>
    </Slice>
  );
};

export { Contacto };
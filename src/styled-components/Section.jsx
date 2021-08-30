import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  header {
    .sub {
      font-size: 2.6rem;
      margin-bottom: 1.6rem;
    }
    .links {
      li {
        border-bottom: 1px solid ${props => props.theme.black};
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
    margin-bottom: 3.2rem;
  }
  .gallery {
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: .8rem;
    box-sizing: border-box;
    scroll-snap-type: x mandatory;
    .image {
      flex: 0 0 90%;
      width: 90%;
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      img {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: auto;
        object-fit: scale-down;
      }
    }
  }
  .description {
    margin-top: 1.6rem;
    p {
      margin-bottom: 1.6rem;
      line-height: 2.1rem;
    }
  }
  .footer {
    border-top: 1px solid ${props => props.theme.black};
    padding-top: 1.6rem;
    margin-top: .4rem;
    margin-bottom: 1.6rem;
    a {
      transition: .2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      font-family: HaasBd;
      color: inherit;
      text-decoration: none;
    }
  }
  @media (hover:hover) {
    .links a:hover {
      text-decoration: underline;
      backdrop-filter: brightness(1);
      color: ${props => props.theme.main};
    }
    .footer a:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 920px) {
    .gallery {
      .image {
        flex: 0 0 45%;
        width: 45%;
      }
    }
    .description {
      width: 70%;
    }
  }
`;

export default function Section({info}) {
  return (
    <SectionContainer>
      <header>
        <Title>{info.title}</Title>
        <h3 className='sub'>{info.sub}</h3>
        <ul className='links'>
          {info.online && <li><span className='title'>online:</span><a href={info.online[0]}>{info.online[1]}</a></li>}
          {info.github && <li><span className='title'>proyecto:</span><a href={info.github[0]}>{info.github[1]}</a></li>}
          {info.key_words && <li>
            <span className='title'>palabras clave:</span>
            <div className='list'>
              {info.key_words.map(text =>
                <span>{text}</span>
              )}
            </div>
          </li>}
        </ul>
      </header>
      {info.images ? 
        <div className='gallery'>
          {info.images.map(img => 
            <div className='image'>
              <img src={img} alt='imagen del proyecto' />
            </div>
          )}
        </div>
      : null}
      {info.description ?
        <div className='description'>
          {info.description.map(paraph =>
            <p>{paraph}</p>
          )}
        </div>
      : null}
      <div className='footer'>
        <Link to='/#trabajos'><h2>Volver</h2></Link>
      </div>
    </SectionContainer>
  );
}
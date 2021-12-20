import styled from 'styled-components';
import Title from './Title';

const AboutContainer = styled.div`
  .description {
    p {
      margin-bottom: 1.6rem;
      line-height: 2.1rem;
    }
  }
  @media (min-width: 920px) {
    .description {
      width: 70%;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer id='sobreMi'>
      <Title>Sobre Mi</Title>
      <div className='description'>
        <p>Mi apertura a la programación comenzó en la Universidad Nacional de las Artes por lo que cuento con un perfil creativo y observador.<br />Encuentro en este campo el disfrute de desglosar las distintas situaciones a la hora de generar soluciones.</p>
        <p>Apasionado por crear y descubrir, veo <strong>la programación como via de expresión</strong>. Si te gusta mi trabajo o estas pensado en sumar gente a tu equipo <strong>no dudes en contactarme, estoy en la búsqueda de crecer laboralmente</strong>.</p>
      </div>
    </AboutContainer>
  );
}
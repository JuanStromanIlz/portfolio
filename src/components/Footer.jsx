import styled from 'styled-components';

const FooterContainer = styled.footer`
  backdrop-filter: brightness(.8);
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding: 1.6rem .8rem; 
  span, a {
    opacity: .8;
    color: inherit;
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterContainer className='contactInfo'>
      <span>Juan Stroman Ilz 2021</span>
      <a href='mailto:juanstroman@gmail.com'>juanstroman@gmail.com</a>
      <span>¡Bye!</span>
    </FooterContainer>
  );
}
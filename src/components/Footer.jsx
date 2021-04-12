import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-column: 1 / 13;
  text-align: center;
  padding: 1.3em;
  color: rgba(255, 255, 255, 0.5);
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Pagina realizada utilizando React y styled-components</p>
      <p>Fotografia por <a className="link" href="https://www.instagram.com/rocksselle">Rosselle Pasqualini</a>&emsp;&copy;</p>
      <p>2021 Juan Stroman Ilz&emsp;&copy;</p>
    </StyledFooter>
  );
}
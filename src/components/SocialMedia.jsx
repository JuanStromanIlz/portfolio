import styled from 'styled-components';

const Contact = (props) => (
  <section id="personalData"className={props.className}>
    <h2>let personalData &#61; &#123; </h2>
    <ul>
      <li><div><div><p>birth&#58;</p></div><div><p>&emsp;&#39;04/12/98 (Argentino)&#39;&#44;</p></div></div></li>
      <li><div><div><p>locale&#58;</p></div><div><p>&emsp;&#39;Parque Patricios (CABA)&#39;&#44;</p></div></div></li>
      <li><div><div><p>email&#58;</p></div><p>&emsp;&#39;juanstroman@gmail.com&#39;&#44;</p></div></li>
      <li><div><div><p>phone&#58;</p></div><div><p>&emsp;&#39;011 39101889&#39;&#44;</p></div></div></li>
      <li><div><div><p>linkedIn&#58;</p></div><div><a className="link" href="https://linkedin.com/in/jstromanilz"><p>&emsp;&#39;jstromanilz&#39;&#44;</p></a></div></div></li>
      <li><div><div><p>gitHub&#58;</p></div><div><a className="link" href="https://github.com/JuanStromanIlz"><p>&emsp;&#39;JuanStromanIlz&#39;</p></a></div></div></li>
    </ul>
    <h2>&#125;&#59;</h2>
  </section>
);

const StyledContact = styled(Contact)`
  grid-column: 1 / 13;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1.3em;
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  ul {
    margin: 0;
    padding-left: .5em;
    list-style-type:none;
    li {
      p {
        margin: .3em;
      }
    }
  }
`;

export default function SocialMedia() {
  return (
    <StyledContact 
      className={StyledContact}
    />
  );
}
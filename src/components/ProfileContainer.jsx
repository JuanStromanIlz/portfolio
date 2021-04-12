import styled from 'styled-components';

const Container = (props) => (
  <section id="aboutMe" className={props.className}>
    <h2 className="section-title">/me</h2>
    <article className="me">
      <header>
        <h3>Artista plastico y desarrollador</h3>
      </header>
      <p>Mi nombre es Juan, tengo 22 años, mis aficiones son las artes plásticas, la programación y la música. Disfruto estar al aire libre y observar lo que me rodea.<br/>
      Poseo conocimiento en programación fullstack con tendencia hacia el front, donde siento que puedo desenvolverme mejor.<br/>
      Cuento con certificaciones en la materia: Digital House y Udemy, asi como haber realizado una ayudantía en la materia Programación de la Universidad Nacional de las Artes <a className="link" href="JuanStromanIlz-CV.pdf" download>(Descargar CV)</a>.
      </p>
      <p>Me gustan los diseños abiertos, con pocos objetos y la utilización de texturas. Pienso que es un plus cuando la página tiene una estética marcada además de ser funcional al contenido.</p>
    </article>
    <article className="skills">
      <header>
        <h3>let skills &#61; &#91;</h3>
      </header>
      <ul>
        <li><p>&#39;HTML&#39;&#44;</p></li>
        <li><p>&#39;CSS&#39;&#44;</p></li>
        <li><p>&#39;JavaScript&#39;&#44;</p></li>
        <li><p>&#39;React&#39;&#44;</p></li>
        <li><p>&#39;Node&#39;&#44;</p></li>
        <li><p>&#39;NPM Packages&#39;&#44;</p></li>
        <li><p>&#39;MongoDB&#39;&#44;</p></li>
        <li><p>&#39;MySQL&#39;&#44;</p></li>
        <li><p>&#39;SCRUM&#39;&#44;</p></li>
        <li><p>&#39;Puntal&#39;&#44;</p></li>
        <li><p>&#39;Dedicado&#39;&#44;</p></li>
        <li><p>&#39;Adaptabilidad&#39;&#44;</p></li>
      </ul>
      <h3>&#93;	&#59;</h3>
    </article>
  </section>
);

const StyledContainer = styled(Container)`
  padding: 1.3em;
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .section-title {
    grid-column: 1 / 13;
  }
  article {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 1.3em 0;
    ul {
      margin: 0;
      padding-left: .5em;
      list-style-type:none;
      li {
        p {
          margin: .1em;
        }
      }
    }
  }
  @media (max-width: 1500px) {
    .me {
      grid-column: 1 / 9;
    }
    .skills {
      grid-column: 10 / 13;
    }
  }
  @media (max-width: 800px) {
    .me {
      grid-column: 1 / 13;
    }
    .skills {
      grid-column: 1 / 13;
    }
  }
  @media (max-width: 480px) {
    .me {
      grid-column: 1 / 13;
    }
    .skills {
      grid-column: 1 / 13;
    }
  }
`;

export default function ProfileContainer(props) {
  return (
    <StyledContainer
      className={StyledContainer}
    />
  );
}
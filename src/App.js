import styled from 'styled-components';
import NewPost from './components/NewPost';
import Header from './components/Header';
import GlassCard from './components/GlassCard';
import ColumnPost from './components/ColumnPost';
import Article from './components/Article';
import SocialMedia from './components/SocialMedia';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-row: 100vh, repeat(auto-fill);
  grid-gap: 1em;
  font-family: 'Roboto', sans-serif;
  background-color: white;
  color: black;
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  h2, h3 {
    font-weight: 600;
  }
  h4 {
    font-weight: 700;
  }
  h5 {
    font-weight: 500;
  }
  p, span {
    font-weight: 500;
  }
  @media (max-width: 1500px) {
    h2 {
    font-size: 3.3rem;
    line-height: 3.3rem;
    text-align: left;
    }
    h3 {
      font-size: 2.2rem;
      line-height: 2.2rem;
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-align: left;
    }
    h4 {
      font-size: 1.6rem;
      line-height: 1.6rem;
      text-align: left;
    }
    h5 {
      font-size: 1.2rem;
      line-height: 1.2rem;
      text-align: left;
    }
    p {
      font-size: 1.3rem;
      line-height: 1.55rem;
    }
    span {
      font-size: 1.1rem;
      line-height: 1.35rem;
    }
  }
  @media (max-width: 800px) {
    h2 {
    font-size: 2.2rem;
    line-height: 2.2rem;
    text-align: left;
    }
    h3 {
      font-size: 1.47rem;
      line-height: 1.47rem;
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-align: left;
    }
    h4 {
      font-size: 1.17rem;
      line-height: 1.17rem;
      text-align: left;
    }
    h5 {
      font-size: 1rem;
      line-height: 1rem;
      text-align: left;
    }
    p {
      font-size: 1rem;
      line-height: 1.35rem;
    }
    span {
      font-size: 1rem;
      line-height: 1.35rem;
    }
  }
  @media (max-width: 480px) {

  }
`;

function App() {
  return (
    <StyledApp className={StyledApp}>
      <Header />
      <NewPost
        title="#sobreMi"
        content="Apasionado y predispuesto al cambio. Busco unirme a un equipo de trabajo donde pueda aportar mis habilidades, así como desarrollar nuevas mediante el aprendizaje mutuo.  Tras años de estudio en la Universidad de las Artes me encontré con mi nuevo objetivo y desde allí comencé este camino con ganas de sumar."
      />
      <ColumnPost>
        <NewPost
          title="contacto"
        >
          <SocialMedia />
        </NewPost>
        <NewPost
          title="this.skills"
        >
          <Article 
            list={['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'MongoDB', 'MySQL', 'Scrum', 'Dedicado', 'Creativo','Adaptabilidad']}
          />
        </NewPost>
      </ColumnPost>
      <NewPost 
        title="const expLaboral ="
      >
        <Article 
          title="Ayudante de catedra - Universidad Nacional de las Artes"
          sub="OTAV: Programación  | Mar 2019 - Jun 2019"
          list={['Processing 3', 'Trabajo sobre JavaScript', 'Acompañamiento en clase', 'Resolución de problemas', 'Corrección de proyectos']}
        />
      </NewPost>
      <NewPost 
        title="const formacion ="
      >
        <Article 
          title="The Complete Web Development Bootcamp"
          sub="Curso Udemy | Feb 2021 - Mar 2021"
          list={['Aprendizaje de las herramientas NodeJS y React.', 'Uso de paquetes NPM (ej: Express, Passport).', 'Desarrollo de un proyecto final poniendo a prueba lo aprendido.']}
        />
        <Article 
          title="Desarrollador web Full Stack - Digital House"
          sub="CoLearning At Home | Jul 2019 - Dic 2019"
          list={['Idea y planificación de una red social .', 'Utilización de esquema UML y modalidad Scrum.', 'Backend realizado en php con orientación a objetos.', 'Uso de Laravel.', 'Base de datos MySQL conectada a través de PDO.', 'Unificación del Diseño frontend.']}
        />
      </NewPost>
      <NewPost
        title="/proyectos"
      >
        <GlassCard 
          title="Aerolab Challange"
          sub="e-commerce"
          content="Proyecto realizado en el marco de un challange, una tienda por puntos con distintas interacciones por parte deul usario"
          tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
          gitLink="/AerolabChallange"
          liveProject="http://aerolab-challange-juanstromanilz.vercel.app"
        />
        <GlassCard 
          title="Challange"
          sub="blog"
          content="Proyecto realizado en el marco de un challange, una tienda por puntos con distintas interacciones por parte deul usario"
          tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
          gitLink="/AerolabChallange"
          liveProject="http://aerolab-challange-juanstromanilz.vercel.app"
        />
        <GlassCard 
          title="Challange"
          sub="blog"
          content="Proyecto realizado en el marco de un challange, una tienda por puntos con distintas interacciones por parte deul usario"
          tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
          gitLink="/AerolabChallange"
          liveProject="http://aerolab-challange-juanstromanilz.vercel.app"
        />
      </NewPost>
    </StyledApp>
  );
}

export default App;

import styled from 'styled-components';

const Card = (props) => (
  <div className={props.className}>
    <header>
      <h4 className="card-title">{props.title}</h4>
      <span className="card-sub">{props.sub}</span>
    </header>
    <div className="card-content">
      <p className="card-p">{props.content}</p>
      <span>Tecnologías usadas: {props.tecs.map(tec => tec + ", ")}</span>
    </div>
    <footer>
      <ul>
        <li><a href={props.gitLink}>Ver en github</a></li>
        <li>{props.liveProject && <a href={props.liveProject}>Visitar proyecto</a>}</li>
      </ul>
    </footer>
  </div>
);

const StyledCard = styled(Card)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255,255,255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1em;  
  :hover {
    backdrop-filter: blur(4px) brightness(1.5);
    .card-title {
      color: rgba(255, 255, 255, 0.9);
    }
  }
  header {  
    .card-title {
      margin: 0;
      margin-bottom: .2em;
      text-align: left;
      color: rgba(255, 255, 255, 0.5);
    }
    .card-sub {
      margin: 0;
      text-align: left;
      padding-bottom: .5em;
      color: rgba(255, 255, 255, 0.5);
      pointer-events: none;
    }
  }
  .card-content {
    display: flex;
    flex-wrap: wrap;
    padding: 1em 0 0 0;
    .card-p {
      text-align: left;
      margin: 0;
      margin-bottom: .5em;
    }
    span {
      margin: .5em 0;
    }
  }
  footer {
    padding: 0;
    ul {
      margin-bottom: 0;
      display: flex;
      flex-direction: row;
      list-style-type:none;
      padding: 0;
      li {
        padding-left: 0;
      }
      a {
        padding: .5em;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        :hover {
          color: rgba(255, 255, 255, 0.9)
        }
      }
    }
  }
`;

export default function ProyectCard(props) {
  return (
    <StyledCard
      className={StyledCard}
      title={props.title}
      sub={props.sub}
      img={props.img}
      content={props.content}
      tecs={props.tecs}
      gitLink={props.gitLink}
      liveProject={props.liveProject}
    />
  );
}
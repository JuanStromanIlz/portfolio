import styled from 'styled-components';

const Card = (props) => (
  <div className={props.className}>
    <div className="background"></div>
    <h4 className="card-title">{props.title}</h4>
    <h5 className="card-sub">{props.sub}</h5>
    <div className="card-content">
      <p className="card-p">{props.content}</p>
      <span>Tecnologías usadas: {props.tecs.map(tec => tec + ", ")}</span>
    </div>
    <div className="card-footer">
      <a href={props.gitLink}>Ver en github</a>
      {props.liveProject && <a href={props.liveProject}>Visitar proyecto</a>}
    </div>
  </div>
);

const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 15px;
  box-shadow: 0 8px 12px 0 rgba(127, 127, 135, 0.35);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  color: #ffff;
  padding: 1em;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(3px);
    background: rgba(255,255,255, 0.1);
    background: linear-gradient(90deg, rgba(255,255,255,0.09567577030812324) 10%, rgba(255,255,255,0) 86%);
  }
  .card-title {
    z-index: 1;
    margin: 0;
    margin-bottom: .2em;
    text-align: left;
    :hover {
      color: red;
    }
  }
  .card-sub {
    margin: 0;
    text-align: left;
    border-bottom: 3px groove rgba(255, 255, 255, 0.5);
    padding-bottom: .5em;
  }
  .card-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em 0 0 0;
    .card-p {
      text-align: left;
      margin: 0;
      margin-bottom: 1em;
    }
  }
  .card-footer {
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-center: center;
    padding: .5em 1em;
    a {
      text-decoration: none;
      color: #000;
      :hover {
        color: #ffffff;
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
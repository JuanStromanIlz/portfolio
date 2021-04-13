import styled from 'styled-components';
import GlassCard from './GlassCard';

const Project = (props) => (
  <div id="projects"className={props.className}>
    <h2>/projects</h2>
    <div className="project-container"> 
      {props.children}
    </div>
  </div>
);

const StyledProject = styled(Project)`
  grid-column: 1 / 13;
  padding: 1.3em;
  gap: 1em;
  .project-container {
    grid-column: 2 / 12;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    display: grid;
    gap: 1em; 
  }
  @media (max-width: 1500px) {
    .project-container {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  @media (max-width: 800px) {
    .project-container {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media (max-width: 480px) {
    .project-container {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
`;

export default function ProjectList(props) {
  return (
    <StyledProject
      className={StyledProject}
      title={props.title}
      sub={props.sub}
    >
      <GlassCard 
        title="Aerolab Challange"
        sub="e-commerce"
        content="Proyecto realizado en el marco de un challange, una tienda de electronica con un sistema de puntos"
        img="aerolab-challange.png"
        tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
        gitLink="https://github.com/JuanStromanIlz/aerolab-challange"
        liveProject="http://aerolab-challange-juanstromanilz.vercel.app"
      />
      <GlassCard 
        title="Lorem ispum"
        sub="e-commerce"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus consequat purus, a vehicula justo volutpat sit amet. Sed tincidunt vestibulum nunc, a porta ipsum pellentesque ac. Donec iaculis semper urna at interdum. "
        img="aerolab-challange.png"
        tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
        gitLink="/"
        liveProject="/"
      />
      <GlassCard 
        title="Lorem ispum"
        sub="e-commerce"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus consequat purus, a vehicula justo volutpat sit amet. Sed tincidunt vestibulum nunc, a porta ipsum pellentesque ac. Donec iaculis semper urna at interdum. "
        img="aerolab-challange.png"
        tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
        gitLink="/"
        liveProject="/"
      />
      <GlassCard 
        title="Lorem ispum"
        sub="e-commerce"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus consequat purus, a vehicula justo volutpat sit amet. Sed tincidunt vestibulum nunc, a porta ipsum pellentesque ac. Donec iaculis semper urna at interdum. "
        img="aerolab-challange.png"
        tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
        gitLink="/"
        liveProject="/"
      />
      <GlassCard 
        title="Lorem ispum"
        sub="e-commerce"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus consequat purus, a vehicula justo volutpat sit amet. Sed tincidunt vestibulum nunc, a porta ipsum pellentesque ac. Donec iaculis semper urna at interdum. "
        img="aerolab-challange.png"
        tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
        gitLink="/"
        liveProject="/"
      />
      <GlassCard 
        title="Lorem ispum"
        sub="e-commerce"
        content="Lorem ipsum dolor sit amet, consequat purus, a vehicula justo volutpat sit amet. Sed tincidunt vestibulum nunc, a porta ipsum pellentesque ac. Donec iaculis semper urna at interdum. "
        img="aerolab-challange.png"
        tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
        gitLink="/"
        liveProject="/"
      />
      <GlassCard 
        title="Lorem ispum"
        sub="e-commerce"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus consequat purus, a vehicula justo volutpat sit amet. Sed tincidunt vestibulum nunc, a porta ipsum pellentesque ac. Donec iaculis semper urna at interdum. "
        img="aerolab-challange.png"
        tecs={['Node.js', 'React', 'styled-components', 'react-router-dom']}
        gitLink="/"
        liveProject="/"
      />
    </StyledProject>
  );
}
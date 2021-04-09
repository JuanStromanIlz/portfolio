import styled from 'styled-components';

const Post = (props) => (
  <div className={props.className}>
    <h2 className="post-title">{props.title}</h2>
    {props.sub && <h3 className="post-sub">{props.sub}</h3>}
    <p className="post-content">{props.content}</p>
    {props.children && <div className="post-child">
      {props.children}
    </div>}
  </div>
);

const StyledPost = styled(Post)`
  height: fit-content;
  background: ${post => post.background ? post.background : "transparent"};
  .post-title {
    margin: 0;
    margin-bottom: .3em;
  }
  .post-sub {
    margin: 0;
    margin-bottom: .2em;
  }
  .post-content {
    margin: 0;
    padding: 0;
  }
  .post-child {
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    padding: 0 0 1em 0;
    gap: 1em;
  }
  @media (max-width: 1500px) {
    grid-column: 2 / 9;
    .post-child > * {
      flex: 1 1 300px;
    }
  }
  @media (max-width: 800px) {
    grid-column: 2 / 12;
    .post-child > * {
      flex: 1 1 100%;
    }
  }
  @media (max-width: 480px) {
    grid-column: 2 / 12;
    .post-child > * {
      flex: 1 1 100%;
    }
  }
`;

export default function NewPost(props) {
  return (
    <StyledPost 
      className={StyledPost}
      title={props.title}
      sub={props.sub}
      img={props.img}
      content={props.content}
      children={props.children}
      background={props.background}
    />
  );
}
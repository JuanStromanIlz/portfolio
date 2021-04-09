import styled from 'styled-components';

const NewEntry = (props) => (
  <article className={props.className}>
    {props.title && <h4 className="article-title">{props.title}</h4>}
    {props.sub && <h5 className="article-sub">{props.sub}</h5>}
    {props.content && <p className="article-content">{props.content}</p>}
    {props.list && props.list.map(point =>
      <div key={point} className="article-list">
        <div><span>*</span></div>
        <div><span>{point}</span></div>
      </div>
    )}
  </article>
);

const StyledNewEntry = styled(NewEntry)`
  display: flex;
  flex-direction: column;
  .article-title {
    margin-bottom: 0;
  }
  .article-sub {
    margin: .5em 0 1em 0;
  }
  .article-content {
    margin: 0 0 1em 0;
  }
  .article-list {
    display: flex;
    flex-direction: row;
    margin: 0;
    div:last-child {
      padding-left: .3em;
    }
  }
`;

export default function Article(props) {
  return (
    <StyledNewEntry 
      className={StyledNewEntry}
      title={props.title}
      sub={props.sub}
      content={props.content}
      list={props.list}
    />
  );
}
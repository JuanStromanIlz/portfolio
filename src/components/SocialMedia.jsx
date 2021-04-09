import styled from 'styled-components';

const NewEntry = (props) => (
  <article className={props.className}>
    {props.title && <h4 className="media-title">{props.title}</h4>}
    {props.sub && <h5 className="media-sub">{props.sub}</h5>}
    {props.content && <p className="media-content">{props.content}</p>}
      <div className="media-list">
        <div>
          <span className="material-icons">
            sentiment_satisfied_alt
          </span>
        </div>
        <div><span>04/12/98 (Argentino)</span></div>
      </div>
      <div className="media-list">
        <div>
          <span className="material-icons">
            place
          </span>
        </div>
        <div><span>Parque Patricios (CABA)</span></div>
      </div>
      <div className="media-list">
        <div>
          <span className="material-icons">
            alternate_email
          </span>
        </div>
        <div><span>juanstroman@gmail.com</span></div>
      </div>
      <div className="media-list">
        <div>
          <span className="material-icons">
            insert_link
          </span>
        </div>
        <div><span>jstromanilz</span></div>
      </div>
      <div className="media-list">
        <div>
          <span className="material-icons">
            device_hub
          </span>
        </div>
        <div><span>JuanStromanIlz</span></div>
      </div>
      <div className="media-list">
        <div>
          <span className="material-icons">
            phone
          </span>
        </div>
        <div><span>11 39101889</span></div>
      </div>
  </article>
);

const StyledNewEntry = styled(NewEntry)`
  display: flex;
  flex-direction: column;
  .media-title {
    margin-bottom: 0;
  }
  .media-sub {
    margin: .5em 0 1em 0;
  }
  .media-content {
    margin: 0 0 1em 0;
  }
  .media-list {
    display: flex;
    flex-direction: row;
    margin: 0;
    div:last-child {
      padding-left: .3em;
    }
  }
`;

export default function SocialMedia(props) {
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
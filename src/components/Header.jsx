import styled from 'styled-components';

const Header = (props) => (
  <div className={props.className}>
    <div className="name">
      <span className="hello">¡hello, world!</span>
      <h1 className="header-title">Juan Stroman Ilz</h1>
      <h2 className="header-sub">fullstack dev</h2>
    </div>
  </div>
);

const StyledHeader = styled(Header)`
  grid-column: 1 / 13;
  height: 100vh;
  padding: 1.3em;
  background-image: url('header-img.jpg');
  background-size: contain;
  background-position: center;
  .name {
    width: 50vw;
    margin-top: 5em;
    .header-title {
      margin: 0;
      text-align: left;
    }
    .header-sub {
      margin: 0;
      text-align: left;
    }
  }
  @media (max-width: 1500px) {
    .header-title {
      font-size: 10.1vw;
      line-height: 9.8vw;
    }
    .header-sub {
      font-size: 3vw;
      line-height: 3vw;
      letter-spacing: .5vw;
    }
  }
  @media (max-width: 800px) {
    .header-title {
      font-size: 15.2vw;
      line-height: 14vw;
    }
    .header-sub {
      font-size: 4.5vw;
      line-height: 4.5vw;
      letter-spacing: .7vw;
    }
  }
  @media (max-width: 480px) {
    .header-title {
      font-size: 20.1vw;
      line-height: 18.8vw;
    }
    .header-sub {
      font-size: 5.5vw;
      line-height: 6vw;
      letter-spacing: 1vw;
    }
  }
`;

export default function HeaderView() {
  return (
    <StyledHeader 
      className={StyledHeader}
    />
  );
}
import styled from 'styled-components';

const Nav = (props) => (
  <div className={props.className}>
    <div className="box">
      <div className="link-box">
        <a href="/" className="linkNav">/linkedIn</a>
      </div>
    </div>
    <div className="box">
      <div className="link-box">
        <a href="/" className="linkNav">/proyectos</a>
      </div>
    </div>
  </div>
);

const StyledNav = styled(Nav)`
  font-family: 'Roboto', light;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: max-content;
  position: absolute;
  top: 0;
  .box {
    margin-top: .5em;
    :first-child {
      margin-left: 1em;
    }
    :last-child {
      margin-right: 1em;
    }
  }
  .link-box {
    :hover {
      filter: brightness(0.9);
    }
    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
  @media (max-width: 1500px) {
    a {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
  @media (max-width: 800px) {
    a {
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }
  @media (max-width: 480px) {
    a {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }
`;

export default function NavBar() {
  return (
    <StyledNav 
      className={StyledNav}
    />
  );
}
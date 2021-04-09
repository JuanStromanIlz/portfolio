import styled from 'styled-components';
import Button from './Button';
import NavBar from './NavBar';

const Header = (props) => (
  <div className={props.className}>
    <div className="box">
      <h2 className="header-title">Juan Stroman Ilz</h2>
      <h2 className="header-sub">frontend dev</h2>
    </div>
    {props.children}
  </div>
);

const StyledHeader = styled(Header)`
  grid-column: 1 / 13;
  height: 100vh;
  background-image: url('header-img.jpg');
  background-size: contain;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    margin: 0;
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
  .header-sub {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    color: #ffffff;
  }
  .box {
    display: flex;
    flex-direction: column;
    h2:first-child {
      text-align: center;
    }
  }
  @media (max-width: 1500px) {
    .header-title {
      font-size: 6rem;
      line-height: 6rem;
    }
    .header-sub {
      font-size: 4.5rem;
      line-height: 4.5rem;
      text-align: right;
    }
  }
  @media (max-width: 800px) {
    .header-title {
      font-size: 5.5rem;
      line-height: 5.5rem;
    }
    .header-sub {
      font-size: 3.5rem;
      line-height: 3.5rem;
      text-align: center;
      margin-bottom: .5em;
    }
  }
  @media (max-width: 480px) {
    .header-title {
      font-size: 3.8rem;
      line-height: 4.1rem;
    }
    .header-sub {
      font-size: 2.4rem;
      line-height: 2.7rem;
      text-align: center;
      margin-bottom: .5em;
    }
  }
`;

export default function HeaderView() {
  return (
    <StyledHeader 
      className={StyledHeader}
    >
      <NavBar />
      <a href="#aboutMe"><Button color="white">Check!</Button></a>
    </StyledHeader>  
  );
}
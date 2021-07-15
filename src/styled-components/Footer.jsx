import styled from 'styled-components';

const Footer = styled.footer`
  padding: 0 1.6rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: ${props => props.theme.colors.backgroundSolid};
  .footerWrapper {
    padding: .6rem 0;
    border-top: 2px solid ${props => props.theme.colors.main};
    overflow: hidden;
    #text {
      padding: auto;
      text-transform: uppercase;
      font-weight: 600;
      display: flex;
      flex-direction: row;
      gap: .6rem;
      a {
        animation: textMove 6s linear infinite;
        white-space: nowrap;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.colors.main};
      }
      @keyframes textMove {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0%);
        }
      }
    }
  }
`;

const FooterContainer = () => {
  return (
    <Footer>
      <div className='footerWrapper'>
        <div id='text'>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
          <a href='mailto:juanstroman@gmail.com'>Trabajemos juntos</a>
        </div>
      </div>
    </Footer>
  );
};

export { FooterContainer as Footer };
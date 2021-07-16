import { useEffect } from 'react';
import styled from 'styled-components';

const Load = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.theme.colors.backgroundSolid};
  z-index: 10;
  transition: 1s cubic-bezier(0.65, 0.05, 0.36, 1);
  display: grid;
  place-items: center;
  img {
    width: 50vw;
    max-width: 400px;
    transition: 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;


const Loading = () => {

  useEffect(() => {
    let loading = document.getElementById('loading');
    let logo = document.getElementById('loadingLogo');
    document.body.style.cssText='overflow:hidden; position:fixed; inset:0; width:100vw; height:100vh;';
    setTimeout(() => {
      logo.style.transform='rotate(360deg)';
      setTimeout(() => {
        loading.style.cssText='transform:translate(-100%); background:transparent;';
        document.body.removeAttribute('style');
      }, 1600);
    }, 1000);
  }, []);

  return (
    <Load id='loading'>
      <img id='loadingLogo' src={process.env.PUBLIC_URL + 'icon.svg'} alt='loading'></img>
    </Load>
  );
};

export { Loading };
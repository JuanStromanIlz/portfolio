import styled from 'styled-components';

const BannerContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  .bannerTitle {
    font-size: 7rem;
    font-family: HaasBd;
  }
`;

export default function Banner() {
  return (
    <BannerContainer>
      <h1 className='bannerTitle'>Juan Stroman Ilz</h1>
      <h3>Desarrolador y artista plastico</h3>
    </BannerContainer>
  )
}
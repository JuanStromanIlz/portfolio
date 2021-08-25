import styled from 'styled-components';
import db from '../db.json';
import Slider from './Slider';

const SectionContainer = styled.section`
  background: #d4e09b;
  height: 100vh;
  margin-top: 1.6rem;
  header {
    border-top: 1px solid ${props => props.theme.black};
    display: flex;
    .title {
      font-size: 6rem;
      margin: 1.6rem 0;
    }
  }
  .sliderWrapper {
    border-top: 1px solid ${props => props.theme.black};
    height: calc(100vh - 105px);
  }
`;

export default function Section() {
  return (
    <SectionContainer>
      <header>
        <h2 className='title'>Trabajos</h2>
      </header>
      <div className='sliderWrapper'>
        <Slider folders={db} />
      </div>
    </SectionContainer>
  );
}
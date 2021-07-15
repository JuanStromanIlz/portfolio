import styled from 'styled-components';

const Slice = styled.section`
  padding-top: 1.6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  background: ${props => props.theme.colors.background};
  .sliceTitle {
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.colors.main};
    border-bottom: 2px solid ${props => props.theme.colors.main};
  }
  .sliceTitle__right {
    text-align: right;
  }
  .sliceWrapper {
    padding-bottom: 1.6rem;
    border-bottom: 2px solid ${props => props.theme.colors.text};
  }
`;

export { Slice };
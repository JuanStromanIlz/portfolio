import styled from 'styled-components';

const Column = (props) => (
  <div className={props.className}>
    {props.children}
  </div>
);

const StyledColumn = styled(Column)`
  display: flex;
  gap: 1em;
  @media (max-width: 1500px) {
    grid-area: 2 / 9 / 4 / 12;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    grid-area: 3 / 2 / 4 / 12;
    position: relative;
    flex-direction: row;
    > * {
      flex: 1 1 100%;
    }
  }
  @media (max-width: 480px) {
    grid-area: 3 / 2 / 4 / 12;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    > * {
      flex: 1 1 100%;
    }
  }
`;

export default function ColumnPost(props) {
  return (
    <StyledColumn
      className={StyledColumn}
      children={props.children}
    />
  );
}
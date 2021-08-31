import styled from 'styled-components';
import Card from './Card';

const ListContainner = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
  @media (min-width: 920px) {
    grid-template-columns: repeat(2, calc(50% - .8rem));
  }
`;

const List = ({list}) => {
  return (
    <ListContainner>
      {list.map((item, index) => 
        <Card info={item} index={index} />
      )}
    </ListContainner>
  );
}

export default List;
import List from '../styled-components/List';
import Navbar from '../styled-components/Navbar';
import Title from '../styled-components/Title';
import Wrapper from '../styled-components/Wrapper';
import trabajos from '../trabajos.json';

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Title id='trabajos'>Trabajos</Title>
      <List list={trabajos} />
    </Wrapper>
  );
}
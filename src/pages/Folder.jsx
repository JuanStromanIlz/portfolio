import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../styled-components/Footer';
import Navbar from '../styled-components/Navbar';
import Detail from '../styled-components/Detail';
import Wrapper from '../styled-components/Wrapper';
import trabajos from '../trabajos.json';

export default function Folder() {
  const [info, setInfo] = useState({});
  const {title} = useParams();
  useEffect(()=> {
    let folder = trabajos.find(item => item.title === title);
    setInfo(folder);
  },[title]);

  return (
    <>
    <Wrapper>
      <Navbar />
      <Detail info={info} />
    </Wrapper>
    <Footer />
    </>
  );
}
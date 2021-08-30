import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../styled-components/Footer';
import Navbar from '../styled-components/Navbar';
import Section from '../styled-components/Section';
import Title from '../styled-components/Title';
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
      <Section info={info} />
    </Wrapper>
    <Footer />
    </>
  );
}
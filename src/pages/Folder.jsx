import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Detail from "../components/Detail";
import Wrapper from "../components/Wrapper";
import trabajos from "../trabajos.json";

export default function Folder() {
  const [info, setInfo] = useState({});
  const { title } = useParams();
  useEffect(() => {
    let folder = trabajos.find((item) => item.title === title);
    setInfo(folder);
  }, [title]);

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

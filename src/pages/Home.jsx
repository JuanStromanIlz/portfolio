import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import List from "../components/List";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import trabajos from "../trabajos.json";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Banner />
        <Title id="trabajos">Trabajos</Title>
        <List list={trabajos} />
        <About />
      </Wrapper>
      <Footer />
    </>
  );
}

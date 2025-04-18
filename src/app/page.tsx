import About from "./about/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Program from "./program/page";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Program />
      <Footer/>
    </>
  );
}

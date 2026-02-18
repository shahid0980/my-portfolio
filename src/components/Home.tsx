import Banner from "../subComponents/banner";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";


function Home() {
  return (
    <>
      <Banner />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default Home;

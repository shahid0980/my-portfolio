import Banner from "../subComponents/banner";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
// import Projects from "./Projects";
// import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Banner />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}

export default Home;

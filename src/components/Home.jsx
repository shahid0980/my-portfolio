import Banner from "../subComponents/banner.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Testimonials from "./Testimonials.jsx";
import Contact from "./Contact.jsx";

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

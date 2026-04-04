import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Freelancer from "./components/sections/Freelancer";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <About />
        <Freelancer />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

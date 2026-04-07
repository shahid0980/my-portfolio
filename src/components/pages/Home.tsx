import Footer from "../layout/Footer";
import Header from "../layout/Header";
import About from "../sections/About";
import BlogSection from "../sections/Blog";
import Contact from "../sections/Contact";
import Freelancer from "../sections/Freelancer";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";

export function Home() {
    return (
        <>

            <Hero />
            <About />
            <Freelancer />
            <Skills />
            <BlogSection />
            <Contact />

        </>

    )
}
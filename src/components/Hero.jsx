import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Button } from "../subComponents/buttons";
import ShahidSystem from "../subComponents/ShahidSystem";

const Hero = () => {
  return (
    <section id="home" className="section-padding max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              👋 Hello, World
            </p>
            {/* {bg-linear-to-r to-blue-100 from-blue-200 text-transparent bg-clip-text} */}
            <h1 className="text-5xl md:text-6xl font-bold ">
              Hi, I'm Shahid{" "}
              <span className="inline-block animate-wave">👋</span>
            </h1>
          </div>

          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <p className="flex items-center">
              <span className="mr-2">📍</span>
              Based in India
            </p>
            <p className="flex items-center">
              <span className="mr-2">💼</span>
              Full Stack Developer
            </p>
            <p className="flex items-center">
              <span className="mr-2">✨</span>
              Passionate about creating digital experiences
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <div className="md:hidden">
              <Button text="Download CV" />
            </div>
            <div className="hidden md:inline-block">
              <Button text="Get in Touch" />
            </div>
            <Button text="View Skills" />
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/shahid0980"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaGithubSquare className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahid-khan-073157157/"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/shahid_khan__0980/"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaSquareInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <ShahidSystem />
      </div>
    </section>
  );
};

export default Hero;

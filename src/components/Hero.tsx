import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Button } from "../subComponents/buttons";
import ShahidSystem from "../subComponents/ShahidSystem";
import AutoHighlightEditor from "../subComponents/AutoHighlightEditor";

const Hero = () => {
  function handleDownload() {
    const link = document.createElement("a");
    link.href = "shahidkhan_CV.pdf";
    link.download = "shahid-resume.pdf";
    link.click();
  }
  return (
    <section id="home" className="section-padding max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <AutoHighlightEditor typingSpeed={50} />
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

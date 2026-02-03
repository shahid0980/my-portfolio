import projectImg from "../assets/project1.png";
import { Button } from "../subComponents/buttons";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
    image: projectImg,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
    image: projectImg,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization and scheduled posting.",
    image: projectImg,
    tags: ["React", "GraphQL", "AWS", "Docker"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-indigo-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm max-h-10 overflow-hidden ">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button text="Live Demo" />

                  <Button text="View Code" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

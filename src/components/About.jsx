import React from "react";
import aboutPhoto from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutPhoto}
              alt="About Sagar"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              I'm a passionate developer who loves to create
            </h3>
            <p>
              I’m a passionate Full Stack Developer with a strong foundation in
              building scalable, efficient, and user-friendly web applications.
              I work across both frontend and backend, turning ideas into
              reliable digital products.
            </p>
            <p>
              My core skill set includes React.js, Node.js, MongoDB, PostgreSQL,
              Docker, AWS, and Python. I enjoy designing clean user interfaces,
              developing secure backend APIs, and deploying applications using
              modern cloud and container technologies.
            </p>
            <p>
              I hold a Bachelor’s degree in Science, which has strengthened my
              analytical thinking and problem-solving approach. I’m always eager
              to learn new technologies, improve my craft, and build solutions
              that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

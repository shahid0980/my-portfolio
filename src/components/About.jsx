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
              I'm a full-stack developer with a passion for building beautiful,
              functional web applications. With several years of experience in
              the industry, I've worked on a wide range of projects from small
              business websites to large-scale enterprise applications.
            </p>
            <p>
              My journey in tech started with curiosity and has evolved into a
              deep commitment to creating solutions that make a difference. I
              believe in writing clean, maintainable code and staying up-to-date
              with the latest technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
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

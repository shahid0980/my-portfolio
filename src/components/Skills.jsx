import React from 'react';

const skills = [
  { name: 'Figma', icon: '🎨', color: 'bg-pink-100 text-pink-600' },
  { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-600' },
  { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-600' },
  { name: 'TypeScript', icon: '📘', color: 'bg-blue-100 text-blue-600' },
  { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-600' },
  { name: 'Next.js', icon: '▲', color: 'bg-gray-100 text-gray-600' },
  { name: 'Tailwind', icon: '💨', color: 'bg-cyan-100 text-cyan-600' },
  { name: 'Docker', icon: '🐳', color: 'bg-blue-100 text-blue-600' },
  { name: 'Git', icon: '🔀', color: 'bg-orange-100 text-orange-600' },
  { name: 'AWS', icon: '☁️', color: 'bg-yellow-100 text-yellow-600' },
  { name: 'GraphQL', icon: '◈', color: 'bg-pink-100 text-pink-600' },
  { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-100 text-blue-600' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with regularly
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center`}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

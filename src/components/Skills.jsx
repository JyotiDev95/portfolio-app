import React from 'react';

const Skills = () => {
  const skills = [
    'React.js', 'JavaScript (ES6+)', 'TypeScript', 'Redux', 'Tailwind', 'HTML5', 'CSS3', 'Bootstrap',
    'Vite', 'Webpack', 'Jest', 'Firebase', 'REST APIs', 'Git & GitHub'
  ];
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-semibold mb-6 text-indigo-600">Skills</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
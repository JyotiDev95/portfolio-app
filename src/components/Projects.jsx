// // src/components/Projects.jsx
// import React, { useState } from "react";
// import { ExternalLink } from "lucide-react";

// import blogImg from "../assets/projects/Typing-Test.png";
// import travelImg from "../assets/projects/Typing-Test.png";
// import ecommerceImg from "../assets/projects/Typing-Test.png";


// const allProjects = [
//   {
//     name: "DevStream Blog Platform",
//     desc: "A full-stack blog app built with React, Firebase Auth, Firestore, and Tailwind. Includes category filters, user login, and real-time updates.",
//     live: "https://devstream-blog.vercel.app",
//     github: "https://github.com/jyotiprakash-dev/devstream-blog",
//     tech: ["React", "Tailwind", "Firebase"],
//     image: blogImg
//   },
//   {
//     name: "Travel & Tour Website",
//     desc: "Responsive travel landing page built using HTML, CSS, JS, and GSAP animations. Focused on scroll interactivity and custom transitions.",
//     live: "https://jyotiprakash-react-portfolio.vercel.app/projects",
//     github: "#",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: travelImg
//   },
//   {
//     name: "E-commerce React UI",
//     desc: "Modern e-commerce UI built with React, Tailwind, and Framer Motion. Fully responsive, with product grid, hover effects, and dark mode support.",
//     live: "https://jyoti-prakash-portfolio.vercel.app/",
//     github: "#",
//     tech: ["React", "Tailwind", "Framer Motion"],
//     image: ecommerceImg
//   },
//   {
//     name: "Portfolio v1",
//     desc: "Personal portfolio website with responsive layout and smooth scroll interactions.",
//     live: "https://jyotiprakash-react-portfolio.vercel.app/",
//     github: "#",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: ecommerceImg
//   },
//   {
//     name: "Portfolio v2",
//     desc: "Updated portfolio showcasing modern transitions and animations.",
//     live: "https://jyoti-prakash-portfolio.vercel.app/",
//     github: "#",
//     tech: ["React", "Framer Motion"],
//     image: blogImg
//   },
//   {
//     name: "Mini Blog UI",
//     desc: "UI concept for blog listings with dark/light theme toggles.",
//     live: "#",
//     github: "#",
//     tech: ["React", "Tailwind"],
//     image: travelImg
//   },
//   {
//     name: "Landing Page UI",
//     desc: "Simple product landing page concept with Tailwind styling.",
//     live: "#",
//     github: "#",
//     tech: ["HTML", "CSS"],
//     image: blogImg
//   },
//   {
//     name: "Auth Flow UI",
//     desc: "Login/Signup flow design with form validation and routing.",
//     live: "#",
//     github: "#",
//     tech: ["React", "Firebase"],
//     image: ecommerceImg
//   }
// ];

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false);
//   const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

//   return (
//     <section id="projects" className="py-20 px-6 text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-center text-4xl font-bold mb-2 text-gray-700 dark:text-white">Projects I have built</h2>
//             <p className="text-center text-lg text-gray-400 mb-4">Some things I've built recently</p>
//         <div className="h-1 w-52 mx-auto mt-4 mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-transparent rounded-full"></div>
 

//         <div className="grid gap-10 md:grid-cols-2">
//           {visibleProjects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group bg-zinc-800 rounded-xl shadow-xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-pink-500/30"
//             >
//               <img src={project.image} alt={project.name} className="w-full h-52 object-cover" />
//               <div className="p-6 space-y-4">
//                 <h3 className="text-xl font-semibold group-hover:text-pink-400 transition">
//                   {project.name}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {project.tech.map((tag, i) => (
//                     <span key={i} className="bg-pink-700/10 text-pink-400 px-3 py-1 text-xs rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-t border-zinc-700">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-teal-400 hover:underline flex items-center gap-1 z-10"
//                 >
//                   Live Demo <ExternalLink size={14} />
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-gray-400 hover:text-white z-10"
//                 >
//                   GitHub
//                 </a>
//               </div>
//               <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-md"></div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="px-6 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition"
//           >
//             {showAll ? "Show Less" : "Show More"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
// src/components/Projects.jsx
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

import blogImg from "../assets/projects/Typing-Test.png";
import travelImg from "../assets/projects/Typing-Test.png";
import ecommerceImg from "../assets/projects/Typing-Test.png";

const allProjects = [
  {
    name: "DevStream Blog Platform",
    desc: "A full-stack blog app built with React, Firebase Auth, Firestore, and Tailwind. Includes category filters, user login, and real-time updates.",
    live: "https://devstream-blog.vercel.app",
    github: "https://github.com/jyotiprakash-dev/devstream-blog",
    tech: ["React", "Tailwind", "Firebase"],
    image: blogImg
  },
  {
    name: "Travel & Tour Website",
    desc: "Responsive travel landing page built using HTML, CSS, JS, and GSAP animations. Focused on scroll interactivity and custom transitions.",
    live: "https://jyotiprakash-react-portfolio.vercel.app/projects",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    image: travelImg
  },
  {
    name: "E-commerce React UI",
    desc: "Modern e-commerce UI built with React, Tailwind, and Framer Motion. Fully responsive, with product grid, hover effects, and dark mode support.",
    live: "https://jyoti-prakash-portfolio.vercel.app/",
    github: "#",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: ecommerceImg
  },
  {
    name: "Portfolio v1",
    desc: "Personal portfolio website with responsive layout and smooth scroll interactions.",
    live: "https://jyotiprakash-react-portfolio.vercel.app/",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ecommerceImg
  },
  {
    name: "Portfolio v2",
    desc: "Updated portfolio showcasing modern transitions and animations.",
    live: "https://jyoti-prakash-portfolio.vercel.app/",
    github: "#",
    tech: ["React", "Framer Motion"],
    image: blogImg
  },
  {
    name: "Mini Blog UI",
    desc: "UI concept for blog listings with dark/light theme toggles.",
    live: "#",
    github: "#",
    tech: ["React", "Tailwind"],
    image: travelImg
  },
  {
    name: "Landing Page UI",
    desc: "Simple product landing page concept with Tailwind styling.",
    live: "#",
    github: "#",
    tech: ["HTML", "CSS"],
    image: blogImg
  },
  {
    name: "Auth Flow UI",
    desc: "Login/Signup flow design with form validation and routing.",
    live: "#",
    github: "#",
    tech: ["React", "Firebase"],
    image: ecommerceImg
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2 text-gray-700 dark:text-white">Projects I have built</h2>
        <p className="text-center text-lg text-gray-400 mb-4">Some things I've built recently</p>
        <div className="h-1 w-52 mx-auto mt-4 mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-transparent rounded-full"></div>

        <div className="grid gap-10 md:grid-cols-2">
          {visibleProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-800 rounded-xl shadow-xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] "
            >
              <div className="flex relative w-full h-64">
                <img
                  alt={project.name}
                  src={project.image}
                  className="absolute inset-0 w-full h-full object-contain bg-white object-center rounded-xl border-2 border-s-slate-200"
                />
                <div className="px-8 py-10 relative h-full w-full border-2 shadow-xl shadow-pink-500/30 rounded-xl bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1 mt-0 sm:mt-8">
                    {project.tech.join(", ")}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.name}
                  </h1>
                  <p className="leading-relaxed text-slate-200 lg:block hidden">
                    {project.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-t border-zinc-700">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-500 hover:underline flex items-center gap-1 z-10"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white z-10"
                >
                  GitHub
                </a>
              </div>
              <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-md"></div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


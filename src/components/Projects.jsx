import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import ERPimage from "../assets/projects/ERP-SS.png";
import Foodu from "../assets/projects/Foodu-SS.png";
import ERPDemoo from "../assets/projects/Welcome - One 87.mp4";
import BlogImg from "../assets/projects/Blog-SS.png"
import EcommerceImg from "../assets/projects/E-com-shop.png"


const allProjects = [
    {
  name: "ValconHub ERP Platform",
  desc: "A feature-rich ERP solution built for ValconHub to manage purchase orders (POs), inventory, employee workflows, and payroll operations. It features a responsive React UI, real-time data handling, secure authentication, and role-based access tailored for operational efficiency.",
  live: ERPDemoo,
//  github: "https://github.com/jyotiprakash-dev/devstream-blog", // update if you have the real repo
  tech: ["React", "Tailwind","Redux", "SQL", "Role-based Access", "laravel"],
  image: ERPimage
  },
  {
  name: "Foodu App",
  desc: "A modern food delivery web app built with React and Tailwind CSS. It features Redux-powered state management, real-time API integration, restaurant listings, cart handling, and a responsive UI for seamless user experience.",
  live: "https://foodu-app.vercel.app/",
  github: "https://github.com/JyotiDev95/foodu-app",
  tech: ["React", "Tailwind", "Redux", "formik", "react-router"],
  image: Foodu
  },
   {
   name: "Ecom-Shop Buy Busy",
  desc: "A modern e-commerce web app built with React and MUI. It includes dynamic product listings via API, Redux-based cart system, Firebase backend, and Toastify-powered notifications — all wrapped in a responsive and clean UI.",
  live: "https://ecom-shop-coral.vercel.app/",
  github: "https://github.com/JyotiPrakash95/Ecom-shop",
  tech: ["React", "MUI", "Redux", "API", "Firebase", "Toastify"],
    image: EcommerceImg
  },
  {
    name: "Blog App",
    desc: "It's offers a seamless experience, allowing users to effortlessly add, remove, and explore posts. Timestamps capture of creation for each entry.",
    live: "https://blog-app-olive-phi.vercel.app/",
    github: "https://github.com/JyotiPrakash95/blog-app",
    tech: ["React", "Firebase-CRUD"],
    image: BlogImg
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 text-white">
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
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1 mt-0">
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
               { project.github? <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white z-10"
                >
                  GitHub
                </a> : null}
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


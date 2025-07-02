import React from 'react';
import profileImg from "../assets/girl-img.png";
import { motion } from 'framer-motion';
import SocialIcon from './SocialIcon';
import { Link } from 'lucide-react';
import CVpdf from "../assets/Jyoti Prakash-Dev-July-CV.pdf"

const Hero = () => {
  return (
    <section className="min-h-screen  hero-sec relative">
      <SocialIcon />
      <div className='flex items-center justify-center gap-2 px-6 py-12 hero-sec relative'>
        <div className='w-full flex flex-col items-center xl:flex-row xl:w-[1250px] xl:items-end xl:gap-10'>
          {/* Left: Image */}
          <div className="w-full flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={profileImg}
                alt="Jyoti Prakash"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.3 }}
            className="w-full md:w-1/2 space-y-6 max-w-2xl"
          >
            <div className="bg-gray-900 p-8 rounded-lg text-gray-300 text-lg space-y-6">
              <h1 className='text-6xl font-bold text-white'>Jyoti Prakash</h1>
              <h2 className='text-2xl font-bold text-gray-400'>I craft modern and scalable web experiences.</h2>

              <p>I’m a Frontend Developer with several years of experience building modern, scalable, and responsive web applications using React.js, TypeScript, and Tailwind CSS.</p>
              <p>I translate design systems into accessible, user-friendly components aligned with business goals. With strong skills in state management, API integration, and frontend architecture, I deliver clean, efficient code and thrive in collaborative, growth-focused environments.</p>
              <a
                href={CVpdf}
                download
                className="relative z-10 px-4 max-w-max py-2 overflow-hidden border-spacing-1 rounded-full group flex justify-center gap-2 items-center shadow-xl text-lg text-gray-700 bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 gradient-hover transition-colors delay-200
"
              >
                Download CV
                <svg
                  class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    class="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
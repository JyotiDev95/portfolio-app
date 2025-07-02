// src/components/TechLogoSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import tailwind from "../assets/logos/tailwind.svg";
import mui from "../assets/logos/MUI-logo.svg";
import css from "../assets/logos/css3-original.svg";
import figma from "../assets/logos/figma.svg";
import firebase from "../assets/logos/firebase-plain.svg";
import html from "../assets/logos/html5-original.svg";
import js from "../assets/logos/javascript-original.svg";
import chakra from "../assets/logos/chakra-ui.svg";
import webpack from "../assets/logos/webpack.svg";
import git from "../assets/logos/git-original.svg";
import node from "../assets/logos/nodejs-original.svg"; 
import jest from "../assets/logos/jest.svg";
import vite from "../assets/logos/vite.svg";
import wordpress from "../assets/logos/wordpress-plain.svg"
import redux from "../assets/logos/redux.svg";

const techSkills = [
  // { name: "GraphQL", img: graphql },
      { name: "html5", img: html },
    { name: "CSS3", img: css },
        { name: "JavaScript (ES6+)", img: js },
    { name: "Tailwind CSS", img: tailwind },
  { name: "MUI", img: mui },
  { name: "Figma", img: figma },
  { name: "webpack", img: webpack },
    { name: "Git & GitHub", img: git },
      { name: "Node Js", img: node },
  { name: "Firebase", img: firebase },
 { name: "Chakra UI", img: chakra },
 { name: "jest", img: jest },
  { name: "Vite", img: vite },
   { name: "Redux ToolKit", img: redux },
    { name: "Wordpress", img: wordpress },
];

const TechLogoSlider = () => {
  return (
    <section className=" text-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-700 dark:text-white">Tech Skills</h2>
        <p className="text-gray-400 italic mt-2">
          Elevating Projects with Cutting-Edge Technical Skills
        </p>
        <div className="h-1 w-52 mx-auto mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {techSkills.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-3 p-4 bg-zinc-900 rounded-xl shadow hover:shadow-pink-500/20 transition duration-300">
                <img src={tech.img} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-sm text-gray-200">{tech.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechLogoSlider;

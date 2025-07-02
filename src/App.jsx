import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperienceTimeline from './components/ExperienceTimeline';
import { useEffect } from 'react';
import './App.css'
import SocialIcon from './components/SocialIcon';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechLogoSlider from './components/TechLogoSlider';


const App = () => {

  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);
  return (
<div className=" font-inter text-white bg-gradient-to-r from-rose-200 via-white via-30% to-white dark:from-[#670334] dark:to-gray-900">
      <Header />

      <Hero />
        <TechLogoSlider />
      <ExperienceTimeline />
    
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

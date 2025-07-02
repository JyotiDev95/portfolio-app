// src/components/Header.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 bg-white dark:bg-gray-900 fixed z-50 max-w-max bottom-1 max-h-max left-1/2 -translate-x-1/2 shadow-[-1px_-2px_8px_1px_rgb(236,72,153)]">
      {/* <h1 className="text-2xl font-bold text-indigo-600">Jyoti Prakash</h1> */}
      <div className="flex items-center gap-4 text-gray-700 dark:text-white">
        <nav className="space-x-4">
           <ThemeToggle />
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
       
      </div>
    </header>
  );
};

export default Header;

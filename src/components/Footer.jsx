import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
      © {new Date().getFullYear()} Jyoti Prakash. All rights reserved.
    </footer>
  );
};

export default Footer;
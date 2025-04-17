import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Clifford Donkor</h2>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Clifford Donkor. All rights
              reserved.
            </p>
            <p className="text-gray-400">Made with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

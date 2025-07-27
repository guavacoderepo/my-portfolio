import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 mt-12 p-3 flex flex-col justify-center items-center text-white js-scroll hideScroll">
      <div className="social-links flex">
         <a
            className="sm-link hover:text-gray-300"
            href="https://github.com/guavacoderepo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bx bxl-github text-2xl"></i>
          </a>
          <a
            className="sm-link hover:text-gray-300"
            href="https://www.linkedin.com/in/everistus-nwogo-a04178ab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin text-2xl"></i>
        </a>
      </div>
      <div className="copy flex flex-col items-center mt-20">
        <p>&copy; Everistus Nwogo @2025</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};


export default Footer;

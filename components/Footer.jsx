import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto p-4">
      <hr />
      <p className="flex justify-center m-5 text-gray-600 text-sm">
        Made by&nbsp;
        <a href="https://github.com/SanaR511" className="footerlink">
          Sana
        </a>
        &nbsp;,&nbsp;
        <a href="" className="footerlink">
          Megan
        </a>
        &nbsp;, and&nbsp;
        <a href="" className="footerlink">
          Mary
        </a>
        &nbsp;for&nbsp;
        <a
          href="https://ccse.kennesaw.edu/events/hackathon-fall-2022.php"
          className="footerlink"
        >
          KSU Fall 2022 Hackathon
        </a>
      </p>
    </footer>
  );
};

export default Footer;

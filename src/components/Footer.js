import React from "react";
import { Link } from "gatsby";

//assets
import navLogo from "../images/svg/nav.svg";
import insta from "../images/svg/instagram.svg";
import facebook from "../images/svg/facebook.svg";
import linkedin from "../images/svg/linkedin.svg";

const Footer = () => {
  return (
    <footer className="hidden lg:flex lg:px-12 justify-between bg-white lg:bg-opacity-70 hover:bg-opacity-100  shadow-lg">
      <div className="py-1 flex items-center px-2">
        <img className="h-7 w-14 mr-5" src={navLogo} alt="Logo" />
      </div>

      {/* Social media buttons */}
      <div className="flex mr-4">
        <div className="flex items-center space-x-1 mr-2 ">
          <a
            href="https://www.instagram.com/thelearniverse.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="instagram" className="w-6 h-6 " />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61559944342623"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" className="w-6 h-6" />
          </a>
          <a
            href="http://www.linkedin.com/in/the-learniverse"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="facebook" className="w-6 h-6" />
          </a>
        </div>

        <Link to="/" className="content-center text-sm font-semibold underline">
          PRIVACY POLICY
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

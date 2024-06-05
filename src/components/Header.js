import React, { useState } from "react";
import { Link } from "gatsby";

//components
import Button from "./Button";
import MobileSidebar from "./MobileSidebar";

//assets
import navLogo from "../images/svg/logoxl.svg";
import hamburger from "../images/svg/hamburger.svg";

const Header = () => {
  const [MobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <header className="z-10 flex lg:px-12 sticky top-0 justify-between bg-white lg:bg-opacity-90 hover:bg-opacity-100 shadow-lg items-center backdrop-blur-sm">
      {MobileSidebarOpen === true ? (
        <MobileSidebar
          isOpen={MobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      ) : (
        <>
          <div className="px-2 py-1">
            <Link to="/">
              <img className="h-5 lg:h-8 w-15" src={navLogo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex px-2 py-1 items-center">
            <Link
              to="#aboutus"
              activeClassName="active"
              activeStyle={{ color: "#F15956", fontWeight: "600" }}
              className="text-sm font-medium mr-5 hover:text-button"
            >
              ABOUT US
            </Link>
            <Link
              to="#services"
              activeClassName="active"
              activeStyle={{ color: "#F15956", fontWeight: "600" }}
              className="text-sm font-medium mr-5 hover:text-button"
            >
              SERVICES
            </Link>
            <Link
              to="#contactus"
              activeClassName="active"
              activeStyle={{ color: "#F15956", fontWeight: "600" }}
              className="text-sm font-medium mr-5 hover:text-button"
            >
              CONTACT US
            </Link>
          </div>
          <div className="lg:hidden px-2 py-1">
            <button
              className="p-3 bg-button flex bg-secondary self-center rounded-full shadow-lg"
              onClick={() => setMobileSidebarOpen(!MobileSidebarOpen)}
            >
              <img src={hamburger} alt="hamburger" />
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

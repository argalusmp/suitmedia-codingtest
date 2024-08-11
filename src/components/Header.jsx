import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-[#ff6600] bg-opacity-90 shadow-md transition-transform duration-300 ease-in-out z-10 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">
          <img src="logo.png" alt="logo" className="h-24 me-3 pl-8 sm:h-10" />
        </div>

        <nav className="space-x-8 mr-28 text-white">
          <NavLink
            to="/work"
            className={`text-lg font-medium ${
              isActive("/work")
                ? " border-b-2 border-white"
                : ""
            }`}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={`text-lg font-medium ${
              isActive("/about")
                ? "border-b-2 border-white"
                : ""
            }`}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={`text-lg font-medium ${
              isActive("/services")
                ? "border-b-2 border-white"
                : ""
            }`}
          >
            Services
          </NavLink>
          <NavLink
            to="/ideas"
            className={`text-lg font-medium ${
              isActive("/ideas")
                ? "border-b-2 border-white"
                : ""
            }`}
          >
            Ideas
          </NavLink>
          <NavLink
            to="/careers"
            className={`text-lg font-medium ${
              isActive("/careers")
                ? " border-b-2 border-white"
                : ""
            }`}
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className={`text-lg font-medium ${
              isActive("/contact")
                ? "border-b-2 border-white"
                : ""
            }`}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

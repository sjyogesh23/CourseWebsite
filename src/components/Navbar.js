import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isNavLinkActive = (path) => {
    return location.pathname === path
      ? "opacity-100 transition ease-in-out duration-500"
      : "opacity-50 transition ease-in-out duration-500";
  };

  return (
    <nav className="bg-sky-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Edu-App
        </Link>
        <div className="space-x-4">
          <Link to="/" className={`text-white ${isNavLinkActive("/")}`}>
            Dashboard
          </Link>
          <Link
            to="/courses"
            className={`text-white ${isNavLinkActive("/courses")}`}
          >
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

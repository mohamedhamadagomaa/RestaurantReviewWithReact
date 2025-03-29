import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";
import Image from "../assets/Logo.png";

const themes = {
  winter: "winter",
  forest: "forest",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  const handleTheme = () => {
    const { winter, forest } = themes;
    const newTheme = theme == winter ? forest : winter;
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-neutral">
      <div className="navbar align-element">
        {/* Dropdown menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden ">
            <FaBarsStaggered className="h-6 w-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>

        {/* Logo */}
        <div className="navbar-start" tabIndex={0}>
          <div className="hidden lg:flex  items-center">
            <NavLink to={"/"}>
              <img src={Image} alt="Logo" className="h-14 w-24" />
            </NavLink>
          </div>
        </div>

        {/* NavLinks */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal lg:text-stone-100">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "Restaurants", text: "Restaurants" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return <li key={id}>
            <NavLink className={"capitalize text-base"} to={url} >{text}</NavLink>
        </li>;
      })}
    </>
  );
};

export default NavLinks;

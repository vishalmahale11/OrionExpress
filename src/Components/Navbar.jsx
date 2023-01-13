import React from "react";
import { NavLink } from "react-router-dom";

let links = [
  {
    to: "/",
    title: "Product",
  },
  {
    to: "/addtocart",
    title: "Add to cart",
  },
];

const Navbar = () => {
  return (
    <div>
      {links.map((item) => (
        <NavLink key={item.to} to={item.to}>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;

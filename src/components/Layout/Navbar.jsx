import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import style from "../../styles/style";

const Navbar = ({ active }) => {
  return (
    <div className={`${style.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => {
          return (
            <div className="flex" key={index}>
              <Link
                to={i.url}
                className={`${
                  active === index + 1 ? "text-[#17dd1f]" : "text-[#fff]"
                } font-[500] px-6 cursor-pointer"}`}
              >
                {i.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import { Menu } from '../../../helpers/anim'
import linksList from '../../../data/links.json'
import "./Body.scss";
import { Link } from "react-router-dom";

export const Body = ({ isActive, setIsActive }) => {
  return (
    <motion.div
      className="nav"
      variants={Menu.menuOpen}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="nav__content">
        <motion.div
          className="container"
          variants={Menu.menuContainer}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {linksList.map((curLink, index) => (
            <Link
              key={`navLink_${index}`}
              to={curLink.link}
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="nav__link"
            >
              {curLink.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

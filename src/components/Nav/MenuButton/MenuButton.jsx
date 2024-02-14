import React from "react";
import { motion } from "framer-motion";

import "./MenuButton.scss";

export const MenuButton = ({ isActive, toggleMenu }) => {
  return (
    <div className="navigation__button">
      <motion.div
        className="navigation__button_slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
            Menu
          </div>
        </div>
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
          Close
          </div>
        </div>
      </motion.div>
    </div>
  );
};

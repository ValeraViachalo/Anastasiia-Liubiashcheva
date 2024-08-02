import React, { useContext } from "react";
import "./Nav.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import linksList from "../../../data/links.json";
import { LinkBtn } from "../../Button/Button";
import { anim, MenuAnim } from "../../../helpers/anim";

export const Nav = ({ setIsActive }) => {
  return (
    <>
      <motion.div className="navigation" 
      {...anim(MenuAnim.menuOpen)}
      >
        <div className="navigation__top-link container">
          <motion.span
            className="navigation__link"
            onClick={() => setIsActive(false)}
            {...anim(MenuAnim.linksList)}
            custom={1 * 0.25}
          >
            <LinkBtn href="/contact" classes="navigation__link">
              Work with me
            </LinkBtn>
          </motion.span>
        </div>
        <nav className="navigation__list container">
          {linksList.map((currLink, i) => {
            return (
              <motion.span
                className="navigation__link"
                onClick={() => setIsActive(false)}
                key={i}
                {...anim(MenuAnim.linksList)}
                custom={(i + 1) * 0.25}
              >
                <LinkBtn href={currLink.link} classes="navigation__link">
                  {currLink.name}
                </LinkBtn>
              </motion.span>
            );
          })}
          <motion.span
            className="navigation__link"
            onClick={() => setIsActive(false)}
            {...anim(MenuAnim.linksList)}
            custom={(linksList.length + 1) * 0.25}
          >
            <LinkBtn href="/contact" classes="navigation__link">
              Contacts
            </LinkBtn>
          </motion.span>
        </nav>
      </motion.div>

        <motion.div className="navigation__background" {...anim(MenuAnim.background)}/>
        <motion.div className="navigation__background--blur" {...anim(MenuAnim.backgroundFilter)}/>

    </>
  );
};

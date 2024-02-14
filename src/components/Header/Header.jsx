import React, { useRef, useState } from "react";
import { Logo } from "../Logo/Logo";
import linksList from "../../data/links.json";

import "./Header.scss";
import { Header as HeaderAnim } from '../../helpers/anim';
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const [isShown, setShown] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.hero',
      start: '50% top',
      end: '50% top',
      scrub: true,
      onEnter: () => setShown(true),
      onLeaveBack: () => setShown(false),
    })
  })

  return (
    <AnimatePresence mode="wait">
    <motion.header
      className="header" 
      variants={HeaderAnim.HomePresence}
      initial="initial"
      animate={isShown ? "animate" : "exit"}
    >
      <div className="left">
        <Logo className="header__logo" />
        <Link to="/" className="body-text-5 link-medium uppercase">
          Work With Me
        </Link>
      </div>

      <div className="header__wrapper">
        <ul className="header__list-links">
          {linksList.map((currLink, index) => (
            <li key={`header_link_${index}`}>
                <Link
                  className="body-text-5 link-medium uppercase"
                  to={currLink.link}
                >
                  <span>{currLink.name}</span>
                </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="right">
        <div className="header__locale">
          <Link className="body-text-5 link-medium uppercase">En</Link>
          <Link className="body-text-5 link-medium uppercase">Ua</Link>
        </div>

        <Link className="body-text-5 link-medium uppercase">Contact</Link>
      </div>

      <div className="header__nav">
        <Nav />
      </div>
    </motion.header>
    </AnimatePresence>
  );
};

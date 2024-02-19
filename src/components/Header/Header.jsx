import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import linksList from "../../data/links.json";

import "./Header.scss";
import { Header as HeaderAnim } from "../../helpers/anim";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";

import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

export const Header = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isShown, setShown] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  const handleHeaderClass = (lang) => {
    return classNames(
      "body-text-5 link-medium uppercase header__locale-button",
      {
        ["header__locale-button--active"]: language === lang,
      }
    );
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "50% top",
      end: "50% top",
      scrub: true,
      onEnter: () => setShown(true),
      onLeaveBack: () => setShown(false),
    });
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        className="header"
        variants={HeaderAnim.HomePresence}
        initial="initial"
        animate={isShown ? "animate" : "exit"}
      >
        <div className="left">
          <Logo className="header__logo" color="#212529" />
          <Link to="/" className="body-text-5 link-medium uppercase">
            {t("Work With Me")}
          </Link>
        </div>

        <div className="header__wrapper">
          <ul className="header__list-links">
            {linksList.map((currLink, index) => (
              <li key={`header_link_${index}`} className="header__link-wrapper">
                <Link
                  className="body-text-5 link-medium uppercase header__link"
                  to={currLink.link}
                >
                  {t(currLink.name)}
                </Link>
                <Link
                  className="body-text-5 link-medium uppercase header__link"
                  to={currLink.link}
                >
                  {t(currLink.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <div className="header__locale">
            <div className="header__locale-wrapper">
              <button
                className={handleHeaderClass("en")}
                onClick={() => handleLanguageChange("en")}
              >
                {t("En")}
              </button>
              <button
                className={handleHeaderClass("en")}
                onClick={() => handleLanguageChange("en")}
              >
                {t("En")}
              </button>
            </div>
            <div className="header__locale-wrapper">
              <button
                className={handleHeaderClass("ua")}
                onClick={() => handleLanguageChange("ua")}
              >
                {t("Ua")}
              </button>
              <button
                className={handleHeaderClass("ua")}
                onClick={() => handleLanguageChange("ua")}
              >
                {t("Ua")}
              </button>
            </div>
          </div>

          <Link className="body-text-5 link-medium uppercase">
            {t("Contact")}
          </Link>
        </div>

        <div className="header__nav">
          <Nav />
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

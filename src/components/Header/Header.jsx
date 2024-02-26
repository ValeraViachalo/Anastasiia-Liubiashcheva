import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import linksList from "../../data/links.json";

import "./Header.scss";
import { Header as HeaderAnim } from "../../helpers/anim";
import { Nav } from "../Nav/Nav";
import { Link, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";

import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import { Button, LinkBtn } from "../Button/Button";

export const Header = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const isHomePage = pathname.split("/")[1];

  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isShown, setShown] = useState(false);
  const [isShownBtn, setShownBtn] = useState(false);

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
    if (!isHomePage) {
      ScrollTrigger.create({
        trigger: ".hero",
        start: "50% top",
        end: "50% top",
        scrub: true,
        onEnter: () => setShown(true),
        onLeaveBack: () => setShown(false),
      });

      ScrollTrigger.create({
        trigger: ".universe",
        start: "15% center",
        end: "15% center",
        scrub: true,
        onEnter: () => setShownBtn(true),
        onLeaveBack: () => setShownBtn(false),
      });
    }
  }, [isHomePage]);

  return (
    <>
      <motion.header
        className="header"
        variants={HeaderAnim.HomePresence}
        initial="initial"
        animate={isShown || isHomePage ? "animate" : "exit"}
      >
        <div className="left">
          <Link to="/" className="header__logo">
            <Logo className="header__logo-item" color="#212529" />
          </Link>
          <LinkBtn href="/contact">{t("Work With Me")}</LinkBtn>
        </div>

        <div className="header__wrapper">
          <ul className="header__list-links">
            {linksList.map((currLink, index) => (
              <li key={`header_l-${index}`}>
                <LinkBtn href={currLink.link}>{currLink.name}</LinkBtn>
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

          <Link className="body-text-5 link-medium uppercase"></Link>

          <LinkBtn href="/">{t("Contact")}</LinkBtn>
        </div>

        <div className="header__nav">
          <Nav />
        </div>
      </motion.header>

        {isHomePage !== "contact" && (
        <motion.div
          className="contact-button"
          variants={HeaderAnim.ContactBtn}
          initial="initial"
          animate={isShownBtn ? "animate" : "exit"}
        >
          <Button href="/contact" state="secondary">{t("Contact Me.")}</Button>
        </motion.div>)}
        </>
  );
};

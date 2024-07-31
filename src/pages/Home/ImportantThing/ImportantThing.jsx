import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import "./ImportantThing.scss";
import { Button } from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";

const animation = (y) => {
  return {
    initial: (i) => ({
      y: `${y}%`,
      transition: {
        duration: 0.7,
        ease: [0.51, -0.01, 0.21, 1.01],
        delay: 0.075 * i,
      },
    }),
    enter: (i) => ({
      y: "0%",
      transition: {
        duration: 0.7,
        ease: [0.51, -0.01, 0.21, 1.01],
        delay: 0.075 * i,
      },
    }),
  };
};

export default function ImportantThing() {
  const { t } = useTranslation();

  return (
    <section className="important-thing">
      <SwiperDesktop />
      <SwiperTouch />
      <div className="important-thing__wrapper container">
        <div className="steps__button steps__button--mobile" data-only-mobile--flex>
          <Button state="primary" href="/contact">
            {t("Work with me")}
          </Button>
        </div>

        <div className="left">
          <p className="body-text-3 semiBold left-title" data-only-desktop>
            {t("Feedbacks →")}
          </p>

          <div className="feedbacks">
            <div className="feedbacks__item">
              <p className="body-text-3 fz--tablet-14 fz--mobile-14">
                <span className="body-text qoute fz--mobile-24">“</span>
                {t(
                  "I have talked to many people about this but in 1.5 hours with you, I have drafted three pages with ideas and concepts."
                )}
              </p>
              <p className="feedbacks__name body-text-3 semiBold fz--tablet-14 fz--mobile-14">
                {t("Sasha, NYC")}
              </p>
            </div>
            <div className="feedbacks__item">
              <p className="body-text-3 fz--tablet-14 fz--mobile-14">
                <span className="body-text qoute fz--mobile-24">“</span>
                {t(
                  "you’re the first person to unpack my potential through my mission into business processes"
                )}
              </p>
              <p className="feedbacks__name body-text-3 semiBold fz--tablet-14 fz--mobile-14">
                {t("Ksenia, Tenerife")}
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="title fz--mobile-20">
            {t("Let me be a safe")}
            <br />
            <span className="title__to-left">
              {t("space")}
              <span className="figure-for" />
              <span className="figure-for__n">{t("your")}</span>
            </span>
            <br />
            {t("business vision ツ")}
          </h3>

          <div className="steps">
            <img
              src="/images/Home/Important-thing.webp"
              alt="anastasiia"
              className="steps__image"
            />

            <p
              className="body-text-3 fz--tablet-14 semiBold steps__title"
              data-only-desktop
            >
              {t("Your way with me →")}
            </p>
            <div className="steps__list">
              <ul>
                <li className="body-text-4 steps__item">
                  <p>{t("Finding a spark")}</p>
                  <span>01</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>{t("Analyzing existing resources & journey")}</p>
                  <span>02</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>{t("Building business foundation")}</p>
                  <span>03</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>{t("Creating an ecosystem of products & services")}</p>
                  <span>04</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>{t("Turning vision into real-world results")}</p>
                  <span>05</span>
                </li>
              </ul>

              <div className="steps__button" data-hide-for-mobile--flex>
                <Button state="primary" href="/contact">
                  {t("Work with me")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SwiperDesktop = () => {
  const [isFliped, setFlip] = useState(false);
  const { t } = useTranslation();

  const swiperWrapperRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (swiperWrapperRef.current) {
      ScrollTrigger.refresh(true);
      ScrollTrigger.create({
        trigger: swiperWrapperRef.current,
        start: "25% center",
        end: "top center",
        scrub: true,
        onEnter: () => setFlip(true),
        onLeaveBack: () => setFlip(false),
      });
    }
  }, [swiperWrapperRef.current]);
  
  return (
    <div className="slider-wrapper" ref={swiperWrapperRef} data-desktop-element--flex>
      <div className="slider">
        <h3 className="book slider__title slider__title-1">
          <motion.p
            variants={animation(-100)}
            initial="initial"
            animate={!isFliped ? "enter" : "initial"}
          >
            {t("but...")}
          </motion.p>
        </h3>
        <div className="slider__text">
          <motion.p
            variants={animation(-100)}
            initial="initial"
            animate={!isFliped ? "enter" : "initial"}
            className="light"
          >
            {t("the most important thing")}
            <br />
            {t("you need to")} <span className="book">{t("know")}</span>
          </motion.p>
        </div>

        <h3 className="slider__title-2">
          <div>
            <div className="mask-text__line">
              <motion.p
                variants={animation(100)}
                initial="initial"
                animate={isFliped ? "enter" : "initial"}
              >
                <span className="semiBold">{t("You`re okay!")}</span>
                {t("It`s not an illusion, let me hear you,")}
              </motion.p>
            </div>
            <div className="mask-text__line">
              <motion.p
                variants={animation(100)}
                initial="initial"
                animate={isFliped ? "enter" : "initial"}
              >
                {t("I`ll show you your scale and how you can get there")}
              </motion.p>
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
};

const SwiperTouch = () => {
  const { t } = useTranslation();

  return (
    <div className="top-title-mobile" data-touch-element--flex>
      <div className="top-title-mobile__top">
        <h3 className="book slider__title slider__title-1 fz--tablet-60 fz--mobile-44">
          {t("but...")}
        </h3>
        <div className="slider__text fz--tablet-24 fz--mobile-16">
          {t("the most important thing")}
          <br />
          {t("you need to")} <span className="book">{t("know")}</span>
        </div>
      </div>

      <h3 className="slider__title-2">
        <div>
          <div className="mask-text__line fz--mobile-20">
            <span className="semiBold">{t("You`re okay!")}</span>
            {t("It`s not an illusion, let me hear you,")}
          </div>
          <div className="mask-text__line fz--mobile-20">
            {t("I`ll show you your scale and how you can get there")}
          </div>
        </div>
      </h3>
    </div>
  );
};

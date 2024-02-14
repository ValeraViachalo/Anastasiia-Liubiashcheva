import React from "react";
import "./Hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".hero", {
      backgroundPositionY: "50lvh",
      clipPath: "inset(0 0 10% 0)",
      // ease: 'none',
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section className="hero">
      <div className="top container">
        <div className="top__left">
          <p className="body-text-4 medium">
            {t("For")}
            <br />
            {t("creators")}
          </p>
          <p className="body-text-4 medium">
            {t("By")}
            <br />
            {t("Anastasiia Liubiashcheva")}
          </p>
        </div>
        <div className="top__right">
          <p className="body-text-4 medium">
            <span className="growth">{t("Business growth since")}</span>
            <br />
            {t("→ 2019")}
          </p>
          <p className="body-text-4 medium">
            {t("United by")}
            <br />
            {t("love")}
          </p>
        </div>
      </div>
      <div className="hero__main">
        <p className="body-text-4 medium">{t("Hi love!")}</p>
        <p className="body-text-4 medium">
          {t("It`s — ")}
          <span className="body-text-4 bold">{t("Anastasiia")}</span>
          {t("here with you")}
        </p>
        <h4 className="hero__title">{t("Your vision partner")}.</h4>
      </div>
    </section>
  );
}

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
      backgroundPositionY: "20lvh",
      clipPath: "inset(0 0 10% 0)",
      // ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
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
          <p className="body-text-4 medium" dangerouslySetInnerHTML={{ __html:  t("For <br /> creators")}} />
          <p className="body-text-4 medium"
          dangerouslySetInnerHTML={{ __html:  t("By <br /> Anastasiia Liubiashcheva")}}
          />
        </div>
        <div className="top__right">
          <p className="body-text-4 medium"
          dangerouslySetInnerHTML={{ __html:  t("<span class='growth'>Business growth since</span><br />→ 2019")}}
          />
          <p className="body-text-4 medium">
            {t("United by")}
            <br />
            {t("love")}
          </p>
        </div>
      </div>
      <div className="hero__main">
        <p className="body-text-4 medium">{t("Hi love!")}</p>
        <p className="body-text-4 medium" dangerouslySetInnerHTML={{ __html:  t("It`s — <span class='body-text-4 bold'>Anastasiia </span> here with you")}} />
        <h4 className="hero__title">{t("Your vision partner")}.</h4>
      </div>
    </section>
  );
}

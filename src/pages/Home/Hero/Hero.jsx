import React from "react";
import "./Hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import { ButtonSecondary } from "../../../components/Button/Button";

export default function Hero() {
  const { t } = useTranslation();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".hero", {
      backgroundPositionY: "15lvh",
      clipPath: "inset(0 0 10% 0)",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
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
          <p
            className="body-text-4 semiBold fz--mobile-9"
            dangerouslySetInnerHTML={{ __html: t("For <br /> creators") }}
          />
          <p
            className="body-text-4 semiBold fz--mobile-9"
            dangerouslySetInnerHTML={{
              __html: t("By <br /> Anastasiia Liubiashcheva"),
            }}
          />
        </div>
        <div className="top__right">
          <p
            className="body-text-4 semiBold fz--mobile-9"
            dangerouslySetInnerHTML={{
              __html: t(
                "<span class='growth'>Business growth since</span><br />→ 2019"
              ),
            }}
          />
          <p className="semiBold body-text-4 fz--mobile-9">
            {t("United by")}
            <br />
            {t("love")}
          </p>
        </div>
      </div>
      <div className="hero__main">
        <p className="body-text-4 medium">{t("Hi love!")}</p>
        <p
          className="body-text-4 medium"
          dangerouslySetInnerHTML={{
            __html: t(
              "It`s — <span class='body-text-4 bold'>Anastasiia </span> here with you"
            ),
          }}
        />
        <h4 className="hero__title fz--mobile-34">
          {t("Your vision partner")}.
        </h4>
      </div>
      <div className="hero__button">
        <ButtonSecondary href="/contact">Contact me</ButtonSecondary>
      </div>
    </section>
  );
}

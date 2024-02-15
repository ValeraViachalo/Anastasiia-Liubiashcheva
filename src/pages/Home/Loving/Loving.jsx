import React from "react";
import { Logo } from "../../../components/Logo/Logo";

import "./Loving.scss";
import { Heart } from "../../../components/Heart/Heart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

export default function Loving() {
  const { t } = useTranslation();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".loving__wrapper", {
      yPercent: 5,
      scrollTrigger: {
        trigger: ".loving",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
  });

  return (
    <section className="loving">
      <div className="loving__wrapper">
        <div className="text">
          <p className="body-text-4">
            {t("My guiding")}
            <br />
            {t("principle has always been:")}
          </p>

          <p className="link-medium">
            {t("”You either do it with love or not at all”")}
          </p>
        </div>

        <Logo className="logo" color="#ffffff" />

        <div className="bottom text">
          <p className="body-text-4">
            {t("This philosophy")}
            <br />
            {t(
              "is not just a choice; it's in my blood, even evident in my surname, which interprets as:"
            )}
          </p>

          <p className="link-medium">{t("”the one who is giving love”")}</p>

          <div className="heart">
            <Heart color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}

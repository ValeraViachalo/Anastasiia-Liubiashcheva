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

  return (
    <section className="loving">
      <div className="loving__wrapper">
        <div className="text">
          <p className="body-text-4 fz--tablet-14 fz--mobile-7">
            {t("My guiding")}
            <br />
            {t("principle has always been:")}
          </p>

          <p className="link-medium fz--tablet-18 fz--mobile-10">
            {t("”You either do it with love or not at all”")}
          </p>
        </div>

        <Logo className="logo" color="#ffffff" />

        <div className="bottom text">
          <p className="body-text-4 fz--tablet-14 fz--mobile-7">
            {t("This philosophy")}
            <br />
            {t(
              "is not just a choice; it's in my blood, even evident in my surname, which interprets as:"
            )}
          </p>

          <p className="link-medium fz--tablet-18 fz--mobile-10">{t("”the one who is giving love”")}</p>

          <div className="heart">
            <Heart color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}

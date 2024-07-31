import React, { useRef } from "react";

import "./Universe.scss";
import { Heart } from "../../../components/Heart/Heart";
import { Button } from "../../../components/Button/Button";
import gsap from "gsap";

import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Universe() {
  const { t } = useTranslation();

  const plane1 = useRef();
  const buttonSticky = useRef();

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => {
    return start * (1 - amount) + target * amount;
  };

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    if (plane1.current) {
      gsap.set(plane1.current, {
        backgroundPositionX: `+=${xForce * 100}%`,
        backgroundPositionY: `+=${xForce}%`,
      });
    }

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <section className="universe container">
      <div
        className="top-title"
        ref={plane1}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
      >
        <h3>
          <span className="first-line">
            {t("I’m here to help you see and build your own")}
          </span>
          <br />
          {t("Universe - an ecosystem of products on the basis")}
          <span className="figure-of" /> 
          <span className="figure-of__n">
            {t("your")}
          </span>
          <br />
          <span style={{ lineHeight: "107%" }}>
            {t("mission, vision and existing.")}
          </span>
        </h3>
      </div>

      <div className="universe-video">
        <div className="left body-text-4 body-text-4--first-line">
          <p>
            <span className="body-text qoute">“</span>
            {t("you`re the first person I ever trusted with my vision")}
          </p>

          <div className="heart">
            <Heart color="black" />
          </div>

          <p>
            {t(
              "#lovemark #growth #strategy #ecosystem #marketing #startup #business #community"
            )}
          </p>
        </div>

        <div className="right">
          <div className="subtitles body-text-4">
            <p className="paragraph">
              <p>
                {t(
                  "But beyond the annals of history and the stories of legend, in the lived reality of our world, women with their innate beauty tame the chaos that often surrounds us."
                )}
              </p>
              <p>
                {t(
                  "This isn’t to say that the value of a woman lies solely in her beauty, nor is it to pigeonhole her into a singular role of a siren or muse. Instead, it is to acknowledge that there exists a particular power in the beauty she carries — a power that is capable of turning discord into harmony, desolation into hope. It is an alchemy that transforms the mundane into"
                )}
              </p>
            </p>
            <p className="paragraph">
              <p>
                {t(
                  "The mystique of a deep ocean. The beauty of women is not just skin-deep; it is an essence that transcends the tangible, an ethereal quality that is both delicate and powerful, bridging the chasm between the corporeal and the spiritual."
                )}
              </p>
              <p>
                {t(
                  "In the tapestry of existence, women emerge as radiant threads, weaving tales of grace, strength, and sublime beauty. From the earliest myths to modern narratives"
                )}
              </p>
            </p>
          </div>
          <div className="video">
            <div className="video__wrapper">
              <img
                src="/images/Home/universe.webp"
                className="video__item"
                alt="video"
              />
              <div className="play-btn" />
            </div>
            <div className="video__subscription">
              <p className="body-text-4 first-line-book uppercase concept">
                {t("Concept born in Melbourne in")}
              </p>
              <p className="body-text-4 first-line-book uppercase">
                {t("July 2022")}
              </p>
            </div>
          </div>
          {/* <div className="video__contact-button" ref={buttonSticky}>
                <Button state="secondary">{t("Contact Me.")}</Button>
              </div> */}
        </div>
      </div>

      <div className="statics">
        <div className="nums nums-1">
          <p className="nums__title fz--tablet-16">{t("Impact based projects:")}</p>
          <h1>
            25+
          </h1>
        </div>
        <div className="nums nums-2">
          <div>
            <p className="nums__title nums__title-2 fz--tablet-16">{t("Pitching on:")}</p>
            <h1>500+</h1>
          </div>
          <p className="fz--tablet-16">{t("ppl audience")}</p>
        </div>
      </div>
    </section>
  );
}

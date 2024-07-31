import React, { useRef } from "react";

import "./Loader.scss";
import { presenceLoaderAnim, progressAnim } from "./anim";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { Logo } from "../Logo/Logo";
import { Heart } from "../Heart/Heart";
import gsap from "gsap";
import LogoAnim from "./LogoAnim/LogoAnim";

export const Loader = ({ setLoaderFinished }) => {
  const loaderRef = useRef();

  const topRef = useRef();
  const centerTextRef = useRef([]);
  const heartRef = useRef();
  const heartForHomeRef = useRef();
  const logoRef = useRef();

  const progressRef = useRef();
  const progressNumberRef = useRef();
  const progressWrapper = useRef();

  const { t } = useTranslation();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoaderFinished(true),
    });

    tl
    .add(
      progressAnim(progressRef, progressNumberRef, progressWrapper),
      0
    )
    .add(
      presenceLoaderAnim(logoRef, topRef, heartForHomeRef, centerTextRef, loaderRef),
      2
    );
  });

  return (
    <section className="loader" ref={loaderRef}>
      <div className="top container" ref={topRef} data-hidden>
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

      <div className="center">
        <p
          className="body-text-4 semiBold"
          ref={(t) => centerTextRef.current.push(t)}
          data-hidden
        >
          {t("Hi love!")}
        </p>
        <p
          data-hidden
          className="body-text-4 semiBold"
          ref={(t) => centerTextRef.current.push(t)}
          dangerouslySetInnerHTML={{
            __html: t(
              "It`s — <span class='body-text-4 bold'>Anastasiia </span> here with you"
            ),
          }}
        />
        <div className="loader__logo" ref={logoRef}>
          {/* <Logo className="loader__logo" color="#212529" /> */}
          <LogoAnim />
        </div>

        {/* <div className="heart" ref={heartRef} data-hidden>
          <Heart color="#212529" />
        </div> */}
      </div>
      <div className="heart--for-home" ref={heartForHomeRef} data-hidden />


      <div className="loader__progress" ref={progressWrapper}>
        <div className="loader__progress-bar" ref={progressRef} />
        <h2 className="loader__numbers" ref={progressNumberRef}>
          00
        </h2>
      </div>
    </section>
  );
};

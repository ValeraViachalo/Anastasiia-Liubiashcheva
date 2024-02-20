import React from "react";

import "./CTA.scss";
import { ButtonSecondary } from "../../../components/Button/Button";
import { Heart } from "../../../components/Heart/Heart";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function CTA() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set('.cta__line', {
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0
    })

    gsap.to('.cta__line', {
      clipPath: 'inset(0% 0 0 0)',
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.cta',
        start: '5% center',
        end: '70% center',
        scrub: true,
      }
    })
  })

  return (
    <section className="cta">
      <div className="cta__wrapper">
        <div className="top">
          <p className="body-text-3 light">
            <span className="qoute">“</span>I want to see myself and my business
            with your eyes
          </p>
        </div>
        <div className="center">
          <h5 className="light cta__title">
            Stop doubting & unlock your full{" "}
            <span className="italic semiBold"> potential now</span>
          </h5>

          <div className="cta__button">
            <ButtonSecondary state="primary-ar">Contact me.</ButtonSecondary>
            <span className="cta__line" />
            <span className="cta__line" />
          </div>

          <div className="heart">
            <Heart color="white" />
          </div>
        </div>
        <div className="bottom">
          <p className="body-text-3 uppercase">
            Be
            <br />
            brave
          </p>
          <p className="body-text-3 uppercase bottom__second">
            Be
            <br />
            different
          </p>
        </div>
      </div>
    </section>
  );
}

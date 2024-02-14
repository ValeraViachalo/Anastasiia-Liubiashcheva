import React from "react";
import "./Hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Hero() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to('.hero', {
      backgroundPositionY: '50lvh',
      clipPath: 'inset(0 0 10% 0)',
      // ease: 'none',
      scrollTrigger: {
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    }) 
  })

  return (
    <section className="hero">
      <div className="top container">
        <div className="top__left">
          <p className="body-text-4 medium">
            For
            <br />
            creators
          </p>
          <p className="body-text-4 medium">
            By
            <br />
            Anastasiia Liubiashcheva
          </p>
        </div>
        <div className="top__right">
          <p className="body-text-4 medium">
            <span className="growth">
              Business growth since
            </span>
            <br />
              → 2019
          </p>
          <p className="body-text-4 medium">
            United by
            <br />
            love
          </p>
        </div>
      </div>
      <div className="hero__main">
        <p className="body-text-4 medium">Hi love!</p>
        <p className="body-text-4 medium">It`s — <span className="body-text-4 bold">Anastasiia</span> here with you</p>
        <h4 className="hero__title">Your vision partner.</h4>

      </div>
    </section>
  );
}

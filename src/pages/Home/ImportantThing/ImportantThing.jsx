import React, { useState } from "react";
import { motion, useIsPresent } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import "./ImportantThing.scss";
import { Button } from "../../../components/Button/Button";

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
  const [isFliped, setFlip] = useState(false);

  const phase = [
    "<span class='semiBold'>You`re okay!</span> It`s not an illusion, let me hear you,",
    "I`ll show you your scale and how you can get there",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider-wrapper",
        start: "top center",
        end: "95% center",
        pin: ".slider",
        pinSpacer: false,
      },
    });

    // gsap.to('.slider__title-2', {
    //   transform: 'translateY(-100%)',
    //   scrollTrigger: {
    //     trigger: '.slider-wrapper',
    //     start: '80% bottom',
    //     end: 'bottom center',
    //     scrub: true,
    //     markers: true,
    //   }
    // })

    ScrollTrigger.create({
      trigger: ".slider-wrapper",
      start: "40% center",
      end: "top center",
      scrub: true,
      onEnter: () => setFlip(true),
      onLeaveBack: () => setFlip(false),
    });
  });

  return (
    <section className="important-thing">
      <div className="slider-wrapper">
        <div className="slider">
          <h3 className="book slider__title">
            <motion.p
              variants={animation(-100)}
              initial="initial"
              animate={!isFliped ? "enter" : "initial"}
            >
              but...
            </motion.p>
          </h3>
          <div className="slider__text">
            <motion.p
              variants={animation(-100)}
              initial="initial"
              animate={!isFliped ? "enter" : "initial"}
              className="light"
            >
              the most important thing
              <br />
              you need to <span className="book">know</span>
            </motion.p>
          </div>

          <h3 className="slider__title-2">
            <div>
              {phase.map((p, index) => {
                return (
                  <div key={index} className="mask-text__line">
                    <motion.p
                      custom={index}
                      variants={animation(100)}
                      initial="initial"
                      animate={isFliped ? "enter" : "initial"}
                      dangerouslySetInnerHTML={{ __html: p }}
                    ></motion.p>
                  </div>
                );
              })}
            </div>
          </h3>
        </div>
      </div>
      <div className="important-thing__wrapper container">
        <div className="left">
          <p className="body-text-3 semiBold left-title">Feedbacks →</p>

          <div className="feedbacks">
            <div className="feedbacks__item">
              <p className="body-text-3">
                <span className="body-text qoute">“</span>I have talked to many
                people about this but in 1.5 hours with you, I have drafted
                three pages with ideas and concepts.
              </p>
              <p className="feedbacks__name body-text-3 semiBold">Sasha, NYC</p>
            </div>
            <div className="feedbacks__item">
              <p className="body-text-3">
                <span className="body-text qoute">“</span>
                you’re the first person to unpack my potential through my
                mission into business processes
              </p>
              <p className="feedbacks__name body-text-3 semiBold">
                Ksenia, Tenerife
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="title">
            Let me be a safe
            <br />
            <span className="title__to-left">
              space <span className="figure">for</span> your
            </span>
            <br />
            business vision ツ
          </h3>

          <div className="steps">
            <img
              src="/images/Home/Important-thing.webp"
              alt="anastasiia"
              className="steps__image"
            />

            <p className="body-text-3 semiBold steps__title">Your way with me →</p>
            <div className="steps__list">
              <ul>
                <li className="body-text-4 steps__item">
                  <p>Finding a spark</p>
                  <span>01</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>Analyzing existing resources & journey</p>
                  <span>02</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>Building business foundation</p>
                  <span>03</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>Creating an ecosystem of products & services</p>
                  <span>04</span>
                </li>
                <li className="body-text-4 steps__item">
                  <p>Turning vision into real-world results</p>
                  <span>05</span>
                </li>
              </ul>

              <div className="steps__button">
                <Button state="primary" href="/">
                  Work with me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

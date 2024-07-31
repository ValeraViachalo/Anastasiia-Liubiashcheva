import React, { useRef } from "react";

import "./CTA.scss";
import { ButtonSecondary } from "../../../components/Button/Button";
import { Heart } from "../../../components/Heart/Heart";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function CTA() {
  const ctaRef = useRef();

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["5% 50%", "70% 50%"],
    layoutEffect: false,
  });
  const smoothProgress1 = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 100,
  });
  const smoothProgress2 = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
  });

  const clipPath1 = useTransform(
    smoothProgress1,
    [0, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );
  const clipPath2 = useTransform(
    smoothProgress2,
    [0, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="cta" ref={ctaRef}>
      <div className="cta__wrapper">
        <div className="top">
          <p className="body-text-3 light fz--tablet-10">
            <span className="qoute">“</span>I want to see myself and my business
            with your eyes
          </p>
        </div>
        <div className="center">
          <h5 className="light cta__title fz--tablet-20">
            Stop doubting & unlock your full{" "}
            <span className="italic semiBold"> potential now</span>
          </h5>

          <div className="cta__button">
            <ButtonSecondary href="/contact" state="primary-ar">
              Contact me.
            </ButtonSecondary>
            <motion.span
              style={{ clipPath: clipPath1, opacity }}
              className="cta__line"
            />
            <motion.span
              style={{ clipPath: clipPath2, opacity }}
              className="cta__line"
            />
          </div>

          <div className="heart">
            <Heart color="white" />
          </div>
        </div>
        <div className="bottom">
          <p className="body-text-3 uppercase fz--tablet-10">
            Be
            <br />
            brave
          </p>
          <p className="body-text-3 uppercase bottom__second fz--tablet-10">
            Be
            <br />
            different
          </p>
        </div>
      </div>
    </section>
  );
}

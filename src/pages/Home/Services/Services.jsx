import React, { useRef, useEffect, useState } from "react";
import "./Services.scss";
import sevicesList from "../../../data/services.json";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import { ServicesAnim } from "../../../helpers/anim";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Services() {
  const [imageHover, setImageHover] = useState();
  const image = useRef();

  const spring = {
    stiffness: 100,
    damping: 25,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
    rotare: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.01;
    const targetY = clientY - (window.innerWidth / 1.5) * 0.3;
    const rotate = clientX - (window.innerWidth / 500) * 0.1 - 80;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
    mousePosition.rotare.set(rotate);
  };

  return (
    <section
      className="services container"
      onMouseMove={(e) => mouseMove(e)}
    >
      <motion.div
        className="services__image"
        ref={image}
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          // rotate: mousePosition.rotare,
        }}
      >
        <AnimatePresence mode="popLayout">
          {imageHover && (
            <motion.img
              alt="services"
              src={imageHover}
              className="services__image-item"
              variants={ServicesAnim.Image}
              initial="initial"
              animate="animate"
              exit="exit"
              key={imageHover}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <div className="titles">
        <p className="body-text-2 uppercase description-title">Description</p>
        <p className="body-text-2 uppercase feedback-title">Feedback</p>
        <h5 className="services-title">I can help →</h5>
      </div>
      <div className="left">
        <div className="description">
          <p className="body-text-3">
            Send inquiry/contact about personal and business growth coaching
            options and project support Apply for mentoring hours Send a
            professional inquiry
          </p>
        </div>
        <div className="feedback">
          <p className="body-text-3">
            <span className="qoute">“</span> you’re the first person I ever
            trusted with my vision
          </p>
        </div>
      </div>
      <div className="right">
        <ul className="services__list">
          {sevicesList.map((currS, i) => (
            <li
              className="services__item body-text-3 uppercase"
              key={`services-${i}`}
              onMouseEnter={() => setImageHover(currS.image)}
              onMouseLeave={() => setImageHover(null)}
            >
              <div className="services__item-left">
                <p>If you`re</p>
                <p>{currS.ifYou}</p>
              </div>
              <div className="services__item-right">
                <p>{currS.action}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

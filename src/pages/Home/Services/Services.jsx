import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import { BrowserView } from "react-device-detect";

import { ServicesAnim } from "../../../helpers/anim";
import "./Services.scss";
import sevicesList from "../../../data/services.json";

export default function Services() {
  const [imageHover, setImageHover] = useState();
  const image = useRef();
  const list = useRef();
  let xMoveContainer = useRef();
  let yMoveContainer = useRef();
  let rotateContainer = useRef();
  let rotation = useRef();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const mapRange = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  useGSAP(() => {
    xMoveContainer.current = gsap.quickTo(image.current, "left", {
      duration: 1.5,
      ease: "power4",
    });
    yMoveContainer.current = gsap.quickTo(image.current, "top", {
      duration: 1.5,
      ease: "power4",
    });
    rotateContainer.current = gsap.quickTo(image.current, "rotation", {
      duration: 1.5,
      ease: "power4",
      min: -15,
      max: 6,
    });
  });

  const moveItems = (x, y) => {
    // xMoveContainer.current(x);
    rotation.current = mapRange(y, 0, list.current.clientHeight, -9, 16);
    yMoveContainer.current(y);

    rotateContainer.current(rotation.current);
  };

  return (
    <section
      className="services container"
      // onMouseMove={(e) => mouseMove(e)}
      ref={ref}
    >
      <motion.div
        className="services__image"
        ref={image}
        // style={{
        //   x: mousePosition.x,
        //   y: mousePosition.y,
        //   rotate: mousePosition.rotare,
        // }}
      >
        <BrowserView>
          <AnimatePresence mode="popLayout">
            {imageHover && inView && (
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
        </BrowserView>
      </motion.div>
      <div className="titles">
        <p className="body-text-2 uppercase description-title fz--tablet-14" data-hide-for-mobile>
          Description
        </p>
        <p className="body-text-2 uppercase feedback-title fz--tablet-14" data-hide-for-mobile>
          Feedback
        </p>
        <h5 className="services-title fz--mobile-24">I can help →</h5>
      </div>
      <div className="description" data-hide-for-mobile>
        <p className="body-text-3 normal fz--tablet-14">
          Send inquiry/contact about personal and business growth coaching
          options and project support Apply for mentoring hours Send a
          professional inquiry
        </p>
      </div>
      <div className="feedback" data-hide-for-mobile>
        <p className="body-text-3 normal fz--tablet-14">
          <span className="qoute">“</span> you’re the first person I ever
          trusted with my vision
        </p>
      </div>
      <div className="right">
        <ul
          className="services__list"
          onMouseMove={(e) => {
            moveItems(e.clientX, e.clientY);
          }}
          ref={list}
        >
          {sevicesList.map((currS, i) => (
            <li
              className="services__item body-text-3 uppercase fz--tablet-12 fz--mobile-10"
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
      <div className="feedback__wrapper-mobile">
      <div className="feedback">
        <p className="body-text-3 normal fz--tablet-14 fz--mobile-14">
          <span className="qoute fz--mobile-24">“</span> you’re the first person I ever
          trusted with my vision
        </p>
      </div>
      <div className="description">
        <p className="body-text-3 normal fz--tablet-14 fz--mobile-14">
          Send inquiry/contact about personal and business growth coaching
          options and project support Apply for mentoring hours Send a
          professional inquiry
        </p>
      </div>

      </div>
    </section>
  );
}

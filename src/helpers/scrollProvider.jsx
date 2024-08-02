import React, { useRef, useEffect, ReactNode } from "react";
import { ScrollContext } from "./scrollContext";

function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

export const ScrollProvider = ({ children, wrapper = window }) => {
  const locomotiveScroll = useRef(null);

  const scrollTo = (e, currentLink) => {
    e.preventDefault();
    locomotiveScroll.current.scrollTo(currentLink, {
      duration: 1.7,
      easing: (x) => easeInOutExpo(x),
    });
  };

  const rangeScrollTo = (currentLink) => {
    locomotiveScroll.current.scrollTo(currentLink, {
      duration: 1.5,
    });
  };

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll.current = new LocomotiveScroll({
        lenisOptions: {
          wrapper: wrapper !== window ? document.querySelector(wrapper) : window, 
          duration: 1.5,
          lerp: 0.1,
          smoothWheel: true,
          wheelMultiplier: 1,
        },
      });
    })();
  }, []);

  return (
    <ScrollContext.Provider value={{scrollTo, rangeScrollTo}}>{children}</ScrollContext.Provider>
  );
};

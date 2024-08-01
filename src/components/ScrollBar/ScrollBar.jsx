import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import React, { useEffect, useState, useContext } from "react";

import "./ScrollBar.scss";
import { ScrollContext } from '../../helpers/scrollContext';
import { LoaderContext } from '../Loader/LoaderContext';

export const ScrollBar = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const { loaderFinished } = useContext(LoaderContext);


  const { scrollYProgress } = useScroll();
  const scrollSpring = useSpring(scrollYProgress, { stiffness: 1000, damping: 100 });
  const y = useTransform(scrollSpring, [0, 1], ['0%', '-100%']);
  const top = useTransform(scrollSpring, [0, 1], ['0%', '100%']);

  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  const { rangeScrollTo } = useContext(ScrollContext);

  const handleRangeChange = (e) => {
    const value = e.target.value;
    setRangeValue(value);
    const scrollTo = (documentHeight * value) / 100;
    rangeScrollTo(scrollTo);
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setRangeValue(v * 100);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return loaderFinished && (
    <div className="progress-bar" data-desktop-element>
      <motion.div className="progress-bar__bar" style={{ top, y }} />
      <input
        type="range"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
        className="progress-bar__range"
      />
    </div>
  );
};

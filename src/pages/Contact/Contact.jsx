import React, { useEffect } from "react";
import { motion } from "framer-motion";
import FormSent from "./FormSent/FormSent";
import { Categories } from "./Categories/Categories";

const Transition = {
  initial: {
    opacity: 0,
    y: '-100%',
    filter: "blur(1vw)",
    scale: 0.9,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: '0%',
    filter: "blur(0)",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    y: '-100%',
    filter: "blur(1vw)",
    scale: 0.9,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      variants={Transition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="contact container"
    >
      <Categories />
      <FormSent />
    </motion.main>
  );
}

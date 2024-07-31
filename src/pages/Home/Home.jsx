import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import About from "./About/About";
import CTA from "./CTA/CTA";

import Hero from "./Hero/Hero";
import ImportantThing from "./ImportantThing/ImportantThing";
import Loving from "./Loving/Loving";
import Services from "./Services/Services";
import Universe from "./Universe/Universe";
import Footer from "../../components/Footer/Footer";
import { Transition } from "../../helpers/anim";
import { useEffect } from "react";
import { ScrollBar } from "../../components/ScrollBar/ScrollBar";

import "./Home.scss";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      variants={Transition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home"
    >
      <ScrollBar />
      <Hero />
      <Universe />
      <ImportantThing />
      <Loving />
      <About />
      <Services />
      <CTA />
      <Footer />
    </motion.main>
  );
}

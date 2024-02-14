import React, { useEffect, useState } from 'react'
import { MenuButton } from './MenuButton/MenuButton';
import { AnimatePresence } from 'framer-motion';
import { Body } from './Body/Body';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const LinkList = [
  {
    name: "Home",
    link: "#top"
  },
  {
    name: "Packages",
    link: "#packages"
  },
  {
    name: "Does this program suit you?",
    link: "#program-suit"
  },
  {
    name: "Preparation",
    link: "#preparation"
  },
  {
    name: "Questionnaire",
    link: "#questionnaire"
  }
]


export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.header',
          start: 'bottom top',
          onEnter:() => setIsActive(false),
        }
      })
  }, [])

  return (
    <>
      <MenuButton
        isActive={isActive} toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />

      <AnimatePresence mode="wait">
        {isActive && <Body isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  )
}

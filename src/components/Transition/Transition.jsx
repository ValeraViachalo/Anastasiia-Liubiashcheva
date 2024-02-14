import { FC } from 'react'
import { motion } from 'framer-motion';
import './Transition.scss'

export const Transition = ({ isPresent }) => {
  return (
    <>
      <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0, transition: { duration: 0.5, delay: 0.5, ease: "circOut" } }}
      exit={{ scaleY: 1, transition: { duration: 0.5, delay: 0.5, ease: [0.26, 0.11, 0.35, 0.99] } }}
      style={{ originY: isPresent ? 0 : 1 }}
      className="slide-in slide-in-1"
    />
    </>
  )
}
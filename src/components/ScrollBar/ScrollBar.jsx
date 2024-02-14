import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

import './ScrollBar.scss'
import { useGSAP } from '@gsap/react';

export const ScrollBar = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#root',
          start: 'top top',
          end: '100%',
          scrub: true,
        }
      });

      tl.to('.circle', {
        bottom: '0%',
        translateY: "-100%",
        ease: 'none',
      })
  }, [])

  return (
    <div
      className='scrollBar'
    >
      <div className='circle' />
    </div>
  )
}

import React from 'react'

import './Categories.scss';

const ifYoure = [
  "If you’re a startup",
  "If you have an idea",
  "If you’re stuck - bus consult",
  "If you want to grow your inner self",
  "If you want to grow your business",
  "If you share my approach and vision"
]

export const Categories = () => {
  return (
    <section className="categories">
      <div className="categories__wrapper">
        {ifYoure.map((currIf, i) => (
          <p className="body-text-2 categories__item" key={`categories__item-${i}`}>
            {currIf}
          </p>
        ))}
      </div>
    </section>
  )
}

import React from 'react';
import aboutList from "../../../data/about"

import './About.scss';

export default function About() {
  return (
    <section className="about container">
      <h3 className="about__title" data-hide-for-mobile>
        <span className="qoute" />Here are some facts
        <br />
        about me: 
      </h3>
      
      <h3 className="about__title fz--mobile-31" data-only-mobile>
        Here are
        <br />
        some facts about me: 
      </h3>

      <ul className="about__list">
        {aboutList.map((currLI, i) => (
        <li className="about__item" key={`aboutListItem-${i}`}>
          <div className="top">
            <h2 className="fz--mobile-56">
              {currLI.main}
            </h2>
            <span className="bold fz--tablet-14 fz--mobile-10">
              {currLI.secondary}
            </span>
          </div>
          <p className="light fz--tablet-18 fz--mobile-14">
            {currLI.description}
          </p>
        </li>
        ))}
      </ul>
    </section>
  )
}

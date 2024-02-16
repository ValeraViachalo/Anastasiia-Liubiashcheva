import React from 'react';
import aboutList from "../../../data/about"

import './About.scss';

export default function About() {
  return (
    <section className="about container">
      <h3 className="about__title">
        <span className="qoute" />Here are some facts
        <br />
        about me: 
      </h3>

      <ul className="about__list">
        {aboutList.map((currLI, i) => (
        <li className="about__item" key={`aboutListItem-${i}`}>
          <div className="top">
            <h2>
              {currLI.main}
            </h2>
            <span className="bold">
              {currLI.secondary}
            </span>
          </div>
          <p className="light">
            {currLI.description}
          </p>
        </li>
        ))}
      </ul>
    </section>
  )
}

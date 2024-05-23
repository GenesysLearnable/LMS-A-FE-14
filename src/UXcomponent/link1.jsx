import React from 'react'
import './UxheroStyle.css'
import Navbar from '../component/navbar'
import Uxhero from './Uxhero'
import HeroBottom from './HeroBottom'
import Herobase from "./Herobase";

const Link1 = () => {
  return (
    <div>
      <Navbar />
      <Uxhero />
      <div className="links-container">
        <ul>
          <li className="active">What you'll learn</li>
          <li>Course content</li>
          <li>Reviews</li>
        </ul>
      </div>

      <div className="link-1-content">
        <p className="link-1-content-top">
          - The fundamentals of user-centered design and human-computer
          interaction
        </p>
        <p>
          - How to conduct user research, create user personas, and develop user
          journeys
        </p>
        <p>- Design principles and patterns for effective User interfaces</p>
        <p>- Wireframing, prototyping, and usability testing techniques</p>
        <p>
          - How to create interactive designs using industry-standard tools like
          Figma or Sketch
        </p>
        <p className="last">
          - Designing for accessibility and inclusive design principles
        </p>
      </div>
      <HeroBottom />
      <Herobase />
    </div>
  );
}

export default Link1

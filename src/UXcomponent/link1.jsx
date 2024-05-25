import React from 'react'
import './UxheroStyle.css'
import Navbar from '../component/navbar'
import Uxhero from './Uxhero'
import HeroBottom from './HeroBottom'
import Herobase from "./Herobase"
import Footer from "../StudentScreens/Footer"
import { Link } from "react-router-dom";

const Link1 = () => {
  return (
    <div>
      <Navbar />
      <Uxhero />
      <div className="links-container">
        <ul>
          <Link to="/active1">
            <li className="active1">What you'll learn</li>
          </Link>
          <Link to="/active2">
            <li>Course content</li>
          </Link>
          <Link to="/active3">
            <li>Reviews</li>
          </Link>
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
      <Footer />
    </div>
  );
}

export default Link1

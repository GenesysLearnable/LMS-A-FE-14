import React from 'react'
import './UxheroStyle.css'
import Navbar from "../component/navbar";
import Uxhero from "./Uxhero";
import HeroBottom from "./HeroBottom";
import Herobase from "./Herobase";

const Link2 = () => {
  return (
    <div>
      <Navbar />
      <Uxhero />
      <div className="links-container">
        <ul>
          <li>What you'll learn</li>
          <li className="active">Course content</li>
          <li>Reviews</li>
        </ul>
      </div>

      <div className="link-2-content">
        <h3 className="link-2-content-top">
          - Module 1: Introduction to Ux Design
        </h3>
        <p>- What is Ux Design?</p>
        <p>- User-centered design principles</p>
        <p>- Design thinking and problem-solving</p>

        <h3>- Module 2: User Research and Analysis</h3>
        <p>- User interviews and surveys</p>
        <p>- Creating user personas and user journeys</p>
        <p>- User research analysis and synthesis</p>

        <h3>- Module 3: Design Principles and Patterns</h3>
        <p>- Design principles and heuristics</p>
        <p>- Interaction design patterns</p>
        <p>- Visual design principles</p>

        <h3>- Module 4: Wireframing and prototyping</h3>
        <p>- Introduction to wireframing and prototyping tools</p>
        <p>- Creating low-fidelity wireframe and prototypes</p>
        <p>- Usability testing and feedback</p>

        <h3>- Module 5: Interactive Design and Development</h3>
        <p>- Introduction to interactive design tools like Figma or Sketch</p>
        <p>- Creating high-fidelity design and prototypes</p>
        <p>- Desidning for accessibility and inclusive design</p>

        <h3>- Module 6: Capstone Project</h3>
        <p>- Applying UX design principles to a real-world project</p>
        <p>- Creating a user research report and design proposal</p>
        <p className="last">- Presenting and iterating on design solutions</p>
      </div>
      <HeroBottom />
      <Herobase />
    </div>
  );
}

export default Link2

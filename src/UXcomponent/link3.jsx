import React from 'react'
import './UxheroStyle.css'
import FiveStar from './FiveStar'
import FourStar from "./FourStar";
import ThreeStar from "./ThreeStar";
import TwoStar from "./TwoStar";
import OneStar from "./OneStar";
import Navbar from "../component/navbar";
import Uxhero from "./Uxhero";
import HeroBottom from "./HeroBottom";
import Herobase from "./Herobase";
import Footer from '../StudentScreens/Footer';

const Link3 = () => {
  return (
    <div>
      <Navbar />
      <Uxhero />
      <div>
        <div className="links-container">
          <ul>
            <li>What you'll learn</li>
            <li>Course content</li>
            <li className="active">Reviews</li>
          </ul>
        </div>

        <h3 className="feedback-title">Student feedback</h3>
        <div className="feedback-container">
          <div className="student-feedback">
            <h2 className="feedback-rate">5.0</h2>
            <FiveStar />
            <h3 className="feedback-subtitle">Course Rating</h3>
          </div>
          <div className="student-rating-container">
            <div>
              <div className="student-rating-bar"></div>
              <div className="student-rating-bar blank-rate"></div>
              <div className="student-rating-bar blank-rate"></div>
              <div className="student-rating-bar blank-rate"></div>
              <div className="student-rating-bar blank-rate"></div>
            </div>

            <div className="star-rate">
              <div className="five">
                <FiveStar />
              </div>
              <div className="four">
                <FourStar />
              </div>
              <div className="three">
                <ThreeStar />
              </div>
              <div className="two">
                <TwoStar />
              </div>
              <div className="one">
                {" "}
                <OneStar />
              </div>
            </div>
          </div>
        </div>

        <h3 className="Review-title">Reviews</h3>
        <div className="Review-container">
          <img />
          <div>
            <h2>Chukwuneike Okafor</h2>
            <FiveStar />
          </div>
          <p className="Review-date">2weeks ago</p>
        </div>
        <p className="Review-content">
          - "This course was a game-changer for me! I had no prior experience in
          Ux design, but the instructor's guidance and support helped me build a
          strong foundation in UX principles and design tools." - Chris Joy.
        </p>
      </div>
      <HeroBottom />
      <Herobase />
      <Footer />
    </div>
  );
}

export default Link3

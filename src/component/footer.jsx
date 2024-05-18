import React from 'react'
import '../App.css'

const footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-first">
          <img
            className="footer-logo"
            src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
            alt="Logo"
          />
          <p className='footer-first-text'>
            Empowering learners through accessible and engaging online
            education.
          </p>
          <p className='footer-second-text'>
            Goleran is a leading online learning plaform dedicated to providing
            high-quality, flexible, and affordale educational experiences.
          </p>
        </div>

        <div className="footer-second">
          <h3>Get Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>Latest Articles</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-third">
            <h3>Careers</h3>
            <ul>
                <li>Arts & Design</li>
                <li>Business</li>
                <li>IT & Software</li>
                <li>Language</li>
                <li>Programming</li>
            </ul>
        </div>

        <div className="footer-Fourth">
          <h3>Contact Us</h3>
          <li>Press</li>
          <li>Investors</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Help</li>
          <li>Accessibility</li>
          <li>Contact</li>
          <li>Article</li>
          <li>Directory</li>
          <li>Affiliates</li>
          <li>Modern Slavery Statement</li>
          <li>Manage Cookie Preferences</li>
          <div>
            <img src="" alt="Facebook" />
            <img src="" alt="Github" />
            <img src="" alt="Google" />
            <img src="" alt="Twitter" />
            <img src="" alt="Microsoft" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer

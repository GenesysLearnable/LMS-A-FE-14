import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
// import Navbar from "../component/navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import apple from "../images/appleicon.png";
import playstore from "../images/playstoreicon.png";
import Footer from "./Footer.jsx";

const StudentReminder = () => {
  return (
    <div>
      <div className="saved-general-container">
        <div>
          {/* <Navbar /> */}
          <div className="navbar-container">
            <div className="navbar">
              <img
                className="navbar-logo"
                src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
                alt="Logo"
              />
              <span className="nav-text">Explore</span>
              <div className="search-box">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Search Course" />
              </div>
              <span className="nav-text-link">GoLearn Business</span>
              <span className="nav-text-link">Admin</span>
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
            </div>
            <div className="navbar-links">
              <ul>
                <li>Home</li>
                <li>My Course</li>
                <li>Saved</li>
                <li className="active">Reminder</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>

          <div className="reminder-container">
            <h3>Set a Reminder to Study!</h3>
            <p>
              Never miss a chance to learn! Research proves that studying a bit
              every day pays off big time. Those who turn learning into a
              routine are more likely to succeed. Use your learning scheduler to
              carve out time for learning and get reminders.
            </p>
            <button className="reminder-btn" type="submit">
              Schedule Learning{" "}
            </button>
            <h3>Get Push Notifications Instead</h3>
            <p>
              Prefer push notifications instead? No problem! Get reminders
              straight to your phone from the Golearn app.
            </p>
            <div className="reminder-download-container">
              <div className="reminder-store">
                <img src={apple} alt="apple" />
                <div className="reminder-downloader">
                  <p>
                    Download on the <br></br> <span>App Store</span>
                  </p>
                  {/* <span className="reminder-store-name">App Store</span> */}
                </div>
              </div>

              <div className="reminder-store">
                <img src={playstore} alt="playstore" />
                <div className="reminder-downloader">
                  <p>
                    GET IT ON <br></br> <span>Google Play</span>
                  </p>
                  {/* <h2 className="reminder-store-name">Google Play</h2> */}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StudentReminder;

import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import Navbar from "../component/navbar.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faSearch,
//   faCircleUser,
// } from "@fortawesome/free-solid-svg-icons";
// import logo from "../images/golearn-logo.png";
// import ITimage from "../images/IT&Software.png";
// import star from "../images/Star .png";
// import user from "../images/User.svg";
// import design from "../images/design.png";
// import development from "../images/development.png";
// import marketing from "../images/marketing.png";
// import design2 from "../images/design2.png";
// import ITSoftware2 from "../images/ITSoftware2.png";
// import Development2 from "../images/Development2.png";
// import marketing2 from "../images/marketing2.png";
// import facebook from "../images/Facebook.svg";
// import github from "../images/Github.svg";
// import google from "../images/googleicon.svg";
// import twitter from "../images/Twitter.svg";
import apple from "../images/appleicon.png";
import playstore from "../images/playstoreicon.png";
import Footer from "./Footer.jsx";

const StudentReminder = () => {
  return (
    <div>
      <div className="saved-general-container">
        <div>
          <Navbar />

          <div>
            <h3>Set a Reminder to Study!</h3>
            <p>
              Never miss a chance to learn! Research proves that studying a bit
              every day pays off big time. Those who turn learning into a
              routine are more likely to succeed. Use your learning scheduler to
              carve out time for learning and get reminders.
            </p>
            <button type="submit">Schedule Learning </button>
            <h3>Get Push Notifications Instead</h3>
            <p>
              Prefer push notifications instead? No problem! Get reminders
              straight to your phone from the Golearn app.
            </p>
            <div>
              <div>
                <img src={apple} alt="apple" />
                <div>
                  <p>Download on the</p>
                  <p>App Store</p>
                </div>
              </div>

              <div>
                <img src={playstore} alt="playstore" />
                <div>
                  <p>GET IT ON</p>
                  <p>Google Play</p>
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

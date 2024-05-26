import React, { useState } from "react";
import "../App.css";
import "./StudentSavedCourse.css";
// import WarningPage from "./StudentScreens/StudentWarning.jsx";
// import StudentExit from "./StudentScreens/StudentExit.jsx";
import Footer from "./Footer.jsx";
import profile from "../images/profile.png";
import camera from "../images/camera.svg";
import link from "../images/link-2.svg";
import joel from "../images/joel.png";
import email from "../images/email.svg";
import naija from "../images/naija.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const StudentProfileLogOut = () => {
  const [view, setView] = useState("profile"); // 'profile', 'warning', 'exit'

  const showWarning = () => setView("warning");
  const showProfile = () => setView("profile");
  const showExitPage = () => setView("exit");

  return (
    <div>
      <div className="saved-general-container">
        <div className="std-profile-container">
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
              <div className="logout-btn-box">
                              <FontAwesomeIcon icon={faRightFromBracket} className="logout-icon"/>
                              <p>Logout</p>
              </div>
              <FontAwesomeIcon
                icon={faCircleUser}
                className="user-icon active-profile-user"
              />
            </div>
          </div>

          <div className="std-main-profile">
            <h3>Profile</h3>
            <div className="std-profile-details">
              <img
                className="profile-hero-image"
                src={joel}
                alt="student"
              ></img>
              <div className="std-profile-body">
                <p className="std-name">
                  Joel Michael | <span>Product Designer</span>
                </p>
                <div className="std-address">
                  <div className="profile-country">
                    <img src={naija} alt="country"></img>
                    <p>Benin City, Nigeria</p>
                  </div>
                  <div className="std-email-address">
                    <img src={email} alt="email address"></img>
                    <p>cherrystouch@gmail.com</p>
                  </div>
                </div>
                <p>
                  In my work I am always eager to learn new techniques in
                  design, print media, Graphics and video production with
                  excellent conceptualization skills, and the ability to develop
                  creative solutions that meet all deadlines. As an avid learner
                  and quick thinker, I'm constantly searching for opportunities
                  to improve myself and add to my skill set so as to provide the
                  best experience possible for clients and colleagues alike.
                </p>
              </div>
            </div>
            <div className="std-certification">
              <div className="std-profile-row">
                <p>Completed Courses (0)</p>
                <p>Certificates (0)</p>
                <p>Skills</p>
              </div>

              <div className="std-profile-row">
                <p>Course in progress (0)</p>
                <p>Work Experience</p>
                <p>Additional Certificate</p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StudentProfileLogOut;

// StudentProfile.js
// import React, { useState } from 'react';
// import WarningModal from './WarningModal';
// import ExitPage from './ExitPage';
// import './StudentProfile.css';

// const StudentProfile = () => {
//   const [view, setView] = useState('profile'); // 'profile', 'warning', 'exit'

//   const showWarning = () => setView('warning');
//   const showProfile = () => setView('profile');
//   const showExitPage = () => setView('exit');

//   return (
//     <div>
//       {view === 'profile' && (
//         <div className="student-profile">
//           <h1>Student Profile</h1>
//           <p>Details about the student...</p>
//           <button onClick={showWarning}>Show Warning</button>
//         </div>
//       )}

//       {view === 'warning' && (
//         <WarningModal onCancel={showProfile} onExit={showExitPage} />
//       )}

//       {view === 'exit' && <ExitPage />}
//     </div>
//   );
// };

// export default StudentProfile;

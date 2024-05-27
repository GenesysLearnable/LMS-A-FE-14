import React, {useState} from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import Footer from "./Footer.jsx";
import joel from "../images/joel.png";
import email from "../images/email.svg";
import naija from "../images/naija.svg";
import ProfileNav from "../component/profilenav.jsx";

const StudentProfile = () => {
  return (
    <div>
      <ProfileNav />
      <div className="saved-general-container">
        <div className="std-profile-container">
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

export default StudentProfile;

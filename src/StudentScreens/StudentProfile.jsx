import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import Navbar from "../component/navbar.jsx";
import Footer from "./Footer.jsx";
import profile from "../images/profile.png";
import camera from "../images/camera.svg";
import link from "../images/link-2.svg";

const StudentCart = () => {
  return (
    <div>
      <div className="saved-general-container">
        <div>
          <Navbar />

          <div className="student-profile">
            <aside>
              <img src={profile} alt="profile"></img>
              <h6>Henry John</h6>
              <p>henryjohn@gmail.com</p>
              <div className="link-to-profile">
                <img src={link} alt="link"></img>
                <p>Share profile link</p>
              </div>
                      </aside>
                      
                      <main>
                          <h4>Profile Settings</h4>
                      </main>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StudentCart;

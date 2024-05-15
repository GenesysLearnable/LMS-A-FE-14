import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/golearn-logo.png";
import ITimage from "../images/IT&Software.png";
import star from "../images/Star .png";
import user from "../images/User.svg";
import design from "../images/design.png";
import development from "../images/development.png";
import marketing from "../images/marketing.png";
import design2 from "../images/design2.png";
import ITSoftware2 from "../images/ITSoftware2.png";
import Development2 from "../images/Development2.png";
import marketing2 from "../images/marketing2.png";
import facebook from "../images/Facebook.svg";
import github from "../images/Github.svg";
import google from "../images/googleicon.svg";
import twitter from "../images/Twitter.svg";
import microsoft from "../images/Microsoft.svg";

const StudentSavedCourse = () => {
  return (
    <div>
      <div className="saved-general-container">
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
              <li className="active">Saved</li>
              <li>Reminder</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>

        <div className="saved-course-main-container">
          <div className="saved-card-row1">
            <div className="saved-card">
              <img className="it-image" src={ITimage} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-price">IT & SOFTWARE</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Learn Python Programming Matsreclass</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={design} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceD">Design</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Complete Website Responsive Design</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={development} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceDE">Development</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Adobe Premiere Pro CC Advanced Training Course</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={marketing} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceM">Marketing</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Ultimate AWS Certified Solutions Architect Associate 2021</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>

          <div className="saved-card-row1">
            <div className="saved-card">
              <img className="it-image" src={ITSoftware2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceD">Design</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>
                Ultimate Google Ads Training 2020: Profit with Pay Per Click
              </h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={design2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-price">IT & SOFTWARE</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Learn Ethical Hacking From Scratch 2021</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={Development2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceDE">Development</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Angular - The Complete Guide (2021 Edition)</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={marketing2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceM">Marketing</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>
                How to get Diamond in soloQ | League of Legends | Season 11
              </h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="saved-footer">
          <div className="saved-footer-first">
            <img src={logo} alt="logo" />
            <p>
              Empowering learners through accessible and engaging online
              education. <br /> GoLearn is a leading online learning platform
              dedicated to providing high-quality, flexible, and affordable
              educational experiences.{" "}
            </p>
          </div>

          <div className="saved-footer-second">
            <h3>Get Help</h3>
            <div className="saved-footer-help">
              <p>Contact Us</p>
              <p>Latest Articles</p>
              <p>FAQ</p>
            </div>
          </div>

          <div className="saved-footer-third">
            <h3>Careers</h3>
            <div className="saved-footer-help">
              <p>Arts & Design</p>
              <p>Business</p>
              <p>IT & Software</p>
              <p>Language</p>
              <p>Programming</p>
            </div>
          </div>

          <div className="saved-footer-fourth">
            <h3>Contact Us</h3>
            <div className="saved-footer-help">
              <p>Press</p>
              <p>Investors</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Help</p>
              <p>Accessibility</p>
              <p>Contact</p>
              <p>Articles</p>
              <p>Directory</p>
              <p>Affiliates</p>
              <p>Modern Slavery Statement</p>
              <p>Manage Cookie Preferences</p>
            </div>
            <div className="saved-socials">
              <img src={facebook} alt="facebook"></img>
              <img src={github} alt="facebook"></img>
              <img src={google} alt="facebook"></img>
              <img src={twitter} alt="facebook"></img>
              <img src={microsoft} alt="facebook"></img>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StudentSavedCourse;

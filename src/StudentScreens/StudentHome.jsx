import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import "./StudentHome.css";
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
import Navbar from "../component/navbar";
import Footer from "./Footer";

const Studenthome = () => {
  return (
    <div>
      <div className="home-general-container">
        <Navbar />

        <div className="second-course-main-container1">
          <div className="second-card-row1">
            <div className="second-card">
              <img className="it-image" src={ITimage} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-price">IT & SOFTWARE</p>
                <p className="second-price">$35</p>
              </div>
              <h6>Learn Python Programming Matsreclass</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={design} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceD">Design</p>
                <p className="second-price">$49</p>
              </div>
              <h6>User Experience course for beginners</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={development} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceDE">Developments</p>
                <p className="second-price">$32</p>
              </div>
              <h6>Adobe Premiere Pro CC Advanced Training Course</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.6</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>236,568</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={marketing} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceM">Marketing</p>
                <p className="second-price">$13</p>
              </div>
              <h6>Ultimate AWS Certified Solutions Architect Associate 2021</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.1</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>511,123</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>

          <div className="second-card-row1">
            <div className="second-card">
              <img className="it-image" src={ITSoftware2} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceD">Design</p>
                <p className="second-price">$9</p>
              </div>
              <h6>
                Ultimate Google Ads Training 2020: Profit with Pay Per Click
              </h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.1</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={design2} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-price">IT & SOFTWARE</p>
                <p className="second-price">$35</p>
              </div>
              <h6>Learn Ethical Hacking From Scratch 2021</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.8</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>451,444</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={Development2} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceDE">Development</p>
                <p className="second-price">$16</p>
              </div>
              <h6>Angular - The Complete Guide (2021 Edition)</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.3</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={marketing2} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceM">Marketing</p>
                <p className="second-price">$23</p>
              </div>
              <h6>
                How to get Diamond in soloQ | League of Legends | Season 11
              </h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.7</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>435,671</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        
      </div>
    </div>
  );
};


export default Studenthome;


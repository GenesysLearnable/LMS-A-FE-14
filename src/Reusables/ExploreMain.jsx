import React, {useState} from "react";
import "../App.css";
import ExploreSideBar from "./ExploreSideBar";
import Footer from "../StudentScreens/Footer";
import Navbar from "../component/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import ITgirl from "../images/IT & Software3.png";
import IT2 from "../images/IT&Software.png";
import star from "../images/Star .png";
import user from "../images/User.svg";
import design from "../images/design.png";
import design3 from "../images/design 3.png";
import development4 from "../images/development4.png";
import development3 from "../images/development3.png";
import marketing from "../images/marketing 3.png";
import marketing6 from "../images/marketing 5.png";
import marketing5 from "../images/marketing 4.png";
import arrowleft from "../images/ArrowLeft.svg";
import arrowright from "../images/ArrowRight.svg";
import fader from "../images/Faders.svg";
import chevron from "../images/donwarrow.svg";
import arrowup from "../images/ChevronDown.svg";
import cpu from "../images/Cpu.svg";
import handshake from "../images/Handshake.svg";
import megaphone from "../images/MegaphoneSimple.svg";
import pack from "../images/Package.svg";
// import star from "../images/Star .png";

const ExMain = () => {
  return (
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
          <FontAwesomeIcon icon={faCircleUser} className=" font-icon" />
        </div>
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li>My Course</li>
            <li>Saved</li>
            <li>Reminder</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <div className="saved-general-container">
        <div className="explore-bar">
          <div className="left-align">
            <div className="filter-box">
              <img src={fader} alt="filter: "></img>
              <p className="filter">Filter</p>
              <p className="filter-number">3</p>
            </div>
            <div className="search-field">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="UI/UX Design" />
            </div>
          </div>
          <div className="trending">
            <p>Sort by:</p>
            <div className="inner-trending">
              <p>Trending</p>
              <img src={chevron} alt="arrow down"></img>
            </div>
          </div>
        </div>

        <div className="suggestion-box">
          <div className="suggestion">
            <p>Suggestion: </p>
            <p className="suggestion-head">user interface</p>
            <p className="suggestion-head">user experience</p>
            <p className="suggestion-head">web design</p>
            <p className="suggestion-head">interface</p>
            <p className="suggestion-head">app</p>
          </div>
          <p className="suggestion-number">
            3, 145,684 results found for "ui/ux design"
          </p>
        </div>

        <div className="Explorebody-side">
          {/* <div className="sidebar-container">
            <ExploreSideBar />
          </div> */}

          <div>
            <div>
              <aside className="aside-container aside-all-bg">
                <div className="aside-category-head">
                  <h3>CATEGORY</h3>
                  <img src={arrowup} alt="arrow" />
                </div>
                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <img src={cpu} alt="cpu" />
                    <p>Technology</p>
                  </div>
                  <img src={arrowup} alt="arrow" />
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Web Development</p>
                  </div>
                  <p className="numbers-and-arrow">574</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Data Science</p>
                  </div>
                  <p className="numbers-and-arrow">568</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Mobile Development</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Software Testing</p>
                  </div>
                  <p className="numbers-and-arrow">317</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Software Engineer</p>
                  </div>
                  <p className="numbers-and-arrow">31</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Software Developmnt Tools</p>
                  </div>
                  <p className="numbers-and-arrow">558</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>No-Code Development</p>
                  </div>
                  <p className="numbers-and-arrow">37</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <img src={handshake} alt="handshake" />
                    <p>Business</p>
                  </div>
                  <img src={arrowup} alt="arrow" />
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <img src={megaphone} alt="megaphone" />
                    <p>Agriculture</p>
                  </div>
                  <img src={arrowup} alt="arrow" />
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <img src={pack} alt="package" />
                    <p>Technology</p>
                  </div>
                  <img src={arrowup} alt="arrow" />
                </div>
              </aside>

              <aside className="aside-container aside-all-bg">
                <div className="aside-category-head">
                  <h3>RATING</h3>
                  <img src={arrowup} alt="arrow" />
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <img className="aside-star" src={star} alt="star" />
                    <p>5 Star</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <img className="aside-star" src={star} alt="star" />
                    <p>4 Star & up</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <img className="aside-star" src={star} alt="star" />
                    <p>3 Star & up</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <img className="aside-star" src={star} alt="star" />
                    <p>2 Star & up</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <img className="aside-star" src={star} alt="star" />
                    <p>1 Star up</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>
              </aside>

              <aside className="aside-container aside-all-bg">
                <div className="aside-category-head">
                  <h3>COURSE LEVEL</h3>
                  <img src={arrowup} alt="arrow" />
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>All Level</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Beginner</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Intermediate</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Expert</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>
              </aside>

              <aside className="aside-container aside-all-bg">
                <div className="aside-category-head">
                  <h3>Price</h3>
                  <img src={arrowup} alt="arrow" />
                </div>

                {/* THIS PART COULD BE RE-ADDED!!! */}
                {/* <div className="slider-container">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={25}
                    className="slider1"
                  ></input>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={75}
                    className="slider2"
                  ></input>
                </div> */}

                <div className="aside-price">
                  <p>
                    $ <span>min: </span>
                  </p>
                  <p>
                    $ <span>min: </span>
                  </p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Paid</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>

                <div className="aside-tech-check">
                  <div className="aside-tech">
                    <input type="checkbox" />
                    <p>Free</p>
                  </div>
                  <p className="numbers-and-arrow">1345</p>
                </div>
              </aside>
            </div>
          </div>

          <div className="ex-cart-container">
            {/* <div className="ex-cart-saved-courses"> */}
            <div className="ex-saved-card-row1">
              <div className="ex-saved-card">
                <img className="ex-it-image" src={design} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceD">DESIGN</p>
                  <p className="ex-saved-price">$49</p>
                </div>
                <h6 className="ex-general-course-title">
                  Complete Blender Creator: Learn 3D Modelling for Beginners
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.9</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>197,637</p>
                    <span>students</span>
                  </div>
                </div>
              </div>

              <div className="ex-saved-card">
                <img className="ex-it-image" src={development4} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceDE">DEVELOPMENTS</p>
                  <p className="ex-saved-price">$9</p>
                </div>
                <h6 className="ex-general-course-title">
                  Selenium WebDriver with Java -Basics to Advanced+Frameworks
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.4</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>154,817</p>
                    <span>students</span>
                  </div>
                </div>
              </div>

              <div className="ex-saved-card">
                <img className="ex-it-image" src={marketing} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceM">MARKETING</p>
                  <p className="ex-saved-price">$49</p>
                </div>
                <h6 className="ex-general-course-title">
                  The Ultimate Drawing Course - Beginner to Advanced
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.9</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>197,637</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ex-saved-card-row1">
              <div className="ex-saved-card">
                <img className="ex-it-image" src={ITgirl} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceD">IT & SOFTWARE</p>
                  <p className="ex-saved-price">$24</p>
                </div>
                <h6 className="ex-general-course-title">
                  Complete Website Responsive Design
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.7</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>451,444</p>
                    <span>students</span>
                  </div>
                </div>
              </div>

              <div className="ex-saved-card">
                <img className="ex-it-image" src={development3} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceDE">DEVELOPMENTS</p>
                  <p className="ex-saved-price">$35</p>
                </div>
                <h6 className="ex-general-course-title">
                  2021 Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.8</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>982,941</p>
                    <span>students</span>
                  </div>
                </div>
              </div>

              <div className="ex-saved-card">
                <img className="ex-it-image" src={marketing5} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceM">MARKETING</p>
                  <p className="ex-saved-price">$24</p>
                </div>
                <h6 className="ex-general-course-title">
                  iPhone Photography | Take Professional Photos On Your iPhone
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.8</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>211,434</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ex-saved-card-row1">
              <div className="ex-saved-card">
                <img className="ex-it-image" src={IT2} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceD">IT & SOFTWARE</p>
                  <p className="ex-saved-price">$35</p>
                </div>
                <h6 className="ex-general-course-title">
                  Learn Python Programming Masterclass
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.0</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>211,434</p>
                    <span>students</span>
                  </div>
                </div>
              </div>

              <div className="ex-saved-card">
                <img className="ex-it-image" src={design3} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceDE">DESIGN</p>
                  <p className="ex-saved-price">$16</p>
                </div>
                <h6 className="ex-general-course-title">
                  Instagram Marketing 2021: Complete Guide To Instagram Gro...
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.5</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>854</p>
                    <span>students</span>
                  </div>
                </div>
              </div>

              <div className="ex-saved-card">
                <img className="ex-it-image" src={marketing6} alt="IT"></img>
                <div className="ex-saved-title-text">
                  <p className="ex-saved-text-priceM">MARKETING</p>
                  <p className="ex-saved-price">$24</p>
                </div>
                <h6 className="ex-general-course-title">
                  Premiere Pro CC for Beginners: Video Editing in Premiere
                </h6>
                <div className="ex-saved-user">
                  <div className="ex-saved-star-left">
                    <img src={star} alt="star"></img>
                    <p>4.8</p>
                  </div>
                  <div className="ex-saved-user-count">
                    <img src={user} alt="user" />
                    <p>854</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="number-slider">
              <img src={arrowleft} alt="left arrow"></img>
              <p className="1">01</p>
              <p className="2">02</p>
              <p className="3">03</p>
              <p className="4">04</p>
              <p className="5">05</p>
              <img src={arrowright} alt="right arrow"></img>
            </div>
            {/* </div> */}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ExMain;

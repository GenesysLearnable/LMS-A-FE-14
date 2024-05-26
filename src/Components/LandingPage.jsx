



import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../StudentScreens/Footer";
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faArrowRight,
  faArrowDown,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import heroimage from "../images/man2.png";
import frame from "../images/Frame.svg";
import webdev from "../images/webdev.svg";
import arrowright from "../images/ArrowRight.svg";
import productdesign from "../images/productdesign.svg";
import web3 from "../images/web3.svg";
import create from "../images/createaccount.svg";
import select from "../images/course.svg";
import trackprogress from "../images/trackprogress.svg";
import enjoy from "../images/enjoy.svg";
import woman from "../images/mama.png";
import tutor1 from "../images/tutor1.svg";
import tutor2 from "../images/tutor2.svg";
import tutor3 from "../images/tutor3.svg";
import tutor4 from "../images/tutor4.svg";
import tutor5 from "../images/tutor5.svg";
import tutor6 from "../images/tutor6.svg";
import IT1 from "../images/ITimagelanding.svg";
import design from "../images/designlanding.svg";
import design2 from "../images/design2.svg";
import marketing from "../images/marketinglanding.svg";
import development from "../images/developmentlanding.svg";
import IT2 from "../images/ITlanding2.svg";
import star from "../images/Star .png";
import user from "../images/User.svg";
import chidi from "../images/chidiebere.svg";
import tappi from "../images/tappi.svg";
import michael from "../images/michael.svg";
import netflix from "../images/netflix.svg";
import cursera from "../images/cursera.svg";
import udemy from "../images/udemy.svg";
import cathead from "../images/cathead.svg";
import shopify from "../images/shopify.svg";
import upwork from "../images/upwork.svg";
import fiverr from "../images/fiverr.svg";
import behance from "../images/behance.svg";
import mark from "../images/mark.svg";

export default function LandingPage() {
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    if (inputValue.length > 0) {
      setShowSearchIcon(false);
      setSuggestion("ui/ux design", "web development");
    } else {
      setShowSearchIcon(true);
      setSuggestion("");
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <img
            className="navbar-logo"
            src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
            alt="Logo"
          />
          <Link className="landing-link-explore-text" to="/explore">
            Explore
          </Link>
          <div className="search-box">
            {showSearchIcon && (
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            )}
            <input
              type="text"
              placeholder="Search Course"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <Link className="landing-link-btn" to="/error">
            <FontAwesomeIcon
              icon={faBell}
              className="user-icon landing-user-profile-link"
            />
          </Link>
          <span className="nav-text-link">GoLearn Business</span>
          <div className="landing-btn white-btn">
            <Link className="landing-link-white-btn" to="/login">
              <p>Login</p>
            </Link>
          </div>
          <div className="landing-btn">
            <Link className="landing-link-btn" to="/signup">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="landing-hero-section">
        <div className="hero-box">
          <div className="left-hero">
            <p>EDUCATION</p>
            <div className="hero-texts">
              <h3>
                GOLearn <span>Academy</span>
              </h3>
              <p>
                Empower individuals to pursue knowledge and skills at their own
                pace.
              </p>
            </div>
          </div>
          <img className="landing-hero-image" src={heroimage} alt="hero" />
        </div>
        <div className="hero-attachment">
          <img src={frame} alt="frame" />
          <div>
            <h4>Learn your way</h4>
            <p>
              We have a lot of resources, and it can be overwhelming to get
              started. How do you learn best?
            </p>
          </div>
          <div className="landing-btn arrow-btn-text show-link">
            <Link className="arrow-btn-text show-link" to="/error">
              <p>Show</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </div>
        </div>
      </div>

      {searchText && (
        <div className="search-result-box">
          <Link to="/explore" className="search-result-link">
            UI/UX Design
          </Link>
        </div>
      )}

      <section className="landing-section1">
        <h5>What we do</h5>
        <h4>Our education system will give you the perfect solution.</h4>
        <div className="product-card-container">
          <div className="card">
            <img src={webdev} alt="wed dev"></img>
            <h6>Web Development</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div className="arrow-btn">
              <Link className="arrow-btn-text" to="/explore">
                <p>Learn More</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#74C0FC" }}
                />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={productdesign} alt="wed dev"></img>
            <h6>UI/UX Design</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div className="arrow-btn">
              <Link className="arrow-btn-text" to="/explore">
                <p>Learn More</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#74C0FC" }}
                />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={web3} alt="wed dev"></img>
            <h6>Web 3</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div className="arrow-btn">
              <Link className="arrow-btn-text" to="/explore">
                <p>Learn More</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#74C0FC" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section2">
        <div className="section-mid">
          <div>
            <h5>Join over 15,000+ tech people</h5>
            <h4>Various types of courses will scale up your skills.</h4>
          </div>
          <div className="section-body">
            <div className="card-top">
              <div className="mini-card">
                <img src={create} alt="create "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>

              <div className="mini-card">
                <img src={select} alt="select "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>
            </div>

            <div className="card-top">
              <div className="mini-card">
                <img src={trackprogress} alt="progress "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>

              <div className="mini-card">
                <img src={enjoy} alt="user "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img">
          <img src={woman} alt="woman "></img>
        </div>
      </section>

      <section className="landing-section3">
        <div className="section3-box">
          <h5>Meet our Tutors</h5>
          <h4>We have the best Tutors that will handle you well.</h4>
          <div className="tutors-container">
            <div className="tutors">
              <img src={tutor1} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor2} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor3} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor4} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor5} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor6} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section4">
        <div className="box1">
          <div className="info-text">
            <h5>Testimonials</h5>
            <h4>Read what our Customers say</h4>
          </div>
          <div className="arrow-btn">
            <Link className="arrow-btn-text" to="/explore">
              <p>Read More</p>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#74C0FC" }}
              />
            </Link>
          </div>
        </div>

        <div className="review-card">
          <img src={star} alt="star" />
          <p>
            “I am a very busy person who barely has time to cook. As a result, I
            often end up ordering takeout multiple times a week. This is a
            costly habit. But GoLearn Academy has helped me learn how to cook
            healthy and affordable meals at home. I am now saving a lot of
            money!”
          </p>
          <div className="user-review">
            <img src={user} alt="user" />
            <div className="review-text">
              <h6>Daniel Austin</h6>
              <p>Student</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <img src={star} alt="star" />
          <p>
            “I am a very busy person who barely has time to cook. As a result, I
            often end up ordering takeout multiple times a week. This is a
            costly habit. But GoLearn Academy has helped me learn how to cook
            healthy and affordable meals at home. I am now saving a lot of
            money!”
          </p>
          <div className="user-review">
            <img src={user} alt="user" />
            <div className="review-text">
              <h6>Daniel Austin</h6>
              <p>Student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section5">
        <div className="clients">
          <img src={chidi} alt="client" />
          <img src={tappi} alt="client" />
          <img src={michael} alt="client" />
          <img src={netflix} alt="client" />
          <img src={cursera} alt="client" />
          <img src={udemy} alt="client" />
          <img src={cathead} alt="client" />
          <img src={shopify} alt="client" />
          <img src={upwork} alt="client" />
          <img src={fiverr} alt="client" />
          <img src={behance} alt="client" />
          <img src={mark} alt="client" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

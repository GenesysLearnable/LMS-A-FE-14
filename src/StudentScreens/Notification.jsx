import React, { useState } from "react";
import "../App.css";
import "./StudentSavedCourse.css";
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
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Notify from "./Notify";

const Notification = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      category: "IT & SOFTWARE",
      price: 35,
      title: "Learn Python Programming Masterclass",
      rating: 4.0,
      students: 211434,
      image: ITimage,
    },
    {
      id: 2,
      category: "Design",
      price: 49,
      title: "Complete Website Responsive Design",
      rating: 4.9,
      students: 197637,
      image: design,
    },
    {
      id: 3,
      category: "Development",
      price: 32,
      title: "Adobe Premiere Pro CC Advanced Training Course",
      rating: 4.6,
      students: 236568,
      image: development,
    },
    {
      id: 4,
      category: "Marketing",
      price: 13,
      title: "Ultimate AWS Certified Solutions Architect Associate 2021",
      rating: 4.1,
      students: 511123,
      image: marketing,
    },
    {
      id: 5,
      category: "Design",
      price: 9,
      title: "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
      rating: 4.1,
      students: 154817,
      image: ITSoftware2,
    },
    {
      id: 6,
      category: "IT & SOFTWARE",
      price: 35,
      title: "Learn Ethical Hacking From Scratch 2021",
      rating: 4.8,
      students: 451444,
      image: design2,
    },
    {
      id: 7,
      category: "Development",
      price: 16,
      title: "Angular - The Complete Guide (2021 Edition)",
      rating: 4.3,
      students: 197637,
      image: Development2,
    },
    {
      id: 8,
      category: "Marketing",
      price: 23,
      title: "How to get Diamond in soloQ | League of Legends | Season 11",
      rating: 4.7,
      students: 435671,
      image: marketing2,
    },
  ]);

  const [showNotify, setShowNotify] = useState(false);

  const handleNotificationClick = () => {
    setShowNotify(!showNotify);
  };

  const increaseStudents = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, students: course.students + 1 } : course
      )
    );
  };

  const increaseRating = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id && course.rating < 5
          ? { ...course, rating: course.rating + 0.1 }
          : course
      )
    );
  };

  return (
    <div className={showNotify ? "dimmed" : ""}>
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
          <FontAwesomeIcon
            icon={faBell}
            className="notification-icon"
            onClick={handleNotificationClick}
          />
          <p className="logout-icon">
            <FontAwesomeIcon icon={faDoorOpen} /> Logout
          </p>
          <Link to="/profile">
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
          </Link>
        </div>
        <div className="navbar-links">
          <ul>
            <Link to="/explore">
              <li>Home</li>
            </Link>
            <Link to="/mycourse">
              <li>My Course</li>
            </Link>
            <Link to="/savedcourse">
              <li>Saved</li>
            </Link>
            <Link to="/remind">
              <li>Reminder</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
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
              <p className="saved-price">$49</p>
            </div>
            <h6>Complete Website Responsive Design</h6>
            <div className="saved-user">
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.9</p>
              </div>
              <div className="saved-user-count">
                <img src={user} alt="user" />
                <p>197,637</p>
                <span>students</span>
              </div>
            </div>
          </div>

          <div className="saved-card">
            <img className="it-image" src={development} alt="IT"></img>
            <div className="saved-title-text">
              <p className="saved-text-priceDE">Development</p>
              <p className="saved-price">$32</p>
            </div>
            <h6>Adobe Premiere Pro CC Advanced Training Course</h6>
            <div className="saved-user">
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.6</p>
              </div>
              <div className="saved-user-count">
                <img src={user} alt="user" />
                <p>236,568</p>
                <span>students</span>
              </div>
            </div>
          </div>

          <div className="saved-card">
            <img className="it-image" src={marketing} alt="IT"></img>
            <div className="saved-title-text">
              <p className="saved-text-priceM">Marketing</p>
              <p className="saved-price">$13</p>
            </div>
            <h6>Ultimate AWS Certified Solutions Architect Associate 2021</h6>
            <div className="saved-user">
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.1</p>
              </div>
              <div className="saved-user-count">
                <img src={user} alt="user" />
                <p>511,123</p>
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
              <p className="saved-price">$9</p>
            </div>
            <h6>
              Ultimate Google Ads Training 2020: Profit with Pay Per Click
            </h6>
            <div className="saved-user">
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.1</p>
              </div>
              <div className="saved-user-count">
                <img src={user} alt="user" />
                <p>154,817</p>
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
                <p>4.8</p>
              </div>
              <div className="saved-user-count">
                <img src={user} alt="user" />
                <p>451,444</p>
                <span>students</span>
              </div>
            </div>
          </div>

          <div className="saved-card">
            <img className="it-image" src={Development2} alt="IT"></img>
            <div className="saved-title-text">
              <p className="saved-text-priceDE">Development</p>
              <p className="saved-price">$16</p>
            </div>
            <h6>Angular - The Complete Guide (2021 Edition)</h6>
            <div className="saved-user">
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.3</p>
              </div>
              <div className="saved-user-count">
                <img src={user} alt="user" />
                <p>197,637</p>
                <span>students</span>
              </div>
            </div>
          </div>

          <div className="saved-card">
            <img className="it-image" src={marketing2} alt="IT"></img>
            <div className="saved-title-text">
              <p className="saved-text-priceM">Marketing</p>
              <p className="saved-price">$23</p>
            </div>
            <h6>How to get Diamond in soloQ | League of Legends | Season 11</h6>
            <div className="saved-user">
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.7</p>
              </div>
              <div className="saved-user-count">
                <img src={user} alt="user" />
                <p>435,671</p>
                <span>students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNotify && <Notify />}
      <Footer />
    </div>
  );
};

export default Notification;

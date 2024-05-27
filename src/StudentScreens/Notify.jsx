import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import mike from "../images/notify1.svg";
import sara from "../images/notify2.svg";
import favor from "../images/notify3.svg";

export default function Notify() {
  return (
    <div className="notify-function">
      <div className="general-notification-box">
        <div className="top-head-text">
          <h4>Notifications</h4>
          <Link to="/notify">
            <p className="notify-mark">Mark all as read</p>
          </Link>
        </div>
        <div className="notify-card">
          <div className="notify-popup">
            <img src={mike} alt="man"></img>
            <div className="message-text">
              <p>
                New Course added <span>Check it out!</span>
              </p>
              <p className="time">12 mins ago</p>
            </div>
          </div>

          <div className="notify-popup">
            <img src={sara} alt="man"></img>
            <div className="message-text">
              <p>
                Your comment has a response. <a href="#">View</a>
              </p>
              <p className="time">3 days ago</p>
            </div>
          </div>

          <div className="notify-popup">
            <img src={favor} alt="man"></img>
            <div className="message-text">
              <p>
                Start a career in Digital Marketing this month.{" "}
                <a href="#">View</a>
              </p>
              <p className="time">8 May 2024 . 3:26 pm</p>
            </div>
          </div>

          <div className="notify-popup">
            <img src={favor} alt="man"></img>
            <div className="message-text">
              <p>
                Audit a course for free. <a href="#">View</a>
              </p>
              <p className="time">7 May 2024 . 3:26 pm</p>
            </div>
          </div>

          <div className="notify-popup">
            <img src={favor} alt="man"></img>
            <div className="message-text">
              <p>
                Buy a course n communication today! <a href="#">View</a>
              </p>
              <p className="time">5 May 2024 . 10:00 pm</p>
            </div>
          </div>

          <div className="notify-popup">
            <img src={favor} alt="man"></img>
            <div className="message-text">
              <p>
                Stay on track by learning everyday, continue your course.
                <a href="#">View</a>
              </p>
              <p className="time">2 May 2024 . 12:00 pm</p>
            </div>
          </div>

          <div className="notify-popup">
            <img src={favor} alt="man"></img>
            <div className="message-text">
              <p>
                Start a career in Digital Marketing this month.{" "}
                <a href="#">View</a>
              </p>
              <p className="time">1 May 2024 . 3:26 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

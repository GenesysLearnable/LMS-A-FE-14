import React from "react";
import logo from "../images/golearn-logo.png";
import backarrow from "../images/chevron_back.svg";
import googleicon from "../images/googleicon.svg";
import './ForgotPwd.css';
import forgotpwdimage from '../images/forgpwdimage.png';
import { Link } from "react-router-dom";

export default function ForgotPwd() {
  return (
    <div className="forget-all-container">
      <div className="container-with-image">
        <div className="forgot-container">
          <img className="forgot-logo" src={logo} alt="logo" />
          <button className="forgot-nav-head">
            <img className="forgot-arrow" src={backarrow} alt="arrow" />
            <p className="forgot-text-arrow">
              Back to{" "}
              <span>
                {/* <a href="#">Login</a> */}
                <Link to="/login">Login</Link>
              </span>
            </p>
          </button>
          <div className="forgot-head">
            <h2 className="forgot-head-text">Forgot your password?</h2>
            <p className="forgot-paragraph">
              Don’t worry, happens to all of us. Enter your email below to
              recover your password.
            </p>
          </div>
          <div className="forgot-form">
            {/* <label className="forgot-label" htmlFor="email">Email</label> */}
            <input
              className="forgot-input-field"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
            ></input>
          </div>
          <Link to="/Verifypassword" className="forgot-btn1">
            Submit
          </Link>
          <div className="horizontal-line">
            <div className="line"></div>
            <p>or login with</p>
            <div className="line"></div>
          </div>
          <div className="forgot-btn2" type="submit">
            <p>Continue with Google</p>
            <img className="forgot-google" src={googleicon} alt="google" />
          </div>
        </div>
        <img
          className="forgot-background2"
          src={forgotpwdimage}
          alt="forgot password"
        ></img>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../images/golearn-logo.png";
import backarrow from "../images/chevron_back.svg";
import "./VerifyPwd.css";
import verifyimage from "../images/verifyimage.png";
import verifyeye from "../images/veirfy-eye.svg";
import { Link } from "react-router-dom";

export default function VerifyPwd() {
  return (
    <div className="verify-all-container">
      <div className="verify-container-with-image">
        <div className="verify-container">
          <img className="verify-logo" src={logo} alt="logo" />
          <button className="verify-nav-head">
            <img className="verify-arrow" src={backarrow} alt="arrow" />
            <p className="verify-text-arrow">
              Back to{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </button>
          <div className="verify-head">
            <h2 className="verify-head-text">Verify code</h2>
            <p className="verify-paragraph">
              An authentication code has been sent to your email.
            </p>
          </div>
          <div className="forgot-form">
            <input
              className="verify-input-field"
              name="email"
              type="email"
              placeholder="Enter verification code"
            ></input>
            <img className="verifyeye" src={verifyeye} alt="eye icon" />
          </div>
          <p className="verify-resend-code">
            Didn't receive a code? <a href="#">Resend</a>{" "}
          </p>
          <Link to="/setpassword" className="verify-btn1">
            Verify
          </Link>
        </div>
        <img
          className="verify-background2"
          src={verifyimage}
          alt="forgot password"
        ></img>
      </div>
    </div>
  );
}

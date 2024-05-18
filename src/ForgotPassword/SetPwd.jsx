import React from "react";
import logo from "../images/golearn-logo.png";
import backarrow from "../images/chevron_back.svg";
import "./SetPwd.css";
import setimage from "../images/setpwd.png";
import verifyeye from "../images/veirfy-eye.svg";

export default function SetPwd() {
  return (
    <div className="set-all-container">
      <div className="set-container-with-image">
        <div className="set-container">
          <img className="set-logo" src={logo} alt="logo" />
          <div className="set-middle-content">
            <button className="set-nav-head">
              <img className="set-arrow" src={backarrow} alt="arrow" />
              <p className="set-text-arrow">
                Back to{" "}
                <span>
                  <a href="#">Login</a>
                </span>
              </p>
            </button>
            <div className="set-head">
              <h2 className="set-head-text">Set a Password</h2>
              <p className="set-paragraph">
                An authentication code has been sent to your email.
              </p>
            </div>
            <div className="set-form">
              <input
                className="set-input-field"
                name="email"
                type="email"
                placeholder="Enter verification code"
              ></input>
              <img className="seteye" src={verifyeye} alt="eye icon" />
            </div>
            <p className="set-resend-code">
              Didn't receive a code? <a href="#">Resend</a>{" "}
            </p>
            <button className="set-btn1" type="submit">
              Verify
            </button>
          </div>
        </div>
        <img
          className="set-background2"
          src={setimage}
          alt="set password"
        ></img>
      </div>
    </div>
  );
}

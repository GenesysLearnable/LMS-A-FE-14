import React from "react";
import "./adminLogin.css";

export default function Login() {
  return (
    <div>
      <div className="container">
        <div className="org-login">
          <h1 className="header-text">Log in with your organization</h1>
          <div className="form">
            <label htmlFor="input">ENTER YOUR ORGANIZATION URL</label>
            <input
              name="url"
              type="url"
              placeholder="e.g: company.com or company.org"
              className="input-box"
            ></input>
          </div>
          <button className="btn" type="submit">
            Continue
          </button>
          <p>
            Back to <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

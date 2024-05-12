import React, { useState } from "react";
import "./StudentLogin.css";
import googleImage from './images/plus.svg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { f1a0 } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter a password.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div>
        <div className="student-login-container">
          <form className="student-login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="std-login-label-card">
              <label className="std-login-label2" htmlFor="email">
                Email
              </label>
              <input
                className="std-login-input"
                name="text"
                typeof="email"
                value={email}
                onChange={handleEmailChange}
              ></input>
            </div>

            <div>
              <input
                className="std-inp-for-pawd-login"
                name="text"
                typeof="text"
                placeholder="Create Password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
              {/* <FontAwesomeIcon icon={faEye} className="eye-icon" /> */}
            </div>
            <p className="student-login-forgot-pwd">
              <a href="#">Forgot Password?</a>
            </p>
            <div className="std-login-checked">
              <input className="checked-login" type="checkbox"></input>
              <p>Keep me logged in</p>
            </div>
            <button type="submit" className="student-login-btn">
              Login
            </button>
            <p>-------------------------- or -----------------------------</p>
            <div className="std-login-google">
              <p>Continue with Google</p>
              {/* <FontAwesomeIcon icon={f1a0} /> */}
            </div>
            <p className="std-login-p-link">
              Need an account? <a href="#">Create one</a>
              {/* Need an account? <Link to="/signup">Create one</Link> */}
            </p>
            <hr></hr>
            <p className="std-login-org">
              <a href="#">Login with your organization</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

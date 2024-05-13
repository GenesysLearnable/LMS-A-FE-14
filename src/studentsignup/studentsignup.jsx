import React, { useState } from "react";
import "./studentsignup.css";
import { Link } from "react-router-dom";


export default function SignUpForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

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
        <div className="student-signup-container">
          <form className="student-signup-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div className="std-signup-label-card">
              <label className="std-signup-label1" htmlFor="text">
                Your Name
              </label>
              <input
                className="std-signup-input"
                name="text"
                typeof="text"
                value={name}
                onChange={handleNameChange}
              ></input>
            </div>

            <div className="std-signup-label-card">
              <label className="std-signup-label2" htmlFor="email">
                Email
              </label>
              <input
                className="std-signup-input"
                name="text"
                typeof="email"
                value={email}
                onChange={handleEmailChange}
              ></input>
            </div>

            <div>
              <input
                className="std-inp-for-pawd"
                name="text"
                typeof="text"
                placeholder="Create Password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
              {/* <FontAwesomeIcon icon={faEye} className="eye-icon" /> */}
            </div>
            <p className="student-signup-forgot-pwd">
              <a href="#">Forgot Password?</a>
            </p>
            <div className="std-signup-checked">
              <input className="checked" type="checkbox"></input>
              <p>Keep me logged in</p>
            </div>
            <button type="submit" className="student-signup-btn">
              <Link to="/welcome">Join for Free</Link>
            </button>
            <p>-------------------------- or ------------------------------</p>
            <div className="std-signup-google">
              <p>Continue with Google</p>
              {/* <img src={googleImage} alt="googleicon"></img> */}
              {/* <FontAwesomeIcon icon={f1a0} /> */}
            </div>
            <p className="std-signup-p-link">
              Already on GoLearn? <Link to="/login">Login</Link>
            </p>
            <hr></hr>
            <p className="std-sign-org">
              <Link to="/signup">Sign up with your organization</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

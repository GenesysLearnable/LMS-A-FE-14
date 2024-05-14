import React, { useState } from "react";
import "./studentsignup.css";
import Background from "../component/background";
import { Link } from "react-router-dom";
import googleicon from "../images/googleicon.svg";
import axios from "axios";
import "../App.css";
// import googleImage from './images/plus.svg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { f1a0 } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SETUP FOR API AUTHENTICATION!!!
  const handleSignup = async (username, email, password) => {
    try {
      const response = await axios.post(
        "https://lms-a-be-14-z0ct.onrender.com/signup",
        { username, email, password },
       { headers: {
                'Content-Type': 'application/json'
            }}
      );
      console.log(response.data);
      return true;
    } catch (error) {
      console.error("Signup failed:", error.response.data.message);
    }
  };

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

    // if (!name.trim()) {
    //   alert("Please enter your name.");
    //   return;
    // }

    // if (!email.trim()) {
    //   alert("Please enter your email.");
    //   return;
    // }

    // if (!password.trim()) {
    //   alert("Please enter a password.");
    //   return;
    // }

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);

    const success = handleSignup(name, email, password).then(() => {
      console.log('database accessed');
    });
    console.log('Signup successful:' + success);

    // setName("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <div>
      <Background>
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
              <button
                type="submit"
                className="student-signup-btn"
                onClick={handleSubmit}
              >
                {/* <a href="#">Join for Free</a> */}
                <Link to="/welcome">Join for Free</Link>
              </button>
              <p className="dash">------------------ or ------------------</p>
              <div className="std-signup-google">
                <p>Continue with Google</p>
                <img src={googleicon} alt="google icon" />
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
      </Background>
    </div>
  );
}

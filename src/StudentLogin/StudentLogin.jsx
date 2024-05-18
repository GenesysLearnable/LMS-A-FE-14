import React, { useState } from "react";
import "./StudentLogin.css";
import Background from "../component/background";
import { Link } from "react-router-dom";
import googleicon from '../images/googleicon.svg';
import axios from 'axios';
import "../App.css"
// import googleImage from './images/plus.svg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { f1a0 } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
        "https://lms-a-be-14-z0ct.onrender.com/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
  }
}

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleGoogle = async (event) => {
        try {
      const response = await axios.get(
        "https://lms-a-be-14-z0ct.onrender.com/google",
        // { email, password },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );
      console.log(response);
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
  }
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    // if (!name.trim()) {
    //   alert("Please enter your name.");
    //   return;
    // }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter a password.");
      return;
    }


    // console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    const res = handleLogin(email, password);

    // setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Background>
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
                {/* <a href="/">Forgot Password?</a> */}
                <Link to="/Forgotpassword">Forgot Password</Link>
              </p>
              <div className="std-login-checked">
                <input className="checked-login" type="checkbox"></input>
                <p>Keep me logged in</p>
              </div>
              <button
                type="submit"
                className="student-login-btn"
                onClick={handleSubmit}
              >
                Login
              </button>
              <p className="dash">------------------ or ------------------</p>
              <div className="std-login-google" onClick={handleGoogle}>
                <p>Continue with Google</p>
                <img src={googleicon} alt="google icon" />
              </div>
              <p className="std-login-p-link">
                Need an account? <Link to="/studentsignup">Create one</Link>
                {/* Need an account? <Link to="/signup">Create one</Link> */}
              </p>
              <hr></hr>
              <p className="std-login-org">
                <a href="#">Login with your organization</a>
              </p>
            </form>
          </div>
        </div>
      </Background>
    </div>
  );
}

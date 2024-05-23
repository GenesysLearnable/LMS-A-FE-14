import React from "react";
import "./App.css";
import LoginForm from "./StudentLogin/StudentLogin"

export default function GoLearn() {

    return (
      <div className="App">
      <LoginForm />
      </div>
    );
}
import React from "react";
import "./App.css";
import LoginForm from "./StudentLogin/StudentLogin";
import LandingPage from "./Components/LandingPage";
import SetPwd from "./ForgotPassword/SetPwd";

export default function GoLearn() {
  return (
    <div className="App">

      <LandingPage />
  
    </div>
  );
}

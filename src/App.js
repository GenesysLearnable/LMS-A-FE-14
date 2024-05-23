import React from "react";
import "./App.css";
import LoginForm from "./StudentLogin/StudentLogin";
import Studentschool from "./StudentScreens/Studentschool";
import Studenthome from "./StudentScreens/Studenthome"
// import LandingPage from "./Components/LandingPage";
import LandingPage from "./Components/LandingPage";
// import ExpMain from "./Reusables/ExploreMain";

export default function GoLearn() {
  return (
    <div className="App">
      <LoginForm />
      <Studentschool />
      <Studenthome />
      {/* <LandingPage /> */}
      <LandingPage />
      {/* <ExpMain /> */}
    </div>
  );
}


import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";



export default function GoLearn() {
    return (
      <div className="App">
        <LandingPage />
        <LandingPage />
        {/* <ExMain /> */}
        {/* <Link1 /> */}
        {/* <MyCourse /> */}
      </div>
    );
}
import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import CourseCompleted from "./MyCourseCompleted/CourseCompleted";
import Course from "./MyCourse/MyCourse.jsx";
import Logout from "./StudentScreens/StudentLogoutPage.jsx";
import WarningPage from "./StudentScreens/WarningPage.jsx";
import ExitPage from "./StudentScreens/ExitPage.jsx";
import Studentschool from "./StudentScreens/Studentschool.jsx";

export default function GoLearn() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <CourseCompleted />
      <Course />
      {/* <Logout /> */}
      {/* <WarningPage /> */}
      {/* <ExitPage /> */}
      {/* <Studentschool /> */}
    </div>
  );
}

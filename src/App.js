
import React from "react";
import "./App.css";
// import ExMain from "./Reusables/ExploreMain";
import LandingPage from "./Components/LandingPage";
import CourseCompleted from "./MyCourseCompleted/CourseCompleted";
import Course from "./MyCourse/MyCourse.jsx";
import Logout from "./StudentScreens/StudentLogoutPage.jsx";
import WarningPage from "./StudentScreens/WarningPage.jsx";
import ExitPage from "./StudentScreens/ExitPage.jsx";
import Studentschool from "./StudentScreens/Studentschool.jsx";
import StudentReminder from "./StudentScreens/StudentReminder.jsx";
import Notification from "./StudentScreens/Notification.jsx";
import Notify from "./StudentScreens/Notify.jsx";
import NotifyEmpty from "./StudentScreens/NotifyEmpty.jsx";

export default function GoLearn() {
  return (
    <div className="App">
      <LandingPage />
      {/* <CourseCompleted /> */}
      {/* <Course /> */}
      {/* <Logout /> */}
      {/* <WarningPage /> */}
      {/* <ExitPage /> */}
      {/* <Studentschool /> */}
      {/* <StudentReminder /> */}
      {/* <Notification /> */}
      {/* <Notify /> */}
      {/* <NotifyEmpty /> */}
    </div>
  );

}

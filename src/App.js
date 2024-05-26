import React from "react";
import "./App.css";
// import ExMain from "./Reusables/ExploreMain";
import LandingPage from "./Components/LandingPage";
// import Link1 from "./UXcomponent/link1";
// import MyCourse from "./MyCourse/MyCourse";
import WarningPage from "./StudentScreens/StudentWarning.jsx";
import StudentExit from "./StudentScreens/StudentExit.jsx";
import StudentProfileLogOut from "./StudentScreens/StudentProfileLogOut.jsx";

export default function GoLearn() {
    return (
      <div className="App">
        {/* <LandingPage /> */}
        {/* <ExMain /> */}
        {/* <Link1 /> */}
        {/* <MyCourse /> */}
        <WarningPage />
        {/* <StudentExit /> */}
        <StudentProfileLogOut />
      </div>
    );
}
import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import CourseCompleted from "./MyCourseCompleted/CourseCompleted"


export default function GoLearn() {
    return (
      <div className="App">
        <CourseCompleted />
      </div>
    );
}
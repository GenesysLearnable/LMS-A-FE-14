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
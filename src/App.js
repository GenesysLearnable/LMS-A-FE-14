import React from "react";
import "./App.css";
import LoginForm from "./StudentLogin/StudentLogin";
import ExploreSideBar from "./Reusables/ExploreSideBar";

export default function GoLearn() {

    return (
      <div className="App">
        <LoginForm />
        <ExploreSideBar />
      </div>
    );
}


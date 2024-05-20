import React from "react";
import "./App.css";
import LoginForm from "./StudentLogin/StudentLogin";
import ExpMain from "./Reusables/ExploreMain";

export default function GoLearn() {
  return (
    <div className="App">
      <LoginForm />
      {/* <ExpMain /> */}
    </div>
  );
}

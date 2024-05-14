import React from "react";
import "./App.css";
import LoginForm from "./StudentLogin/StudentLogin";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Courses from './Courses/selectcourse';
import SignUpForm from "./studentsignup/studentsignup";
import AgricDropdown from "./Dropdown/AgricDropdown";
import ArtDropdown from "./Dropdown/ArtDropdown";
import BusinessDropdonwn from "./Dropdown/BusinessDropdown";
import TechnologyDropdown from "./Dropdown/TechnologyDropdown";
import ForgotPwd from "./ForgotPassword/ForgotPwd";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route index element={<h1>Testing Routing</h1>} />)
// );



export default function GoLearn() {

    return (
      <div className="App">
        <LoginForm />
        {/* <Header />
        <Welcome />
        <Signup /> */}
        {/* <SignUpForm /> */}
        {/* <Login />
        <Header />
        <Courses /> */}
        {/* <AgricDropdown />
        <ArtDropdown />
        <BusinessDropdonwn />
        <TechnologyDropdown />
        <ForgotPwd /> */}
      </div>
    );
}
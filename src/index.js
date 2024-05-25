import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./component/welcome";
import LoginForm from "./StudentLogin/StudentLogin";
import Signup from "./Components/AdminSignUp";
import AdminLogin from "./Components/AdminLogin";
import SignUpForm from "./studentsignup/studentsignup";
import ForgotPwd from "./ForgotPassword/ForgotPwd";
import VerifyPwd from "./ForgotPassword/VerifyPwd";
import SetPwd from "./ForgotPassword/SetPwd";
import ExMain from "./Reusables/ExploreMain";
import ErrorPage from "./StudentScreens/ErrorPage";
import Link1 from "./UXcomponent/link1";
import MyCourseNav from "./component/MyCourseNav";
import StudentCart from "./StudentScreens/StudentCart";
import StudentHome from "./StudentScreens/StudentHome";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "welcome", element: <Welcome /> },
  { path: "login", element: <LoginForm /> },
  { path: "signup", element: <Signup /> },
  { path: "studentsignup", element: <SignUpForm /> },
  { path: "Forgotpassword", element: <ForgotPwd /> },
  { path: "Verifypassword", element: <VerifyPwd /> },
  { path: "setpassword", element: <SetPwd /> },
  { path: "error", element: <ErrorPage /> },
  { path: "course-open", element: <Link1 /> },
  { path: "explore", element: <StudentHome /> },
  { path: "adminlogin", element: <AdminLogin /> },
  { path: "mycourse", element: <MyCourseNav /> },
  { path: "cart", element: <StudentCart /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

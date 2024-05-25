import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from './component/welcome';
import LoginForm from './StudentLogin/StudentLogin';
import Signup from './Components/AdminSignUp';
import SignUpForm from './studentsignup/studentsignup';
import ForgotPwd from './ForgotPassword/ForgotPwd';
import VerifyPwd from './ForgotPassword/VerifyPwd';
import SetPwd from './ForgotPassword/SetPwd';
import Studenthome from './StudentScreens/StudentHome'
import ExMain from './Reusables/ExploreMain'



const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "welcome", element: <Welcome /> },
  { path: "login", element: <LoginForm /> },
  { path: "signup", element: <Signup /> },
  { path: "studentsignup", element: <SignUpForm /> },
  { path: "Forgotpassword", element: <ForgotPwd /> },
  { path: "Verifypassword", element: <VerifyPwd /> },
  { path: "setpassword", element: <SetPwd /> },
  { path: "studenthome", element: <Studenthome /> },
  { path: "explore", element: <ExMain /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

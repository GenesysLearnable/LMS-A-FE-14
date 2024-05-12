import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from './reportWebVitals';
// import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from './component/welcome';
import LoginForm from './StudentLogin/StudentLogin';
import Signup from './Components/AdminSignUp';
import Courses from './Courses/selectcourse';
import SignUpForm from './studentsignup/studentsignup';



const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "welcome", element: <Welcome /> },
  { path: "login", element: <LoginForm /> },
  { path: "signup", element: <Signup /> },
  { path: "technology", element: <Courses /> },
  { path: "business", element: <Courses /> },
  { path: "art", element: <Courses /> },
  { path: "agriculture", element: <Courses /> },
  { path: "studentsignup", element: <SignUpForm /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

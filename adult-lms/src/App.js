import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Signup from "./Components/AdminSignUp";
import "./App.css";
import Login from "./Components/AdminLogin";
import Welcome from "./component/welcome";
import Header from "./component/welcomeheader";
import LoginForm from "./StudentLogin/StudentLogin";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>Testing Routing</h1>} />)
);

export default function GoLearn() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <LoginForm />
      <Signup />
      <Login />
    </div>
  );
}

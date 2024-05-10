import React from 'react';
import Signup from './Components/AdminSignUp';
import './App.css';
import Login from './Components/AdminLogin';
import Welcome from './component/welcome';
import Header from './component/welcomeheader';


    export default function GoLearn() {
    

  return (
<div className="App">
  <Signup />
<Login />
      <Header />
      <Welcome />
    </div>
  )
}

import React from "react";
import "./App.css";
<<<<<<< HEAD
import LoginForm from "./StudentLogin/StudentLogin"
=======
import LoginForm from "./StudentLogin/StudentLogin";
import Studentschool from "./StudentScreens/Studentschool";
import Studenthome from "./StudentScreens/StudentHome";
// import LandingPage from "./Components/LandingPage";
// import ExpMain from "./Reusables/ExploreMain";
>>>>>>> 013d26eb99ba26e990fc7386a61301fb7f7f5bfa

export default function GoLearn() {

    return (
      <div className="App">
      <LoginForm />
<<<<<<< HEAD
      </div>
    );
}

=======
      <Studentschool />
      <Studenthome />
      {/* <LandingPage /> */}
      {/* <ExpMain /> */}
    </div>
  );
}


>>>>>>> 013d26eb99ba26e990fc7386a61301fb7f7f5bfa

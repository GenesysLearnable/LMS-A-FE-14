// import React, { useState, useEffect } from "react";
// import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "../component/navbar";
// import Footer from "../StudentScreens/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faSearch,
//   faCircleUser,
//   faArrowRight,
//   faArrowDown,
//   faAngleDown,
//   faAngleRight,
// } from "@fortawesome/free-solid-svg-icons";
// import heroimage from "../images/man2.png";
// import frame from "../images/Frame.svg";
// import webdev from "../images/webdev.svg";
// import arrowright from "../images/ArrowRight.svg";
// import productdesign from "../images/productdesign.svg";
// import web3 from "../images/web3.svg";
// import create from "../images/createaccount.svg";
// import select from "../images/course.svg";
// import trackprogress from "../images/trackprogress.svg";
// import enjoy from "../images/enjoy.svg";
// import woman from "../images/mama.png";
// import tutor1 from "../images/tutor1.svg";
// import tutor2 from "../images/tutor2.svg";
// import tutor3 from "../images/tutor3.svg";
// import tutor4 from "../images/tutor4.svg";
// import tutor5 from "../images/tutor5.svg";
// import tutor6 from "../images/tutor6.svg";
// import IT1 from "../images/ITimagelanding.svg";
// import design from "../images/designlanding.svg";
// import design2 from "../images/design2.svg";
// import marketing from "../images/marketinglanding.svg";
// import development from "../images/developmentlanding.svg";
// import IT2 from "../images/ITlanding2.svg";
// import star from "../images/Star .png";
// import user from "../images/User.svg";
// import chidi from "../images/chidiebere.svg";
// import tappi from "../images/tappi.svg";
// import michael from "../images/michael.svg";
// import netflix from "../images/netflix.svg";
// import cursera from "../images/cursera.svg";
// import udemy from "../images/udemy.svg";
// import cathead from "../images/cathead.svg";
// import shopify from "../images/shopify.svg";
// import upwork from "../images/upwork.svg";
// import fiverr from "../images/fiverr.svg";
// import behance from "../images/behance.svg";
// import mark from "../images/mark.svg";




// export default function LandingPage() {


//   return (
//     <div>
//       <div className="navbar-container">
//         <div className="navbar">
//           <img
//             className="navbar-logo"
//             src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
//             alt="Logo"
//           />
//           <Link className="landing-link-explore-text" to="/explore">
//             Explore
//           </Link>
//           <div className="search-box">
//             <FontAwesomeIcon icon={faSearch} className="search-icon" />
//             <input type="text" placeholder="Search Course" />
//           </div>
//           <Link className="landing-link-btn" to="/error">
//             <FontAwesomeIcon
//               icon={faBell}
//               className="user-icon landing-user-profile-link"
//             />
//           </Link>
//           <span className="nav-text-link">GoLearn Business</span>
//           <div className="landing-btn white-btn">
//             <Link className="landing-link-white-btn" to="/login">
//               <p>Login</p>
//             </Link>
//           </div>
//           <div className="landing-btn">
//             <Link className="landing-link-btn" to="/signup">
//               <p>Sign Up</p>
//             </Link>
//           </div>
//           {/* <FontAwesomeIcon icon={faBell} className="notification-icon" />
//           <FontAwesomeIcon icon={faCircleUser} className="user-icon" /> */}
//         </div>
//       </div>

//       <div className="landing-hero-section">
//         <div className="hero-box">
//           <div className="left-hero">
//             <p>EDUCATION</p>
//             <div className="hero-texts">
//               <h3>
//                 GOLearn <span>Academy</span>
//               </h3>
//               <p>
//                 Empower individuals to pursue knowledge and skills at their own
//                 pace.
//               </p>
//             </div>
//           </div>
//           <img className="landing-hero-image" src={heroimage} alt="hero" />
//         </div>
//         <div className="hero-attachment">
//           <img src={frame} alt="frame" />
//           <div>
//             <h4>Learn your way</h4>
//             <p>
//               We have a lot of resources, and it can be overwhelming to get
//               started. How do you learn best?
//             </p>
//           </div>
//           <div className="landing-btn  arrow-btn-text show-link">
//             <Link className="arrow-btn-text show-link" to="/error">
//               <p>Show</p>
//               <FontAwesomeIcon icon={faAngleDown} />
//             </Link>
//             {/* <p>Show</p>
//             <FontAwesomeIcon icon={faAngleDown} /> */}
//           </div>
//         </div>
//       </div>

//       <section className="landing-section1">
//         <h5>What we do</h5>
//         <h4>Our education system will give you the perfect solution.</h4>
//         <div className="product-card-container">
//           <div className="card">
//             <img src={webdev} alt="wed dev"></img>
//             <h6>Web Development</h6>
//             <p>
//               Learn JavaScript design patterns and how to develop web apps using
//               React and all about : OOP, RegExp, design patterns, and APIs.
//             </p>
//             <div className="arrow-btn">
//               <Link className="arrow-btn-text" to="/explore">
//                 <p>Learn More</p>
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   style={{ color: "#74C0FC" }}
//                 />
//               </Link>
//             </div>
//           </div>

//           <div className="card">
//             <img src={productdesign} alt="wed dev"></img>
//             <h6>UI/UX Design</h6>
//             <p>
//               Learn JavaScript design patterns and how to develop web apps using
//               React and all about : OOP, RegExp, design patterns, and APIs.
//             </p>
//             <div className="arrow-btn">
//               <Link className="arrow-btn-text" to="/explore">
//                 <p>Learn More</p>
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   style={{ color: "#74C0FC" }}
//                 />
//               </Link>
//             </div>
//           </div>

//           <div className="card">
//             <img src={web3} alt="wed dev"></img>
//             <h6>Web 3</h6>
//             <p>
//               Learn JavaScript design patterns and how to develop web apps using
//               React and all about : OOP, RegExp, design patterns, and APIs.
//             </p>
//             <div className="arrow-btn">
//               <Link className="arrow-btn-text" to="/explore">
//                 <p>Learn More</p>
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   style={{ color: "#74C0FC" }}
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="landing-section2">
//         <div className="section-mid">
//           <div>
//             <h5>Join over 15,000+ tech people</h5>
//             <h4>Various types of courses will scale up your skills.</h4>
//           </div>
//           <div className="section-body">
//             <div className="card-top">
//               <div className="mini-card">
//                 <img src={create} alt="create "></img>
//                 <h6>Create Account</h6>
//                 <p>
//                   Learn all you need to know, and master the act of transforming
//                   ideas to get solutions.
//                 </p>
//               </div>

//               <div className="mini-card">
//                 <img src={select} alt="select "></img>
//                 <h6>Create Account</h6>
//                 <p>
//                   Learn all you need to know, and master the act of transforming
//                   ideas to get solutions.
//                 </p>
//               </div>
//             </div>

//             <div className="card-top">
//               <div className="mini-card">
//                 <img src={trackprogress} alt="progress "></img>
//                 <h6>Create Account</h6>
//                 <p>
//                   Learn all you need to know, and master the act of transforming
//                   ideas to get solutions.
//                 </p>
//               </div>

//               <div className="mini-card">
//                 <img src={enjoy} alt="user "></img>
//                 <h6>Create Account</h6>
//                 <p>
//                   Learn all you need to know, and master the act of transforming
//                   ideas to get solutions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <img className="landing-woman" src={woman} alt="woman" />
//       </section>

//       <section className="landing-section3">
//         <h5>Our Tutors</h5>
//         <h4>We engage the best tutors to give you a good experience.</h4>
//         <div className="tutor-list">
//           <div className="tutor-row">
//             <div className="tutor-card">
//               <img src={tutor1} alt="tutor" />
//               <div className="align-text">
//                 <p>IT & SOFTWARE</p>
//                 <span className="name">Eniola Matthew</span>
//               </div>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//             <div className="tutor-card">
//               <img src={tutor2} alt="tutor" />
//               <div className="align-text">
//                 <p>IT & SOFTWARE</p>
//                 <span className="name">Dubem Michael</span>
//               </div>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//             <div className="tutor-card">
//               <img src={tutor3} alt="tutor" />
//               <div className="align-text">
//                 <p>IT & SOFTWARE</p>
//                 <span className="name">Favour Astro</span>
//               </div>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="tutor-row">
//             <div className="tutor-card">
//               <img src={tutor4} alt="tutor" />
//               <div className="align-text">
//                 <p>IT & SOFTWARE</p>
//                 <span className="name">John Drake</span>
//               </div>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//             <div className="tutor-card">
//               <img src={tutor5} alt="tutor" />
//               <div className="align-text">
//                 <p>IT & SOFTWARE</p>
//                 <span className="name">Sandra Jeremiah</span>
//               </div>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//             <div className="tutor-card">
//               <img src={tutor6} alt="tutor" />
//               <div className="align-text">
//                 <p>IT & SOFTWARE</p>
//                 <span className="name">John Martin</span>
//               </div>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="landing-section4">
//         <h5>Popular Courses</h5>
//         <h4>Our most popular courses in students</h4>
//         <div>
//           <div className="ex-saved-card-row1">
//             <div className="ex-saved-card">
//               <img className="ex-it-image" src={IT1} alt="IT person"></img>
//               <div className="ex-saved-title-text">
//                 <p className="ex-saved-text-priceD reduce-size">DESIGN</p>
//                 <p className="ex-saved-price">$49</p>
//               </div>
//               <h6 className="ex-general-course-title">
//                 Complete Blender Creator: Learn 3D Modelling for Beginners
//               </h6>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.9</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>197,637</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>

//             <div className="ex-saved-card">
//               <img className="ex-it-image" src={design} alt="designer"></img>
//               <div className="ex-saved-title-text">
//                 <p className="ex-saved-text-priceDE reduce-size">
//                   DEVELOPMENTS
//                 </p>
//                 <p className="ex-saved-price">$9</p>
//               </div>
//               <h6 className="ex-general-course-title">
//                 Selenium WebDriver with Java -Basics to Advanced+Frameworks
//               </h6>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>

//             <div className="ex-saved-card">
//               <img className="ex-it-image" src={IT2} alt="IT person"></img>
//               <div className="ex-saved-title-text">
//                 <p className="ex-saved-text-priceM reduce-size">MARKETING</p>
//                 <p className="ex-saved-price">$49</p>
//               </div>
//               <h6 className="ex-general-course-title">
//                 The Ultimate Drawing Course - Beginner to Advanced
//               </h6>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.9</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>197,637</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="ex-saved-card-row1">
//             <div className="ex-saved-card">
//               <img className="ex-it-image" src={design2} alt="designer"></img>
//               <div className="ex-saved-title-text">
//                 <p className="ex-saved-text-priceD reduce-size">DESIGN</p>
//                 <p className="ex-saved-price">$49</p>
//               </div>
//               <h6 className="ex-general-course-title">
//                 Complete Blender Creator: Learn 3D Modelling for Beginners
//               </h6>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.9</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>197,637</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>

//             <div className="ex-saved-card">
//               <img className="ex-it-image" src={marketing} alt="marketer"></img>
//               <div className="ex-saved-title-text">
//                 <p className="ex-saved-text-priceDE reduce-size">
//                   DEVELOPMENTS
//                 </p>
//                 <p className="ex-saved-price">$9</p>
//               </div>
//               <h6 className="ex-general-course-title">
//                 Selenium WebDriver with Java -Basics to Advanced+Frameworks
//               </h6>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.4</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>154,817</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>

//             <div className="ex-saved-card">
//               <img
//                 className="ex-it-image"
//                 src={development}
//                 alt="developer"
//               ></img>
//               <div className="ex-saved-title-text">
//                 <p className="ex-saved-text-priceM reduce-size">MARKETING</p>
//                 <p className="ex-saved-price">$49</p>
//               </div>
//               <h6 className="ex-general-course-title">
//                 The Ultimate Drawing Course - Beginner to Advanced
//               </h6>
//               <div className="ex-saved-user">
//                 <div className="ex-saved-star-left">
//                   <img src={star} alt="star"></img>
//                   <p>4.9</p>
//                 </div>
//                 <div className="ex-saved-user-count">
//                   <img src={user} alt="user" />
//                   <p>197,637</p>
//                   <span>students</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="landing-testimonials">
//         <h5>Testimonials</h5>
//         <h4>What our students say about us in platform.</h4>
//         <div className="testimonial-cards">
//           <div className="tee-card">
//             <img src={chidi} alt="user"></img>
//             <h6>Chidiebere</h6>
//             <p>Software Developer</p>
//             <img className="mark-image" src={mark} alt="mark"></img>
//             <p className="test-quote">It’s the best learning Experience.</p>
//           </div>

//           <div className="tee-card">
//             <img src={tappi} alt="user"></img>
//             <h6>Matthew</h6>
//             <p>Brand Studio Manager</p>
//             <img className="mark-image" src={mark} alt="mark"></img>
//             <p className="test-quote">
//               At GoLearn Academy, you stand to experience real life work
//               environment while you learn, you get to interact with senior
//               developers and learn directly from their challenges.
//             </p>
//           </div>

//           <div className="tee-card">
//             <img src={michael} alt="user"></img>
//             <h6>Michael</h6>
//             <p>Software Engineer</p>
//             <img className="mark-image" src={mark} alt="mark"></img>
//             <p className="test-quote">
//               GoLearn Academy was the foundation of my career. It exposed me to
//               the realities of being a software engineer, and equipped me with
//               the right tools to succeed in the field.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="landing-socials">
//         <div>
//           <h5>3.6k trusted companies</h5>
//           <h4>
//             Lean on our sterling reputation as your trusted partner in learning
//             excellence.
//           </h4>
//         </div>

//         <div>
//           <div className="social-row">
//             <img src={netflix} alt="netflix" />
//             <img src={cursera} alt="cursera" />
//             <img src={udemy} alt="udemy" />
//             <img src={cathead} alt="cathead" />
//           </div>

//           <div className="social-row">
//             <img src={shopify} alt="shopify" />
//             <img src={upwork} alt="upwork" />
//             <img src={fiverr} alt="fiverr" />
//             <img src={behance} alt="behance" />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../StudentScreens/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faArrowRight,
  faArrowDown,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import heroimage from "../images/man2.png";
import frame from "../images/Frame.svg";
import webdev from "../images/webdev.svg";
import arrowright from "../images/ArrowRight.svg";
import productdesign from "../images/productdesign.svg";
import web3 from "../images/web3.svg";
import create from "../images/createaccount.svg";
import select from "../images/course.svg";
import trackprogress from "../images/trackprogress.svg";
import enjoy from "../images/enjoy.svg";
import woman from "../images/mama.png";
import tutor1 from "../images/tutor1.svg";
import tutor2 from "../images/tutor2.svg";
import tutor3 from "../images/tutor3.svg";
import tutor4 from "../images/tutor4.svg";
import tutor5 from "../images/tutor5.svg";
import tutor6 from "../images/tutor6.svg";
import IT1 from "../images/ITimagelanding.svg";
import design from "../images/designlanding.svg";
import design2 from "../images/design2.svg";
import marketing from "../images/marketinglanding.svg";
import development from "../images/developmentlanding.svg";
import IT2 from "../images/ITlanding2.svg";
import star from "../images/Star .png";
import user from "../images/User.svg";
import chidi from "../images/chidiebere.svg";
import tappi from "../images/tappi.svg";
import michael from "../images/michael.svg";
import netflix from "../images/netflix.svg";
import cursera from "../images/cursera.svg";
import udemy from "../images/udemy.svg";
import cathead from "../images/cathead.svg";
import shopify from "../images/shopify.svg";
import upwork from "../images/upwork.svg";
import fiverr from "../images/fiverr.svg";
import behance from "../images/behance.svg";
import mark from "../images/mark.svg";

export default function LandingPage() {
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    if (inputValue.length > 0) {
      setShowSearchIcon(false);
      setSuggestion("ui/ux design", "web development");
    } else {
      setShowSearchIcon(true);
      setSuggestion("");
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };







  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <img
            className="navbar-logo"
            src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
            alt="Logo"
          />
          <Link className="landing-link-explore-text" to="/explore">
            Explore
          </Link>
          <div className="search-box">
            {showSearchIcon && (
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            )}
            <input
              type="text"
              placeholder="Search Course"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <Link className="landing-link-btn" to="/error">
            <FontAwesomeIcon
              icon={faBell}
              className="user-icon landing-user-profile-link"
            />
          </Link>
          <span className="nav-text-link">GoLearn Business</span>
          <div className="landing-btn white-btn">
            <Link className="landing-link-white-btn" to="/login">
              <p>Login</p>
            </Link>
          </div>
          <div className="landing-btn">
            <Link className="landing-link-btn" to="/signup">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="landing-hero-section">
        <div className="hero-box">
          <div className="left-hero">
            <p>EDUCATION</p>
            <div className="hero-texts">
              <h3>
                GOLearn <span>Academy</span>
              </h3>
              <p>
                Empower individuals to pursue knowledge and skills at their own
                pace.
              </p>
            </div>
          </div>
          <img className="landing-hero-image" src={heroimage} alt="hero" />
        </div>
        <div className="hero-attachment">
          <img src={frame} alt="frame" />
          <div>
            <h4>Learn your way</h4>
            <p>
              We have a lot of resources, and it can be overwhelming to get
              started. How do you learn best?
            </p>
          </div>
          <div className="landing-btn arrow-btn-text show-link">
            <Link className="arrow-btn-text show-link" to="/error">
              <p>Show</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </div>
        </div>
      </div>

      {searchText && (
        <div className="search-result-box">
          <Link to="/explore" className="search-result-link">
            UI/UX Design
          </Link>
        </div>
      )}

      <section className="landing-section1">
        <h5>What we do</h5>
        <h4>Our education system will give you the perfect solution.</h4>
        <div className="product-card-container">
          <div className="card">
            <img src={webdev} alt="wed dev"></img>
            <h6>Web Development</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div className="arrow-btn">
              <Link className="arrow-btn-text" to="/explore">
                <p>Learn More</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#74C0FC" }}
                />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={productdesign} alt="wed dev"></img>
            <h6>UI/UX Design</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div className="arrow-btn">
              <Link className="arrow-btn-text" to="/explore">
                <p>Learn More</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#74C0FC" }}
                />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={web3} alt="wed dev"></img>
            <h6>Web 3</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div className="arrow-btn">
              <Link className="arrow-btn-text" to="/explore">
                <p>Learn More</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#74C0FC" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section2">
        <div className="section-mid">
          <div>
            <h5>Join over 15,000+ tech people</h5>
            <h4>Various types of courses will scale up your skills.</h4>
          </div>
          <div className="section-body">
            <div className="card-top">
              <div className="mini-card">
                <img src={create} alt="create "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>

              <div className="mini-card">
                <img src={select} alt="select "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>
            </div>

            <div className="card-top">
              <div className="mini-card">
                <img src={trackprogress} alt="progress "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>

              <div className="mini-card">
                <img src={enjoy} alt="user "></img>
                <h6>Create Account</h6>
                <p>
                  Learn all you need to know, and master the act of transforming
                  ideas to get solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img">
          <img src={woman} alt="woman "></img>
        </div>
      </section>

      <section className="landing-section3">
        <div className="section3-box">
          <h5>Meet our Tutors</h5>
          <h4>We have the best Tutors that will handle you well.</h4>
          <div className="tutors-container">
            <div className="tutors">
              <img src={tutor1} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor2} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor3} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor4} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor5} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>

            <div className="tutors">
              <img src={tutor6} alt="user" />
              <h6>Mr . Val</h6>
              <p>UI/UX Designer</p>
              <div className="tutors-arrow">
                <Link className="arrow-btn-text" to="/explore">
                  <p>Learn More</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#74C0FC" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section4">
        <div className="box1">
          <div className="info-text">
            <h5>Testimonials</h5>
            <h4>Read what our Customers say</h4>
          </div>
          <div className="arrow-btn">
            <Link className="arrow-btn-text" to="/explore">
              <p>Read More</p>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#74C0FC" }}
              />
            </Link>
          </div>
        </div>

        <div className="review-card">
          <img src={star} alt="star" />
          <p>
            “I am a very busy person who barely has time to cook. As a result, I
            often end up ordering takeout multiple times a week. This is a
            costly habit. But GoLearn Academy has helped me learn how to cook
            healthy and affordable meals at home. I am now saving a lot of
            money!”
          </p>
          <div className="user-review">
            <img src={user} alt="user" />
            <div className="review-text">
              <h6>Daniel Austin</h6>
              <p>Student</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <img src={star} alt="star" />
          <p>
            “I am a very busy person who barely has time to cook. As a result, I
            often end up ordering takeout multiple times a week. This is a
            costly habit. But GoLearn Academy has helped me learn how to cook
            healthy and affordable meals at home. I am now saving a lot of
            money!”
          </p>
          <div className="user-review">
            <img src={user} alt="user" />
            <div className="review-text">
              <h6>Daniel Austin</h6>
              <p>Student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section5">
        <div className="clients">
          <img src={chidi} alt="client" />
          <img src={tappi} alt="client" />
          <img src={michael} alt="client" />
          <img src={netflix} alt="client" />
          <img src={cursera} alt="client" />
          <img src={udemy} alt="client" />
          <img src={cathead} alt="client" />
          <img src={shopify} alt="client" />
          <img src={upwork} alt="client" />
          <img src={fiverr} alt="client" />
          <img src={behance} alt="client" />
          <img src={mark} alt="client" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

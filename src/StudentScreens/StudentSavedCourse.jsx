import React, {useState} from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import ITimage from "../images/IT&Software.png";
import star from "../images/Star .png";
import user from "../images/User.svg";
import design from "../images/design.png";
import development from "../images/development.png";
import marketing from "../images/marketing.png";
import design2 from "../images/design2.png";
import ITSoftware2 from "../images/ITSoftware2.png";
import Development2 from "../images/Development2.png";
import marketing2 from "../images/marketing2.png";
import SavedNav from "../component/Savednav";
import Footer from "./Footer";

const StudentSavedCourse = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      category: "IT & SOFTWARE",
      price: 35,
      title: "Learn Python Programming Masterclass",
      rating: 4.0,
      students: 211434,
      image: ITimage,
    },
    {
      id: 2,
      category: "Design",
      price: 49,
      title: "Complete Website Responsive Design",
      rating: 4.9,
      students: 197637,
      image: design,
    },
    {
      id: 3,
      category: "Development",
      price: 32,
      title: "Adobe Premiere Pro CC Advanced Training Course",
      rating: 4.6,
      students: 236568,
      image: development,
    },
    {
      id: 4,
      category: "Marketing",
      price: 13,
      title: "Ultimate AWS Certified Solutions Architect Associate 2021",
      rating: 4.1,
      students: 511123,
      image: marketing,
    },
    {
      id: 5,
      category: "Design",
      price: 9,
      title: "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
      rating: 4.1,
      students: 154817,
      image: ITSoftware2,
    },
    {
      id: 6,
      category: "IT & SOFTWARE",
      price: 35,
      title: "Learn Ethical Hacking From Scratch 2021",
      rating: 4.8,
      students: 451444,
      image: design2,
    },
    {
      id: 7,
      category: "Development",
      price: 16,
      title: "Angular - The Complete Guide (2021 Edition)",
      rating: 4.3,
      students: 197637,
      image: Development2,
    },
    {
      id: 8,
      category: "Marketing",
      price: 23,
      title: "How to get Diamond in soloQ | League of Legends | Season 11",
      rating: 4.7,
      students: 435671,
      image: marketing2,
    },
  ]);

 
  const increaseStudents = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, students: course.students + 1 } : course
      )
    );
  };


  const increaseRating = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id && course.rating < 5
          ? { ...course, rating: course.rating + 0.1 }
          : course
      )
    );
  };

  return (
    <div>
      <SavedNav />
        <div className="saved-course-main-container">
          <div className="saved-card-row1">
            <div className="saved-card">
              <img className="it-image" src={ITimage} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-price">IT & SOFTWARE</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Learn Python Programming Matsreclass</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={design} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceD">Design</p>
                <p className="saved-price">$49</p>
              </div>
              <h6>Complete Website Responsive Design</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={development} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceDE">Development</p>
                <p className="saved-price">$32</p>
              </div>
              <h6>Adobe Premiere Pro CC Advanced Training Course</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.6</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>236,568</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={marketing} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceM">Marketing</p>
                <p className="saved-price">$13</p>
              </div>
              <h6>Ultimate AWS Certified Solutions Architect Associate 2021</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.1</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>511,123</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>

          <div className="saved-card-row1">
            <div className="saved-card">
              <img className="it-image" src={ITSoftware2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceD">Design</p>
                <p className="saved-price">$9</p>
              </div>
              <h6>
                Ultimate Google Ads Training 2020: Profit with Pay Per Click
              </h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.1</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={design2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-price">IT & SOFTWARE</p>
                <p className="saved-price">$35</p>
              </div>
              <h6>Learn Ethical Hacking From Scratch 2021</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.8</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>451,444</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={Development2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceDE">Development</p>
                <p className="saved-price">$16</p>
              </div>
              <h6>Angular - The Complete Guide (2021 Edition)</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.3</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={marketing2} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceM">Marketing</p>
                <p className="saved-price">$23</p>
              </div>
              <h6>
                How to get Diamond in soloQ | League of Legends | Season 11
              </h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.7</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>435,671</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer />
      </div>
  );
};

export default StudentSavedCourse;



// import React, { useState } from "react";
// import "../App.css";
// import "./StudentSavedCourse.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faSearch,
//   faCircleUser,
// } from "@fortawesome/free-solid-svg-icons";
// import logo from "../images/golearn-logo.png";
// import ITimage from "../images/IT&Software.png";
// import star from "../images/Star.png";
// import user from "../images/User.svg";
// import design from "../images/design.png";
// import development from "../images/development.png";
// import marketing from "../images/marketing.png";
// import design2 from "../images/design2.png";
// import ITSoftware2 from "../images/ITSoftware2.png";
// import Development2 from "../images/Development2.png";
// import marketing2 from "../images/marketing2.png";
// import facebook from "../images/Facebook.svg";
// import github from "../images/Github.svg";
// import google from "../images/googleicon.svg";
// import twitter from "../images/Twitter.svg";
// import microsoft from "../images/Microsoft.svg";

// const StudentSavedCourse = () => {
//   // Initialize state for courses
//   const [courses, setCourses] = useState([
//     {
//       id: 1,
//       category: "IT & SOFTWARE",
//       price: 35,
//       title: "Learn Python Programming Masterclass",
//       rating: 4.0,
//       students: 211434,
//       image: ITimage,
//     },
//     {
//       id: 2,
//       category: "Design",
//       price: 49,
//       title: "Complete Website Responsive Design",
//       rating: 4.9,
//       students: 197637,
//       image: design,
//     },
//     {
//       id: 3,
//       category: "Development",
//       price: 32,
//       title: "Adobe Premiere Pro CC Advanced Training Course",
//       rating: 4.6,
//       students: 236568,
//       image: development,
//     },
//     {
//       id: 4,
//       category: "Marketing",
//       price: 13,
//       title: "Ultimate AWS Certified Solutions Architect Associate 2021",
//       rating: 4.1,
//       students: 511123,
//       image: marketing,
//     },
//     {
//       id: 5,
//       category: "Design",
//       price: 9,
//       title: "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
//       rating: 4.1,
//       students: 154817,
//       image: ITSoftware2,
//     },
//     {
//       id: 6,
//       category: "IT & SOFTWARE",
//       price: 35,
//       title: "Learn Ethical Hacking From Scratch 2021",
//       rating: 4.8,
//       students: 451444,
//       image: design2,
//     },
//     {
//       id: 7,
//       category: "Development",
//       price: 16,
//       title: "Angular - The Complete Guide (2021 Edition)",
//       rating: 4.3,
//       students: 197637,
//       image: Development2,
//     },
//     {
//       id: 8,
//       category: "Marketing",
//       price: 23,
//       title: "How to get Diamond in soloQ | League of Legends | Season 11",
//       rating: 4.7,
//       students: 435671,
//       image: marketing2,
//     },
//   ]);

//   // Function to increase the number of students
//   const increaseStudents = (id) => {
//     setCourses((prevCourses) =>
//       prevCourses.map((course) =>
//         course.id === id
//           ? { ...course, students: course.students + 1 }
//           : course
//       )
//     );
//   };

//   // Function to increase the star rating
//   const increaseRating = (id) => {
//     setCourses((prevCourses) =>
//       prevCourses.map((course) =>
//         course.id === id && course.rating < 5
//           ? { ...course, rating: course.rating + 0.1 }
//           : course
//       )
//     );
//   };

//   return (
//     <div>
//       <div className="saved-general-container">
//         <div className="navbar-container">
//           <div className="navbar">
//             <img
//               className="navbar-logo"
//               src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
//               alt="Logo"
//             />
//             <span className="nav-text">Explore</span>
//             <div className="search-box">
//               <FontAwesomeIcon icon={faSearch} className="search-icon" />
//               <input type="text" placeholder="Search Course" />
//             </div>
//             <span className="nav-text-link">GoLearn Business</span>
//             <span className="nav-text-link">Admin</span>
//             <FontAwesomeIcon icon={faBell} className="notification-icon" />
//             <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
//           </div>
//           <div className="navbar-links">
//             <ul>
//               <li>Home</li>
//               <li>My Course</li>
//               <li className="active">Saved</li>
//               <li>Reminder</li>
//               <li>Cart</li>
//             </ul>
//           </div>
//         </div>

//         <div className="saved-course-main-container">
//           <div className="saved-card-row1">
//             {courses.map((course) => (
//               <div className="saved-card" key={course.id}>
//                 <img className="it-image" src={course.image} alt={course.category} />
//                 <div className="saved-title-text">
//                   <p className="saved-text-price">{course.category}</p>
//                   <p className="saved-price">${course.price}</p>
//                 </div>
//                 <h6>{course.title}</h6>
//                 <div className="saved-user">
//                   <div className="saved-star-left">
//                     <img src={star} alt="star" />
//                     <p>{course.rating.toFixed(1)}</p>
//                     <button onClick={() => increaseRating(course.id)}>Rate</button>
//                   </div>
//                   <div className="saved-user-count">
//                     <img src={user} alt="user" />
//                     <p>{course.students.toLocaleString()}</p>
//                     <span>students</span>
//                     <button onClick={() => increaseStudents(course.id)}>Buy</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <footer className="saved-footer">
//           <div className="saved-footer-first">
//             <img src={logo} alt="logo" />
//             <p>
//               Empowering learners through accessible and engaging online
//               education. <br /> GoLearn is a leading online learning platform
//               dedicated to providing high-quality, flexible, and affordable
//               educational experiences.
//             </p>
//           </div>

//           <div className="saved-footer-second">
//             <h3>Get Help</h3>
//             <div className="saved-footer-help">
//               <p>Contact Us</p>
//               <p>Latest Articles</p>
//               <p>FAQ</p>
//             </div>
//           </div>

//           <div className="saved-footer-third">
//             <h3>Careers</h3>
//             <div className="saved-footer-help">
//               <p>Arts & Design</p>
//               <p>Business</p>
//               <p>IT & Software</p>
//               <p>Language</p>
//               <p>Programming</p>
//             </div>
//           </div>

//           <div className="saved-footer-fourth">
//             <h3>Contact Us</h3>
//             <div className="saved-footer-help">
//               <p>Press</p>
//               <p>Investors</p>
//               <p>Terms</p>
//               <p>Privacy</p>
//               <p>Help</p>
//               <p>Accessibility</p>
//               <p>Contact</p>
//               <p>Articles</p>
//               <p>Directory</p>
//               <p>Affiliates</p>
//               <p>Modern Slavery Statement</p>
//               <p>Manage Cookie Preferences</p>
//             </div>
//             <div className="saved-socials">
//               <img src={facebook} alt="facebook"></img>
//               <img src={github} alt="facebook"></img>
//               <img src={google} alt="facebook"></img>
//               <img src={twitter} alt="facebook"></img>
//               <img src={microsoft} alt="facebook"></img>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default StudentSavedCourse;





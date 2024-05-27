import React from 'react'
import './CourseCompleted.css'
import Navbar from '../component/navbar';
import Footer from '../StudentScreens/Footer';
import edward1 from "../images/edward1.svg";
import edward2 from "../images/edward2.svg";
import edwardshare from "../images/edwardshare.svg";
 const CourseCompleted = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="main edward-main-container">
          <div className="button edward-course-btns">
            <a href="#" className="btn btn-outline">
              In Progress
            </a>
            <a href="#" className="btn btn-filled">
              Completed
            </a>
          </div>

          <div className="course-ttl edward-course-general-container">
            <div className="courses">
              <div className="edward-group-image">
                <img src={edward2} alt="course-img" />
                <img src={edwardshare} alt="share" />
              </div>

              <div className="text">
                <h3>Adobe Premier Pro CC - Advanced Training Course</h3>
                <p className="ttx">Technology</p>
              </div>
              <div className="button2">
                <a href="#" className="btn2">
                  <p class="txt">View Course</p>{" "}
                </a>
              </div>
            </div>
            <div className="courses">
              <div className="edward-group-image">
                <img src={edward1} alt="course-img" />
                <img src={edwardshare} alt="share" />
              </div>

              <div className="text">
                <h3>Complete Website Responsive Design</h3>
                <p className="ttx">Design</p>
              </div>
              <div className="button2">
                <a href="#" className="btn2">
                  {" "}
                  <p class="txt">View Course</p>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CourseCompleted;
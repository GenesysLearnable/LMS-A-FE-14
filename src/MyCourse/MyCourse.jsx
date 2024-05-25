import React from "react";
import "./MyCourse.css";
import Footer from "../StudentScreens/Footer";
import MyCourseNav from "../component/MyCourseNav";

const Course = () => {
  return (
    <div>
      <MyCourseNav />
      <div className="main">
        <div className="button">
          <a href="#" className="btn btn-filled">
            In Progress
          </a>
          <a href="#" className="btn btn-outline">
            Completed
          </a>
        </div>

        <div className="course-list">
          <div className="courses">
            <div className="course-ttl">
              <img
                src={process.env.PUBLIC_URL + "/images/Course-Image-3.png"}
                alt="course-3"
              />
              <div className="txt2">
                <h2>Adobe Premier Pro CC - Advanced Training Course</h2>
                <p>Technology</p>
              </div>
            </div>
            <div className="course-details">
              <div className="button">
                <a href="#" className="btn btn-filled">
                  Go To Course
                </a>
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/Progress bar.png"}
                alt="progress-bar"
              />
              <p>40% Complete</p>
            </div>
          </div>

          <div className="courses">
            <div className="course-ttl">
              <img
                src={process.env.PUBLIC_URL + "/images/Course-Image-1.png"}
                alt="course-1"
              />
              <div className="txt2">
                <h2>User experience course for beginners</h2>
                <p>Design</p>
              </div>
            </div>
            <div className="course-details">
              <div className="button">
                <a href="#" className="btn btn-filled">
                  Go To Course
                </a>
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/Progress bar.png"}
                alt="progress-bar"
              />
              <p>40% Complete</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;

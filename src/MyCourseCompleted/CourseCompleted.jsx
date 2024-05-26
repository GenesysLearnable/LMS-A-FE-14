import React from 'react'
import './CourseCompleted.css'
import Navbar from '../component/navbar';
import Footer from '../StudentScreens/Footer';

 const CourseCompleted = () => {
  return (
    <div>
        <div>
          <Navbar />
          <div className="main">
              <div className="button">
                  <a href="#" className="btn btn-outline">In Progress</a>
                  <a href="#" className="btn btn-filled">Completed</a>
              </div>

              <div className="course-ttl">
                  <div className="courses">
                      <div className="course-ttl">
                        <div className="imageo">
                          <img src="img/Course Images (2).png" alt="course-img" />
                          <img src="Icons/Icon.png" alt="course-img" />
                        </div>
                      </div>
                      <div className="text">
                          <h3>Adobe Premier Pro CC - Advanced Training Course</h3>
                          <p className='ttx'>Technology</p>
                      </div>
                      <div className="button2">
                          <a href="#" className="btn2"> <p class="txt">View Course</p> </a>
                      </div>
                  </div>
                  <div className="courses">
                      <div className="course-ttl">
                        <div className="imageo">                            
                          <img src="img/Course Images (1).png" alt="course-img" />
                          <img src="Icons/Icon.png" alt="course-img" />
                        </div>
                      </div>
                      <div className="text">
                          <h3>Complete Website Responsive Design</h3>
                          <p className='ttx'>Design</p>
                      </div>
                      <div className="button2">
                          <a href="#" className="btn2"> <p class="txt">View Course</p> </a>
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
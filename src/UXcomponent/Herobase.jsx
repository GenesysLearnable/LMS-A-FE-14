import React from 'react'
import './UxheroStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Herobase = () => {
  return (
    <div>
      <div className="card-container">
        <h2 className="herobase-head">
          Get More with paid User Experience Courses
        </h2>
        <p className="herobase-subhead">
          Enroll to have access to top rated instructors
        </p>
        {/*Card-1*/}
        <div className="hero-card-container">
          <div className="card-1">
            <img
              src={process.env.PUBLIC_URL + "/images/Course-Image-1.png"}
              alt="course-1"
            />
            <div className="title-pay">
              <p className="card-title">DESIGN</p>
              <p className="card-pay">$49</p>
            </div>
            <h5 className="card-course-title">
              Complete Website Responsive Design
            </h5>
            <div className="rate-user">
              <p className="user-rate">
                <FontAwesomeIcon className="rate-user-star" icon={faStar} />
                4.9
              </p>

              <p className="avail-user">
                <FontAwesomeIcon className="rate-user-icon" icon={faUser} />{" "}
                197,637<span className="fade-little">students</span>
              </p>
            </div>
          </div>

          {/*Card-2*/}
          <div className="hero-card-container">
            <div className="card-1">
              <img
                src={process.env.PUBLIC_URL + "/images/Course-Image-2.png"}
                alt="course-1"
              />
              <div className="title-pay">
                <p className="card-title-tab">IT & SOFTWARE</p>
                <p className="card-pay">$35</p>
              </div>
              <h5 className="card-course-title">
                Learn Python Programming Masterclass
              </h5>
              <div className="rate-user">
                <p className="user-rate">
                  <FontAwesomeIcon className="rate-user-star" icon={faStar} />
                  4.0
                </p>

                <p className="avail-user">
                  <FontAwesomeIcon className="rate-user-icon" icon={faUser} />{" "}
                  211,434<span className="fade-little">students</span>
                </p>
              </div>
            </div>

            {/*Card-3*/}
            <div className="hero-card-container">
              <div className="card-1">
                <img
                  src={process.env.PUBLIC_URL + "/images/Course-Image-3.png"}
                  alt="course-1"
                />
                <div className="title-pay">
                  <p className="card-title-others">DEVELOPMENT</p>
                  <p className="card-pay">$32</p>
                </div>
                <h5 className="card-course-title">
                  Adobe Premiere Pro CC - Advanced Training Course
                </h5>
                <div className="rate-user">
                  <p className="user-rate">
                    <FontAwesomeIcon className="rate-user-star" icon={faStar} />
                    4.6
                  </p>

                  <p className="avail-user">
                    <FontAwesomeIcon className="rate-user-icon" icon={faUser} />{" "}
                    236,568<span className="fade-little">students</span>
                  </p>
                </div>
              </div>
            </div>

            {/*Card-4*/}
            <div className="hero-card-container">
              <div className="card-1">
                <img
                  src={process.env.PUBLIC_URL + "/images/Course-Image-4.png"}
                  alt="course-1"
                />
                <div className="title-pay">
                  <p className="card-title-others">MARKETING</p>
                  <p className="card-pay">$13</p>
                </div>
                <h5 className="card-course-title">
                  Ultimate AWS Certified Solutions Architect Associate 2021
                </h5>
                <div className="rate-user">
                  <p className="user-rate">
                    <FontAwesomeIcon className="rate-user-star" icon={faStar} />
                    4.1
                  </p>

                  <p className="avail-user">
                    <FontAwesomeIcon className="rate-user-icon" icon={faUser} />{" "}
                    511,123<span className="fade-little">students</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="herobase-btn-container">
          <button className="herobase-btn">View All</button>
        </div>
      </div>
    </div>
  );
}

export default Herobase

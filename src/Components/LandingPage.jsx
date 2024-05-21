import React from "react";
import Navbar from "../component/navbar";
import Footer from "../StudentScreens/Footer";
import heroimage from "../images/hero-image.svg";
import frame from "../images/Frame.svg";
import downarrow from "../images/CaretDown.svg";
import webdev from "../images/webdev.svg";
import arrowright from "../images/ArrowRight.svg";
import productdesign from "../images/productdesign.svg";
import web3 from "../images/web3.svg";
import create from "../images/createaccount.svg";
import select from "../images/course.svg";
import trackprogress from "../images/trackprogress.svg";
import enjoy from "../images/enjoy.svg";
import woman from "../images/womanuser.svg";
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



export default function LandingPage() {
  return (
    <div>
      <Navbar />

      <div className="landing-herosection">
        <div className="hero-box">
          <div className="left-hero">
            <p>EDUCATION</p>
            <div className="hero-texts">
              <h3>
                GOLearn <span>Academy</span>
              </h3>
              <p>
                Empower individuals to pursue knowledge and skills at their own
                pace
              </p>
            </div>
          </div>
          <img src={heroimage} alt="hero" />
        </div>
        <div className="hero-attachment">
          <img src={frame} alt="frame" />
          <div>
            <div>
              <h4>Learn your way</h4>
              <p>
                We have a lot of resources, and it can be overwhelming to get
                started. How do you learn best?
              </p>
            </div>
            <div>
              <p>Show</p>
              <img src={downarrow} alt="down arrow"></img>
            </div>
          </div>
        </div>
      </div>

      <section className="landing-section1">
        <h5>What we do</h5>
        <h5>Our education system will give you the perfect solution</h5>
        <div>
          <div className="card">
            <img src={webdev} alt="wed dev"></img>
            <h6>Web Development</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div>
              <p>Learn More</p>
              <img src={arrowright} alt="right arrow"></img>
            </div>
          </div>

          <div className="card">
            <img src={productdesign} alt="wed dev"></img>
            <h6>Web Development</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div>
              <p>Learn More</p>
              <img src={arrowright} alt="right arrow"></img>
            </div>
          </div>

          <div className="card">
            <img src={web3} alt="wed dev"></img>
            <h6>Web Development</h6>
            <p>
              Learn JavaScript design patterns and how to develop web apps using
              React and all about : OOP, RegExp, design patterns, and APIs.
            </p>
            <div>
              <p>Learn More</p>
              <img src={arrowright} alt="right arrow"></img>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section2">
        <div>
          <p>Join over 15,000+ tech people</p>
          <p>Various types of courses will scale up your skills</p>
        </div>
        <div>
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

          <div className="card-bottom">
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
        <img src={woman} alt="woman" />
      </section>

      <section className="section3">
        <p>Our Tutors</p>
        <p>We engage the best tutors to give you a good experience</p>
        <div className="tutor-list">
          <div className="tutor-row">
            <div className="tutor-card">
              <img src={tutor1} alt="tutor" />
              <p>IT & SOFTWARE</p>
              <span className="name">Eniola Matthew</span>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>
            <div className="tutor-card">
              <img src={tutor2} alt="tutor" />
              <p>IT & SOFTWARE</p>
              <span className="name">Eniola Matthew</span>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>
            <div className="tutor-card">
              <img src={tutor3} alt="tutor" />
              <p>IT & SOFTWARE</p>
              <span className="name">Eniola Matthew</span>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tutor-row">
            <div className="tutor-card">
              <img src={tutor4} alt="tutor" />
              <p>IT & SOFTWARE</p>
              <span className="name">Eniola Matthew</span>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>
            <div className="tutor-card">
              <img src={tutor5} alt="tutor" />
              <p>IT & SOFTWARE</p>
              <span className="name">Eniola Matthew</span>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>
            <div className="tutor-card">
              <img src={tutor6} alt="tutor" />
              <p>IT & SOFTWARE</p>
              <span className="name">Eniola Matthew</span>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section4">
        <p>Popular Courses</p>
        <p>Our most popular courses in students</p>
        <div>
          <div className="ex-saved-card-row1">
            <div className="ex-saved-card">
              <img className="ex-it-image" src={IT1} alt="IT person"></img>
              <div className="ex-saved-title-text">
                <p className="ex-saved-text-priceD">DESIGN</p>
                <p className="ex-saved-price">$49</p>
              </div>
              <h6 className="ex-general-course-title">
                Complete Blender Creator: Learn 3D Modelling for Beginners
              </h6>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="ex-saved-card">
              <img className="ex-it-image" src={design} alt="designer"></img>
              <div className="ex-saved-title-text">
                <p className="ex-saved-text-priceDE">DEVELOPMENTS</p>
                <p className="ex-saved-price">$9</p>
              </div>
              <h6 className="ex-general-course-title">
                Selenium WebDriver with Java -Basics to Advanced+Frameworks
              </h6>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="ex-saved-card">
              <img className="ex-it-image" src={IT2} alt="IT person"></img>
              <div className="ex-saved-title-text">
                <p className="ex-saved-text-priceM">MARKETING</p>
                <p className="ex-saved-price">$49</p>
              </div>
              <h6 className="ex-general-course-title">
                The Ultimate Drawing Course - Beginner to Advanced
              </h6>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ex-saved-card-row1">
            <div className="ex-saved-card">
              <img className="ex-it-image" src={design2} alt="designer"></img>
              <div className="ex-saved-title-text">
                <p className="ex-saved-text-priceD">DESIGN</p>
                <p className="ex-saved-price">$49</p>
              </div>
              <h6 className="ex-general-course-title">
                Complete Blender Creator: Learn 3D Modelling for Beginners
              </h6>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="ex-saved-card">
              <img className="ex-it-image" src={marketing} alt="marketer"></img>
              <div className="ex-saved-title-text">
                <p className="ex-saved-text-priceDE">DEVELOPMENTS</p>
                <p className="ex-saved-price">$9</p>
              </div>
              <h6 className="ex-general-course-title">
                Selenium WebDriver with Java -Basics to Advanced+Frameworks
              </h6>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.4</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="ex-saved-card">
              <img className="ex-it-image" src={development} alt="developer"></img>
              <div className="ex-saved-title-text">
                <p className="ex-saved-text-priceM">MARKETING</p>
                <p className="ex-saved-price">$49</p>
              </div>
              <h6 className="ex-general-course-title">
                The Ultimate Drawing Course - Beginner to Advanced
              </h6>
              <div className="ex-saved-user">
                <div className="ex-saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="ex-saved-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
          
          <section className="landing-testimonials">
              
          </section>

      <Footer />
    </div>
  );
}

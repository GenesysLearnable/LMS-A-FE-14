import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import ITgirl from "../images/IT & Software3.png";
import IT2 from "../images/IT&Software.png";
import star from "../images/Star .png";
import user from "../images/User.svg";
import design from "../images/design.png";
import design3 from "../images/design 3.png";
import development4 from "../images/development4.png";
import development3 from "../images/development3.png";
import marketing from "../images/marketing 3.png";
import marketing6 from "../images/marketing 5.png";
import marketing5 from "../images/marketing 4.png";

const ExMain = () => {
  return (
    <div>
      <div className="saved-general-container">
        <div>
          <div className="cart-container">
            <div className="cart-saved-courses">
              <div className="saved-card-row1">
                <div className="saved-card">
                  <img className="it-image" src={design} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceD">DESIGN</p>
                    <p className="saved-price">$49</p>
                  </div>
                  <h6 className="general-course-title">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </h6>
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
                  <img className="it-image" src={development4} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceDE">DEVELOPMENTS</p>
                    <p className="saved-price">$9</p>
                  </div>
                  <h6 className="general-course-title">
                    Selenium WebDriver with Java -Basics to Advanced+Frameworks
                  </h6>
                  <div className="saved-user">
                    <div className="saved-star-left">
                      <img src={star} alt="star"></img>
                      <p>4.4</p>
                    </div>
                    <div className="saved-user-count">
                      <img src={user} alt="user" />
                      <p>154,817</p>
                      <span>students</span>
                    </div>
                  </div>
                </div>

                <div className="saved-card">
                  <img className="it-image" src={marketing} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceM">MARKETING</p>
                    <p className="saved-price">$49</p>
                  </div>
                  <h6 className="general-course-title">
                    The Ultimate Drawing Course - Beginner to Advanced
                  </h6>
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
              </div>

              <div className="saved-card-row1">
                <div className="saved-card">
                  <img className="it-image" src={ITgirl} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceD">IT & SOFTWARE</p>
                    <p className="saved-price">$24</p>
                  </div>
                  <h6 className="general-course-title">
                    Complete Website Responsive Design
                  </h6>
                  <div className="saved-user">
                    <div className="saved-star-left">
                      <img src={star} alt="star"></img>
                      <p>4.7</p>
                    </div>
                    <div className="saved-user-count">
                      <img src={user} alt="user" />
                      <p>451,444</p>
                      <span>students</span>
                    </div>
                  </div>
                </div>

                <div className="saved-card">
                  <img className="it-image" src={development3} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceDE">DEVELOPMENTS</p>
                    <p className="saved-price">$35</p>
                  </div>
                  <h6 className="general-course-title">
                    2021 Complete Python Bootcamp From Zero to Hero in
                    Python
                  </h6>
                  <div className="saved-user">
                    <div className="saved-star-left">
                      <img src={star} alt="star"></img>
                      <p>4.8</p>
                    </div>
                    <div className="saved-user-count">
                      <img src={user} alt="user" />
                      <p>982,941</p>
                      <span>students</span>
                    </div>
                  </div>
                </div>

                <div className="saved-card">
                  <img className="it-image" src={marketing5} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceM">MARKETING</p>
                    <p className="saved-price">$24</p>
                  </div>
                  <h6 className="general-course-title">
                    iPhone Photography | Take Professional Photos On Your iPhone
                  </h6>
                  <div className="saved-user">
                    <div className="saved-star-left">
                      <img src={star} alt="star"></img>
                      <p>4.8</p>
                    </div>
                    <div className="saved-user-count">
                      <img src={user} alt="user" />
                      <p>211,434</p>
                      <span>students</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="saved-card-row1">
                <div className="saved-card">
                  <img className="it-image" src={IT2} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceD">IT & SOFTWARE</p>
                    <p className="saved-price">$35</p>
                  </div>
                  <h6 className="general-course-title">
                    Learn Python Programming Masterclass
                  </h6>
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
                  <img className="it-image" src={design3} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceDE">DESIGN</p>
                    <p className="saved-price">$16</p>
                  </div>
                  <h6 className="general-course-title">
                    Instagram Marketing 2021: Complete Guide To Instagram Gro...
                  </h6>
                  <div className="saved-user">
                    <div className="saved-star-left">
                      <img src={star} alt="star"></img>
                      <p>4.5</p>
                    </div>
                    <div className="saved-user-count">
                      <img src={user} alt="user" />
                      <p>854</p>
                      <span>students</span>
                    </div>
                  </div>
                </div>

                <div className="saved-card">
                  <img className="it-image" src={marketing6} alt="IT"></img>
                  <div className="saved-title-text">
                    <p className="saved-text-priceM">MARKETING</p>
                    <p className="saved-price">$24</p>
                  </div>
                  <h6 className="general-course-title">
                    Premiere Pro CC for Beginners: Video Editing in Premiere
                  </h6>
                  <div className="saved-user">
                    <div className="saved-star-left">
                      <img src={star} alt="star"></img>
                      <p>4.8</p>
                    </div>
                    <div className="saved-user-count">
                      <img src={user} alt="user" />
                      <p>854</p>
                      <span>students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExMain;

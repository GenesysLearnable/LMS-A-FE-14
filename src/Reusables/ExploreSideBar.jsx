import React, { useState } from "react";
import arrowup from "../images/ChevronDown.svg";
import cpu from "../images/Cpu.svg";
import handshake from "../images/Handshake.svg";
import megaphone from "../images/MegaphoneSimple.svg";
import pack from "../images/Package.svg";
import star from "../images/Star .png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleUp } from "@fortawesome/free-solid-svg-icon";

export default function ExploreSideBar() {

  return (
    <div>
      <div>
        <div>
          <aside className="aside-container aside-all-bg">
            <div className="aside-category-head">
              <h3>CATEGORY</h3>
              <img src={arrowup} alt="arrow" />
            </div>
            <div className="aside-tech-check">
              <div className="aside-tech">
                <img src={cpu} alt="cpu" />
                <p>Technology</p>
              </div>
              <img src={arrowup} alt="arrow" />
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Web Development</p>
              </div>
              <p className="numbers-and-arrow">574</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Data Science</p>
              </div>
              <p className="numbers-and-arrow">568</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Mobile Development</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Software Testing</p>
              </div>
              <p className="numbers-and-arrow">317</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Software Engineer</p>
              </div>
              <p className="numbers-and-arrow">31</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Software Developmnt Tools</p>
              </div>
              <p className="numbers-and-arrow">558</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>No-Code Development</p>
              </div>
              <p className="numbers-and-arrow">37</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <img src={handshake} alt="handshake" />
                <p>Business</p>
              </div>
              <img src={arrowup} alt="arrow" />
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <img src={megaphone} alt="megaphone" />
                <p>Agriculture</p>
              </div>
              <img src={arrowup} alt="arrow" />
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <img src={pack} alt="package" />
                <p>Technology</p>
              </div>
              <img src={arrowup} alt="arrow" />
            </div>
          </aside>

          <aside className="aside-container aside-all-bg">
            <div className="aside-category-head">
              <h3>RATING</h3>
              <img src={arrowup} alt="arrow" />
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <img className="aside-star" src={star} alt="star" />
                <p>5 Star</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <img className="aside-star" src={star} alt="star" />
                <p>4 Star & up</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <img className="aside-star" src={star} alt="star" />
                <p>3 Star & up</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <img className="aside-star" src={star} alt="star" />
                <p>2 Star & up</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <img className="aside-star" src={star} alt="star" />
                <p>1 Star up</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>
          </aside>

          <aside className="aside-container aside-all-bg">
            <div className="aside-category-head">
              <h3>COURSE LEVEL</h3>
              <img src={arrowup} alt="arrow" />
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>All Level</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Beginner</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Intermediate</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Expert</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>
          </aside>

          <aside className="aside-container aside-all-bg">
            <div className="aside-category-head">
              <h3>Price</h3>
              <img src={arrowup} alt="arrow" />
            </div>
            <div className="slider-container">
              <input type="range" min={0} max={100} value={25} className="slider1"></input>
              <input type="range" min={0} max={100} value={75} className="slider2"></input>
            </div>

            <div className="aside-price">
              <p>
                $ <span>min: </span>
              </p>
              <p>
                $ <span>min: </span>
              </p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Paid</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>

            <div className="aside-tech-check">
              <div className="aside-tech">
                <input type="checkbox" />
                <p>Free</p>
              </div>
              <p className="numbers-and-arrow">1345</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

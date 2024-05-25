import { faGlobe, faGreaterThan, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import StarRating from '../component/StarRating';
import './UxheroStyle.css'

const Uxhero = () => {
  return (
    <div>
      <div>
        <div className="Uxhero-directory-container">
          <p className="Uxhero-directory">
            Home
            <FontAwesomeIcon className="Uxhero-arrow" icon={faGreaterThan} />
          </p>
          <p className="Uxhero-directory">
            Categories
            <FontAwesomeIcon className="Uxhero-arrow" icon={faGreaterThan} />
          </p>
          <p className="Uxhero-directory">
            Technology
            <FontAwesomeIcon className="Uxhero-arrow" icon={faGreaterThan} />
          </p>
          <p className="Uxhero-directory">
            Design
            <FontAwesomeIcon className="Uxhero-arrow" icon={faGreaterThan} />
          </p>
          <span className="Uxhero-current">User Experience...</span>
        </div>

        <div className="Uxhero-container">
          <div>
            <img
              className="video-frame"
              src={process.env.PUBLIC_URL + "/images/videoframe.png"}
              alt="video"
            />
          </div>
          <div className="Uxhero-right-container">
            <h2>User Experience course for beginners</h2>
            <p className="Uxhero-text">
              Welcome to User Experience (UX) Design for Beginners!
            </p>
            <div className="Uxhero-rating-button-container">
              <button className="Uxhero-free">Free tutorial</button>
              <div className="Uxhero-rating-container">
                <p className="Uxhero-rating">
                  5.0 <StarRating /> 1(ratings) 6,students
                </p>
                <p className="video-icon-text">
                  <FontAwesomeIcon className="video-icon" icon={faVideo} /> 1hr
                  39min of on-demand video
                </p>
              </div>
            </div>
            <p className="Uxhero-creator">
              Created by <span>Chidubem</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> English
            </p>
            <p className="Uxhero-free-text">FREE</p>
            <div className='Uxhero-endown'>
              <button className="Uxhero-enroll">Enroll Now</button>
              <button className="Uxhero-enroll">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uxhero;

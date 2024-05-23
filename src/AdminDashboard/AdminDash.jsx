import {
  faBookOpen,
  faClipboard,
  faHouse,
  faMessage,
  faUsers,
  faSearch,
  faBell,
  faCircleUser,
  faTractor,
  faPen,
  faBriefcase,
  faDesktop
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './AdminDash.css'

const AdminDash = () => {
  return (
    <div>
      <div className="admindash-container">
        <div className="admindash-sidenav">
          <div className="admindash-border">
            <img
              className="admindash-logo"
              src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
              alt="logo"
            />
            <ul>
              <li className="admin-active">
                <FontAwesomeIcon className="admindash-icons" icon={faHouse} />{" "}
                Dashobard
              </li>
              <li>
                <FontAwesomeIcon className="admindash-icons" icon={faUsers} />
                User Management
              </li>
              <li>
                <FontAwesomeIcon
                  className="admindash-icons"
                  icon={faBookOpen}
                />
                Course Mangment
              </li>
              <li>
                <FontAwesomeIcon className="admindash-icons" icon={faMessage} />
                Messages
              </li>
              <li>
                <FontAwesomeIcon
                  className="admindash-icons"
                  icon={faClipboard}
                />
                Report and Analytics
              </li>
            </ul>
          </div>
          <div className="admin-user-profile">
            <img src="" alt="profile-pic" />
            <div>
              <h3>Jake Gyil</h3>
              <p>jakegll@email.com</p>
            </div>
          </div>
        </div>

        <div className="Dashboard-container">
          <div className="admindash-search-box">
            <FontAwesomeIcon
              icon={faSearch}
              className="admindash-search-icon"
            />
            <input type="text" placeholder="Search Course" />
            <div>
              <FontAwesomeIcon
                icon={faBell}
                className="admindash-notification-icon"
              />
              <FontAwesomeIcon
                icon={faCircleUser}
                className="admindash-user-icon"
              />
            </div>
          </div>

          <div className="admin-welcome-container">
            <div>
              <img alt="admin-profile-pic" />
            </div>
            <div className='admin-welcome-text'>
              <h3>Welcome Joel!</h3>
              <p>Ready to manage your learning enviroment?</p>
              <p>
                Here are your next step to ensure a seamless experience for all
                users
              </p>
            </div>
            <button className="admin-dash-btn">Create a course</button>
          </div>

          <div className="admin-dash-container">
            <div className="admin-dash-category-box">
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faTractor}
                    className="admin-dash-category-icon"
                  />
                  <span>Agriculture</span>
                </li>
                <li className="available-courses">
                  <FontAwesomeIcon
                    icon={faPen}
                    className="admin-dash-category-icon"
                  />
                  <span>Art</span>
                  <div></div>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="admin-dash-category-icon"
                  />
                  <span>Business</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faDesktop}
                    className="admin-dash-category-icon"
                  />
                  <span>Technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDash

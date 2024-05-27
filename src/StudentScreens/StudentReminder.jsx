import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import apple from "../images/appleicon.png";
import playstore from "../images/playstoreicon.png";
import Footer from "./Footer.jsx";
import ReminderNav from "../component/Remindernav.jsx";

const StudentReminder = () => {
  return (
    <div>
      <ReminderNav />
      <div className="saved-general-container">
          <div className="reminder-container">
            <h3>Set a Reminder to Study!</h3>
            <p>
              Never miss a chance to learn! Research proves that studying a bit
              every day pays off big time. Those who turn learning into a
              routine are more likely to succeed. Use your learning scheduler to
              carve out time for learning and get reminders.
            </p>
            <button className="reminder-btn" type="submit">
              Schedule Learning{" "}
            </button>
            <h3>Get Push Notifications Instead</h3>
            <p>
              Prefer push notifications instead? No problem! Get reminders
              straight to your phone from the Golearn app.
            </p>
            <div className="reminder-download-container">
              <div className="reminder-store">
                <img src={apple} alt="apple" />
                <div className="reminder-downloader">
                  <p>
                    Download on the <br></br> <span>App Store</span>
                  </p>
                  {/* <span className="reminder-store-name">App Store</span> */}
                </div>
              </div>

              <div className="reminder-store">
                <img src={playstore} alt="playstore" />
                <div className="reminder-downloader">
                  <p>
                    GET IT ON <br></br> <span>Google Play</span>
                  </p>
                  {/* <h2 className="reminder-store-name">Google Play</h2> */}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
  );
};

export default StudentReminder;

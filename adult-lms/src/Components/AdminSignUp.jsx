import React, { useState } from "react";
import "./adminSignUp.css";

export default function Signup() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setUrl(e.target.value);
    setError("");
  };

  const handleOnClick = () => {
    if (!url.trim()) {
      setError("Kindly enter organization URL.");
    } else if (!isValidUrl(url)) {
      setError("Kindly enter a valid URL.");
    } else {
      window.open(url, "_blank");
    }
  };

  const isValidUrl = (url) => {
    const urlPattern =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    return urlPattern.test(url);
  };

  return (
    <div>
      <div className="container">
        <div className="org-signup">
          <h1 className="head-text">Sign up with your organization</h1>
          <div className="form">
            <label className="admin-signup-label" htmlFor="input">
              ENTER YOUR ORGANIZATION URL
            </label>
            <input
              name="url"
              type="url"
              placeholder="e.g: company.com or company.org"
              className="admin-input-box"
              onChange={handleInput}
              value={url}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            className="admin-signup-btn"
            onClick={handleOnClick}
            type="submit"
          >
            <a href="#">Continue</a>
          </button>
          <p className="admin-signup-p">
            Back to <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

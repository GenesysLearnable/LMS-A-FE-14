import React from "react";
import "./adminLogin.css";
import { useState } from "react";

export default function Login() {
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
        <div className="org-login">
          <h1 className="my-header-text">Log in with your organization</h1>
          <div className="form">
            <label className="org-login-label" htmlFor="input">
              ENTER YOUR ORGANIZATION URL
            </label>
            <input
              name="url"
              type="url"
              placeholder="e.g: company.com or company.org"
              className="org-input-box"
              onChange={handleInput}
              value={url}
            ></input>
          </div>
          {error && <p className="my-error-message">{error}</p>}
          <button
            className="org-login-btn"
            onClick={handleOnClick}
            type="submit"
          >
            <a href="#">Continue</a>
          </button>
          <p className="org-login-p">
            Back to <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

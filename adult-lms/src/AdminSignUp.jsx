import React from "react";
import "./adminSignUp.css";

export default function SignUp() {
  return (
    <div>
      
      <div className="container">
        
        <div className="org-signup">
          
          <h1 className="header-text">Sign up with your organization</h1>
          
          <div className="form">
            
            <label htmlFor="input">ENTER YOUR ORGANIZATION URL</label>
            
            <input
              name="url"
              type="url"
              placeholder="e.g: company.com or company.org"
              className="input-box"
            ></input>
           
          </div>
          
          <button className="btn" type="submit">
            Continue
          </button>
          
          <p>
            Back to <a href="#">Sign up</a>
          </p>
          
        </div>
       
      </div>
    
    </div>
  );
}

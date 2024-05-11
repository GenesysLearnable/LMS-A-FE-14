import React, { useState } from 'react';
import './studentsignup.css';




export default function SignUpForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };

  return (
    <form className='student-form' onSubmit={handleSubmit}>
      <label className="student-label" htmlFor="name">
        Your Name
      </label>
      <input
        className="student-input"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="student-label1" htmlFor="email">
        Email
      </label>
      <input
        className="student-input"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="student-label2" htmlFor="password">
        Create Password
      </label>
      <input
        className="student-input"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="student-label3" htmlFor="keepLoggedIn">
        <input
          className="student-input"
          type="checkbox"
          id="keepLoggedIn"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Keep me logged in
      </label>

      <button className='student-btn' type="submit">Join for Free</button>
    </form>
  );
}

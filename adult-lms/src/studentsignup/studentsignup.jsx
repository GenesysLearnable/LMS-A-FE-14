import React, { useState } from 'react';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='chioma' htmlFor="name">Your Name</label>
      <input className='unn'
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Create Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="keepLoggedIn">
        <input
          type="checkbox"
          id="keepLoggedIn"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Keep me logged in
      </label>

      <button type="submit">Join for Free</button>
    </form>
  );
};

export default SignUpForm;
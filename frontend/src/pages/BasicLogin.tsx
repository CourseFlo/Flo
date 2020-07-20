// Rename to: Login
import React from 'react';
import './BasicLogin.css';
import Navbar from '../components/Navbar';

const BasicLogin = () => (
  <div className="root_brandon">
    <Navbar />
    <h1>CourseFlo</h1>

    <div className="form_container">
      <p>Log in to get started!</p>
      <form>
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <button type="submit">Login</button>
      </form>

      <a href="https://www.example.com">Sign up</a>
    </div>
  </div>
);

export default BasicLogin;

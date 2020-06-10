// Rename to: Login
import React from 'react';
import './Brandon.css';

const Brandon = () => {
  return (<div className="root_brandon">
    <h1>CourseFlo</h1>

    <div className="form_container">
      <p>Log in to get started!</p>
      <form>
        <input type="email" placeholder="email" required/>
        <input type="password" placeholder="password" required/>
        <button type="submit">Login</button>
      </form>

      <a href="https://www.example.com">Sign up</a>
    </div>
  </div>);
};

export default Brandon;

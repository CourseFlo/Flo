import React from 'react';
import { Link } from 'react-router-dom';

function TempNavbar() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/Browse">Browse</Link>
      <Link to="/ProfilePage">Profile</Link>
      <Link to="/VisualCourse">Visualize</Link>
    </div>
  );
}

export default TempNavbar;

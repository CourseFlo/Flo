import React from 'react';
import { Link } from 'react-router-dom';

function TempNavbar() {
  return (
    <div>
      <Link to="/login">Brandon</Link>
      <Link to="/Browse">Browse</Link>
      <Link to="/Sam">Sam</Link>
      <Link to="/VisualCourse">Visualize</Link>
    </div>
  );
}

export default TempNavbar;

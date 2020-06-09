import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">Brandon</Link>
      <Link to="/Browse">Browse</Link>
      <Link to="/Sam">Sam</Link>
      <Link to="/Guanting">Guanting</Link>
    </div>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Page not found!</h1>
    <p>
      Why don't you try again from <Link to="/"> home</Link>.
    </p>
  </div>
);

export default ErrorPage;

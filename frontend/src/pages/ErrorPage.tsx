import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const ErrorPage = () => (
  <div style={{ textAlign: 'center' }}>
    <Typography variant="h1">Page not found!</Typography>
    <Typography variant="body1">
      Why don&apos;t you try again from&nbsp;
      <Link to="/">home</Link>
      .
    </Typography>
  </div>
);

export default ErrorPage;

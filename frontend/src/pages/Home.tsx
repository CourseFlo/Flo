import React from 'react';
import { Typography } from '@material-ui/core';
import SearchCard from '../components/SearchCard';
import CourseReg from '../assets/course-reg.jpg';

const Home = () => (
  <div>
    <div style={{ marginTop: '25%' }}>
      <Typography align="center" variant="h2">Welcome to CourseFlo</Typography>
      <SearchCard />
    </div>
    <img src={CourseReg} style={{ width: '100%', position: 'fixed', bottom: '0px' }} alt="homepage" />
  </div>
);

export default Home;

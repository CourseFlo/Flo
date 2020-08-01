import React from 'react';
import { Typography } from '@material-ui/core';
import SearchCard from '../components/SearchCard';
import CourseReg from '../assets/course-reg.jpg';

const Home = () => (
  <div>
    <Typography align="center" variant="h2">Welcome to CourseFlo</Typography>
    <SearchCard />
    <img src={CourseReg} style={{ width: '100%', position: 'fixed', bottom: '0px' }} alt="text" />
  </div>
);

export default Home;

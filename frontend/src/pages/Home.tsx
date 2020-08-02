import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SearchCard from '../components/SearchCard';
import CourseReg from '../assets/course-reg.jpg';

/*
const useStyles = makeStyles(() => createStyles({
  splash: {
    backgroundImage: url({courseReg}),
  }
})
*/

const Home = () => (
  <div style={{ background: `url(${CourseReg})`, height: '100vh', width: '100vw' }}>
    <div style={{ padding: '25%' }}>
      <Typography align="center" variant="h2">Welcome to CourseFlo</Typography>
      <SearchCard />
    </div>
    {/* <img src={CourseReg} style={{ width: '100%', position: 'fixed', bottom: '0px' }} alt="homepage" /> */}
  </div>
);

export default Home;

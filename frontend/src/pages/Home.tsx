import React from 'react';
import SearchCard from "../components/SearchCard";
import {Typography} from "@material-ui/core";

const Home = () => (
  <div>
    <Typography align='center' variant='h2'>Welcome to CourseFlo</Typography>
    <SearchCard/>
  </div>
);

export default Home;

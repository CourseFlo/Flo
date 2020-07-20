import React from 'react';
import {Typography} from "@material-ui/core";
import SearchCard from "../components/SearchCard";

const Home = () => (
  <div>
    <Typography align="center" variant="h2">Welcome to CourseFlo</Typography>
    <SearchCard />
  </div>
);

export default Home;

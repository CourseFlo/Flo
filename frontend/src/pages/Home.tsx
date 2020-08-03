import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchCard from '../components/SearchCard';
import Desk from '../assets/desk3.jpg';
// import classes from '*.module.css';

const useStyles = makeStyles((theme: Theme) => createStyles({
  splash: {
    background: `url(${Desk})`,
    height: '100vh',
    width: '100vw',
  },
  searchCard: {
    paddingTop: '20%',
    paddingLeft: '20%',
    paddingRight: '20%',
    [theme.breakpoints.down('sm')]: {
      padding: '20% 0px 0px 0px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '150px',
    },
  },
  searchCardInner: {
    padding: '20px 10px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.splash}>
      <div className={classes.searchCard}>
        <Paper className={classes.searchCardInner}>
          <Typography align="center" variant="h2">Welcome to CourseFlo</Typography>
          <SearchCard />
        </Paper>
      </div>
    </div>
  );
};

export default Home;

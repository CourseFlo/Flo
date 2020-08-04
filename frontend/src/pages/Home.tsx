import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchCard from '../components/SearchCard';
import Desk1 from '../assets/desk1.jpg';
import Desk2 from '../assets/desk2.jpg';
import Desk3 from '../assets/desk3.jpg';
import Desk4 from '../assets/desk4.jpg';
import Desk5 from '../assets/desk5.jpg';
// import classes from '*.module.css';

const deskArray = [Desk1, Desk2, Desk3, Desk4, Desk5];
const randNum = Math.floor(Math.random() * 5);
const randomDesk = deskArray[randNum];

const useStyles = makeStyles((theme: Theme) => createStyles({
  splash: {
    background: `url(${randomDesk})`,
    backgroundSize: 'cover',
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

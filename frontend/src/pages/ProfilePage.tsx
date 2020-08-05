import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core'; // eslint-disable-line no-unused-vars
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProfileMenu from '../components/ProfileMenu';
import MountainLight from '../assets/mountain-amadablam.jpg';
import MountainDark from '../assets/mountain-moena.jpg';

const mountainArray = [MountainLight, MountainDark];
const randNum = Math.floor(Math.random() * 2);
const randomMountain = mountainArray[randNum];

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    backgroundColor: '#2d46b9',
  },
  background: {
    marginTop: '10px',
    background: `url(${randomMountain})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
  },
  paperMain: {
    display: 'flex',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto',
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  largeImg: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  root: {
    flexGrow: 1,
  },
}));

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Grid container spacing={3} style={{ justifyContent: 'center' }}>
        <Paper elevation={2} className={classes.paperMain}>
          <div className={classes.root}>
            <Grid container>
              <ProfileMenu />
            </Grid>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

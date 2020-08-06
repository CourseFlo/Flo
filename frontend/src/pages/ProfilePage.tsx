import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core'; // eslint-disable-line no-unused-vars
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProfileMenu from '../components/ProfileMenu';
import MountainLight from '../assets/mountain-amadablam.jpg';
import MountainDark from '../assets/mountain-moena.jpg';
import MountainDark2 from '../assets/mountain-benlui.jpg';

const mountainArray = [MountainDark, MountainDark2];
const randNum = Math.floor(Math.random() * 2);
const randomMountainDark = mountainArray[randNum];

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    backgroundColor: '#2d46b9',
  },
  background: {
    marginTop: '10px',
    background: (theme.palette.type === 'dark') ? `url(${randomMountainDark})` : `url(${MountainLight})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
  },
  paperMain: {
    display: 'flex',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
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
        <Paper elevation={3} className={classes.paperMain}>
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

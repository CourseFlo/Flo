import React from 'react';
import {AppBar, fade} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => createStyles({
  navBar: {
    boxShadow: 'none',
  },
  title: {
    flex: 1,
  },
  buttons: {
    margin: '0px 30px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EEEEEE',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputFocused: {
    backgroundColor: '#EEEEEE',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.navBar} position="static" color="transparent">
      <Toolbar>
        <Typography className={classes.title} variant="h5">
          CourseFlo
        </Typography>
        {/*<div>*/}
        {/*  <Grid container spacing={1} alignItems="flex-end">*/}
        {/*    <Grid item>*/}
        {/*      <SearchIcon />*/}
        {/*    </Grid>*/}
        {/*    <Grid item>*/}
        {/*      <Input*/}
        {/*        placeholder="Course Search…"*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</div>*/}
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Course Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              focused: classes.inputFocused,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Button className={classes.buttons} color="inherit">Visualize</Button>
        <Button className={classes.buttons} color="inherit">Contact Us</Button>
        <Button className={classes.buttons} variant="outlined" color="inherit">Profile</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

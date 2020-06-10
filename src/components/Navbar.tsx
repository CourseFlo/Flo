import React from 'react';
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  navBar: {
    boxShadow: "none"
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.navBar} position="static" color="transparent">
      <Toolbar>
        {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
        {/*  <MenuIcon />*/}
        {/*</IconButton>*/}

        <Typography variant="h5">
          CourseFlo
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Login</Button>
        <Button variant="outlined" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

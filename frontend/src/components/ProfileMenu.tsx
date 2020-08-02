import React, { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import AccountForm from '../pages/AccountForm';
import { logout } from '../redux/actions/auth';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    height: '100vh',
  },
  secondMenuList: {
    height: '100%',
    backgroundColor: '#303030',
  },
  grow: {
    flexGrow: 1,
  },
});

function ProfileMenu(props: any) {
  const { logout } : { logout: Function } = props;
  // const [button, setButton] = useState('myAccount');
  const classes = useStyles();

  // const profile = () => {
  //   setButton('profile');
  // };

  // const myAccount = () => {
  //   setButton('myAccount');
  // };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <React.Fragment>
          <Box className={classes.root}>
            <MenuList>
              <MenuItem >
                <Typography color="primary" noWrap>
                  My account
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogoutClick}>
                <Typography color="primary">
                  Logout
                </Typography>
              </MenuItem>
              <MenuItem>
                <Box className={classes.secondMenuList} />
              </MenuItem>
            </MenuList>
          </Box>
        </React.Fragment>
      </Grid>
      <Grid item xs={8}>
        <div>
          <AccountForm />
          {/* {button === 'myAccount' && <AccountForm />}
          {button === 'profile' && <ProfileForm />} */}

        </div>
      </Grid>
    </React.Fragment>
  );
}

export default connect(null, { logout })(ProfileMenu);

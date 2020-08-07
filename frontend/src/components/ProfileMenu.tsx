import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import AccountForm from '../components/AccountForm';
import { logout } from '../redux/actions/auth';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    height: '100vh',
    minWidth: 100,
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
  const classes = useStyles();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <React.Fragment>
          <Box className={classes.root}>
            <MenuList>
              <MenuItem>
                <Typography color="primary">
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

        </div>
      </Grid>
    </React.Fragment>
  );
}

export default connect(null, { logout })(ProfileMenu);

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import ProfileForm from './ProfileForm';
import AccountForm from '../pages/AccountForm';


const useStyles = () => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#303030',
    height: '70vh',
  },
  secondMenuList: {
    height: '100%',
    backgroundColor: '#303030',
  },
  grow: {
    flexGrow: 1,
  },
});


type myProps = {
    button?: string,
    classes: any,
}

type myState = {
    button: string,
}

class ProfileMenu extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      button: 'profile',
    };
  }

  profile() {
    this.setState({
      button: 'profile',
    });
  }

  myAccount() {
    this.setState({
      button: 'myAccount',
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <React.Fragment>
            <Box className={classes.root}>
              <MenuList>
                <MenuItem onClick={this.myAccount.bind(this)}>
                  <Typography color="primary" noWrap>
                    My account
                  </Typography>
                </MenuItem>
                <MenuItem onClick={this.profile.bind(this)}>
                  <Typography color="primary">
                    Settings
                  </Typography>
                </MenuItem>
                <MenuItem>
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
            {this.state.button === 'profile' && <ProfileForm />}
            {this.state.button === 'myAccount' && <AccountForm />}

          </div>
        </Grid>
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(ProfileMenu);

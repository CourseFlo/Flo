import React from 'react';
import { Container, Typography } from '@material-ui/core/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import Books from '../assets/bookstack.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
  loginContainer: {
    margin: 'auto',
    marginTop: '150px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    // height: '70vh',
    [theme.breakpoints.down('xs')]: {
      marginTop: '25%',
    },
  },
  signUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBG: {
    width: '75%',
    marginTop: '40px',
    position: 'fixed',
    right: '-100px',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.loginContainer} maxWidth="xs">
        <Typography variant="h5" align="center">
          Log in to get started!
        </Typography>
        <LoginForm />
        <div>
          <Link to="/signup" className={classes.signUp}>
            Sign up
          </Link>
        </div>
      </Container>
      <img src={Books} className={classes.imageBG} alt="books" />
    </div>
  );
};

export default Login;

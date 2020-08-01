import React from 'react';
import { Container, Typography } from '@material-ui/core/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import Books from '../assets/bookstack.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
  loginContainer: {
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '70vh',
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
          <Link to="/signup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Sign up
          </Link>
        </div>
      </Container>
      <img src={Books} style={{ width: '75%', marginTop: '-100px', position: 'fixed', right: '-100px' }} alt="books" />
    </div>
  );
};

export default Login;

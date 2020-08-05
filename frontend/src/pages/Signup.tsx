import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import Books from '../assets/bookstack.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
  backgroundBottomRight: {
    background: `url(${Books})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  signupInner: {
    opacity: '0.95',
    padding: '20px 20px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 10px',
    },
  },
  loginContainer: {
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
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
    <div className={classes.backgroundBottomRight}>
      <Container className={classes.loginContainer} maxWidth="xs">
        <Paper className={classes.signupInner}>
          <Typography variant="h5" align="center">
            Sign up here
          </Typography>
          <SignupForm />
          <Link to="/login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Log in
          </Link>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;

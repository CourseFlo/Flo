import React from 'react';
import { Button, Container, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import LoginLight from '../assets/login-light.jpg';
import LoginDark from '../assets/login-dark.jpg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  backgroundBottomRight: {
    background: (theme.palette.type === 'dark') ? `url(${LoginDark})` : `url(${LoginLight})`,
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
  const history = useHistory();

  return (
    <div className={classes.backgroundBottomRight}>
      <Container className={classes.loginContainer} maxWidth="xs">
        <Paper className={classes.signupInner}>
          <Typography variant="h5" align="center">
            Sign up here
          </Typography>
          <SignupForm />
          <Typography style={{ paddingTop: '10px' }}>
            Already have an account?
            {' '}
            <Button onClick={() => history.push('/login')}>Log in</Button>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;

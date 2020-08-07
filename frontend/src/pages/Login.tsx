import React from 'react';
import { Container, Paper, Typography, Button } from '@material-ui/core/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import LoginLight from '../assets/login-light.jpg';
import LoginDark from '../assets/login-dark.jpg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  backgroundBottomRight: {
    background: (theme.palette.type === 'dark') ? `url(${LoginDark})` : `url(${LoginLight})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  loginInner: {
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
    height: 'calc(100vh - 66px)',
  },
  signUp: {
    paddingTop: '10px',
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
        <Paper className={classes.loginInner}>
          <Typography variant="h5" align="center">
            Log in to get started!
          </Typography>
          <LoginForm />
          <Typography className={classes.signUp}>
            Don&apos;t have an account?
            {' '}
            <Button onClick={() => history.push('/signup')}>Sign up</Button>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;

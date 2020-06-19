import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

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
          Sign up here
        </Typography>
        <SignupForm />
        <Link to="/login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Log in
        </Link>
      </Container>
    </div>
  );
};

export default Login;

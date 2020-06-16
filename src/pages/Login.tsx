import React from 'react';
// import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  loginContainer: {
    margin: 'auto',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.loginContainer} maxWidth="xs">
        <Typography variant="h5">
          Log in to get started!
        </Typography>
        <LoginForm />
        <Link to="/signup">
          Sign up
        </Link>
      </Container>
    </div>
  );
};

export default Login;

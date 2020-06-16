import React from 'react';
// import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import SignupForm from "../components/SignupForm";
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
          Sign up here
        </Typography>
        <SignupForm />
        <Link to="/login">
          Log in
        </Link>
      </Container>
    </div>
  );
};

export default Login;

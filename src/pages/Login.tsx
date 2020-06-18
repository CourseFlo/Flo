import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

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
    </div>
  );
};

export default Login;

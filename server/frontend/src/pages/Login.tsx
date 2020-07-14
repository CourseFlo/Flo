import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { getUsers } from '../redux/actions/User';

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

const Login = (props: any) => {
  const { users, getUsers } = props;
  const classes = useStyles();
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

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

const mapStateToProps = (state: any) => {
  const { users } = state;
  return { users };
};

export default connect(mapStateToProps, { getUsers })(Login);

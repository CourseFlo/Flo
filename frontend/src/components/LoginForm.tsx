import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { FormControl, InputLabel } from '@material-ui/core';
import { login } from '../redux/actions/auth';
import { LOGIN_FAIL } from '../redux/constants';
import { clearErrors } from '../redux/actions/error';
import { clearModals } from '../redux/actions/modal';

const useStyles = makeStyles((theme: Theme) => createStyles({
  inputFields: {
    width: '100%',
    marginTop: '10px',
  },
  loginButton: {
    width: '100%',
    marginTop: '30px',
  },
}));

interface Props {
  isAuthenticated: boolean,
  error: any,
  login: Function,
  clearErrors: Function,
  clearModals: Function,
}

const LoginForm = (props: any) => {
  const { isAuthenticated, error, login, clearErrors, clearModals }: Props = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    const credentials = {
      email,
      password,
    };

    login(credentials);
  };

  useEffect(() => {
    if (error.id === LOGIN_FAIL) {
      setErrorMsg(error.msg);
    } else {
      setErrorMsg(null);
    }

    if (isAuthenticated) {
      clearErrors();
      clearModals();
      // allow user to remain on page if logged in through modal
      if (location.pathname === '/login') {
        history.push('/ProfilePage');
      }
    }
  }, [error, isAuthenticated]);

  return (
    <form>
      { errorMsg ? <div>{errorMsg}</div> : null}
      <FormControl className={classes.inputFields}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          required
          onChange={handleEmailChange}
        />
      </FormControl>
      <FormControl className={classes.inputFields}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          required
          onChange={handlePasswordChange}
        />
      </FormControl>
      <Button variant="contained" className={classes.loginButton} onClick={handleSubmit}>Login</Button>
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors, clearModals })(LoginForm);

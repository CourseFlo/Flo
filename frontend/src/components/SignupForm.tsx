import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { register } from '../redux/actions/auth';
import { REGISTER_FAIL } from '../redux/constants';
import { clearErrors } from '../redux/actions/error';
import { clearModals } from '../redux/actions/modal';
import {FormControl, InputLabel} from "@material-ui/core";

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
  register: Function,
  clearErrors: Function,
  clearModals: Function,
}

const SignupForm = (props: any) => {
  const { isAuthenticated, error, register, clearErrors, clearModals }: Props = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const classes = useStyles();
  const history = useHistory();

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPw(e.target.value);
  };

  const handleSubmit = (e: any) => {
    const newUser = {
      name,
      email,
      password,
      confirmPw
    };

    register(newUser);
  };

  useEffect(() => {
    if (error.id === REGISTER_FAIL) {
      setErrorMsg(error.msg);
    } else {
      setErrorMsg(null);
    }

    if (isAuthenticated) {
      clearErrors();
      clearModals();
      // show new users to their profile
      history.push('/ProfilePage');
    }
  }, [error, isAuthenticated]);

  return (
    <form>
      {errorMsg ? <div>{errorMsg}</div> : null}
      <FormControl className={classes.inputFields}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          required
          className={classes.inputFields}
          onChange={handleNameChange}
        />
      </FormControl>
      <FormControl className={classes.inputFields}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
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
          type="password"
          id="password"
          name="password"
          required
          onChange={handlePasswordChange}
        />
      </FormControl>
      <FormControl className={classes.inputFields}>
        <InputLabel htmlFor="confirmPassword">Retype password</InputLabel>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          className={classes.inputFields}
          onChange={handleConfirmPasswordChange}
        />
      </FormControl>
      <Button variant="contained" className={classes.loginButton} onClick={handleSubmit}>Sign up</Button>
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors, clearModals })(SignupForm);

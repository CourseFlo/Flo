import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  inputFields: {
    width: '100%',
  },
  loginButton: {
    width: '100%',
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <form>
      <Input
        placeholder="email"
        type="email"
        required
        className={classes.inputFields}
      />
      <Input
        placeholder="password"
        type="password"
        required
        className={classes.inputFields}
      />
      <Button variant="contained" className={classes.loginButton}>Login</Button>
    </form>
  );
};

export default LoginForm;

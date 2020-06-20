import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  inputFields: {
    width: '100%',
    marginTop: '20px',
  },
  loginButton: {
    width: '100%',
    marginTop: '30px',
  },
}));

const SignupForm = () => {
  const classes = useStyles();

  return (
    <form>
      <Input
        placeholder="First name"
        required
        className={classes.inputFields}
      />
      <Input
        placeholder="Last name"
        required
        className={classes.inputFields}
      />
      <Input
        placeholder="Email"
        type="email"
        required
        className={classes.inputFields}
      />
      <Input
        placeholder="Password"
        type="password"
        required
        className={classes.inputFields}
      />
      <Input
        placeholder="Retype password"
        type="password"
        required
        className={classes.inputFields}
      />
      <Button variant="contained" className={classes.loginButton}>Sign up</Button>
    </form>
  );
};

export default SignupForm;

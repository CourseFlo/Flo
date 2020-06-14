import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const LoginForm = () => {
  const temp = {
    widthSetter: {
      width: '100%',
    },
  };
  return (
    <form>
      <Input
        placeholder="email"
        type="email"
        required
        style={temp.widthSetter}
      />
      <Input
        placeholder="password"
        type="password"
        required
        style={temp.widthSetter}
      />
      <Button variant="contained" style={temp.widthSetter}>Login</Button>
    </form>
  );
};

export default LoginForm;

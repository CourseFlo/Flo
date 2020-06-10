import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";

const LoginForm = () => {
  return (
    <form>
      <Input
        placeholder="email"
        type="email"
        required
      />
      <Input
        placeholder="password"
        type="password"
        required
      />
      <Button variant="contained">Login</Button>
    </form>
  );
};

export default LoginForm;

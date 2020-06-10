// Rename to: Login
import React from 'react';
import LoginForm from "../components/LoginForm";
import Link from "@material-ui/core/Link";

const Login = () => {
  return (<div>
    <LoginForm/>
    <Link>
      Sign up
    </Link>
  </div>);
};

export default Login;

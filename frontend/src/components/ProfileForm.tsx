/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Typography } from '@material-ui/core';


export default function ProfileForm(show: any) {
  return show ? (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      <Button>
        <Typography>
          submit
        </Typography>
      </Button>
    </FormControl>
  ) : null;
}

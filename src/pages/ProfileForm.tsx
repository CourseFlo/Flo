import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';



export default function ProfileForm( show: any, onClick: any ) {
    return show ? (
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            <Button onClick={onClick}>
                <Typography>
                    submit
                </Typography>
            </Button>
        </FormControl>
    ) : null
};
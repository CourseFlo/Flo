import React from 'react';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const SearchCard = () => (
  <Container>
    <Paper>
      <div style={{ textAlign: 'center' }}>Start a basic search:</div>
      <form style={{ textAlign: 'center' }}>
        <TextField />
      </form>
    </Paper>
  </Container>
);

export default SearchCard;
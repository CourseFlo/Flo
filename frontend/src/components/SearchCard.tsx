import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import { Filters } from '../type-interfaces/Search';
import { submitSearch } from '../redux/actions/Search';
import { MAX_COURSE_CODE, MIN_COURSE_CODE } from '../util/UIConstants';

interface Props {
  submitSearch: Function,
}

const SearchCard = (props: any) => {
  // eslint-disable-next-line no-shadow
  const { submitSearch }: Props = props;
  const history = useHistory();

  const searchInputs: Filters = {
    query: '',
    letterCodes: [],
    numberRange: [MIN_COURSE_CODE, MAX_COURSE_CODE],
  };
  const handleQueryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target as HTMLSelectElement;
    if (value.trim() === '' || value.trim() === '') {
      return;
    }
    searchInputs.query = value;
  };

  return (
    <Container>
      <Paper>
        <div style={{ textAlign: 'center' }}>Start a basic keyword search:</div>
        <form style={{ textAlign: 'center' }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search for a course"
            helperText="Use course names, numbers, or 4 letter codes."
            onChange={handleQueryChange}
          />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => {
              submitSearch(searchInputs);
              history.push('/Browse');
            }}
            startIcon={<SearchIcon />}
          />
        </form>
      </Paper>
    </Container>
  );
};

export default connect(null, { submitSearch })(SearchCard);

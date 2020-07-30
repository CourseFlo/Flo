import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, TextField, FormControl, InputLabel, Select, Button, Typography, Slider } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { Filters } from '../type-interfaces/Search';
import { submitSearch } from '../redux/actions/Search';
import { MIN_COURSE_CODE, MAX_COURSE_CODE, SLIDER_STEP_SIZE } from '../util/UIConstants';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  queryForm: {
  },
  searchContainer: {
    // margin: '10%',
  },
  filterItem: {
    textAlign: 'center',
  },
  letterCodeForm: {
    margin: theme.spacing(1),
    width: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {},
  chip: {},
  codeTypography: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  searchButton: {
    width: '100%',
  },
}));

// Create array of slider marks: MIN_COURSE_CODE to MAX_COURSE_CODE, in steps of SLIDER_STEP_SIZE
const sliderRange: any[] = Array
  .from(Array((MAX_COURSE_CODE - MIN_COURSE_CODE) / SLIDER_STEP_SIZE + 1)
    .keys());
const sliderMarks = sliderRange.map((_num, i) => ({
  value: (MIN_COURSE_CODE + i * SLIDER_STEP_SIZE),
  label: `${MIN_COURSE_CODE + i * SLIDER_STEP_SIZE}`,
}));

interface Props {
  submitSearch: Function,
}

const Search = (props: any) => {
  // eslint-disable-next-line no-shadow
  const { submitSearch }: Props = props;
  const classes = useStyles();
  const [letterCodes, setLetterCodes] = useState<any[]>([]);
  const [queryString, setQueryString] = useState<string>('');
  const [numberRange, setNumberRange] = useState<number[]>([200, 400]);
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/courses/letterCodes')
      .then((response: AxiosResponse) => {
        setNames(response.data);
      })
      .catch(() => {
        console.log('error fetching course letter codes');
      });
  }, []);

  const handleLetterCodeChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const codes: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        codes.push(options[i].value);
      }
    }
    setLetterCodes(codes);
  };

  const handleQueryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target as HTMLSelectElement;
    if (value.trim() === '' || value.trim() === '') {
      return;
    }
    setQueryString(value);
  };

  const handleNumberRangeChange = (_event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue) || newValue.length !== 2) {
      return;
    }
    setNumberRange(newValue);
  };

  const handleSubmit = () => {
    const searchInputs: Filters = {
      letterCodes,
      query: queryString,
      numberRange,
    };
    submitSearch(searchInputs);
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        {/* TODO Extract this margin into a better system */}
        <Grid container spacing={3}>
          <Grid item xs />
          <Grid item xs>
            <form className={classes.queryForm} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Search for a course"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText="Use course names, numbers, or 4 letter codes."
                onChange={handleQueryChange}
              />
            </form>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container spacing={10} alignItems="stretch">
          <Grid item xs>
            <Box className={classes.filterItem}>
              <FormControl className={classes.letterCodeForm}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  4 Letter Course Codes
                </InputLabel>
                <Select
                  multiple
                  native
                  value={letterCodes}
                  onChange={handleLetterCodeChangeMultiple}
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                >
                  {names.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              {'Selected Codes: '}
              <Typography>{letterCodes.join(', ')}</Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={classes.filterItem}>
              <Typography id="range-slider" gutterBottom>
                Course number range:
              </Typography>
              <Slider
                value={numberRange}
                onChange={handleNumberRangeChange}
                orientation="horizontal"
                min={MIN_COURSE_CODE}
                max={MAX_COURSE_CODE}
                step={SLIDER_STEP_SIZE}
                valueLabelDisplay="auto"
                marks={sliderMarks}
                aria-labelledby="range-slider"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs />
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleSubmit}
              className={classes.searchButton}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    </div>
  );
};

export default connect(null, { submitSearch })(Search);

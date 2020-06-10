import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'; // eslint-disable-line no-unused-vars
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/Search';

import { connect } from 'react-redux';

import { changeFilters, submitSearch } from '../redux/actions/Browse';
import { Filters, Props } from '../type-interfaces/Browse'; // eslint-disable-line no-unused-vars
import { MIN_COURSE_CODE, MAX_COURSE_CODE, SLIDER_STEP_SIZE } from './UIConstants';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  spacePlaceholder: {
    margin: '7%',
  },
  searchContainer: {
    margin: '10%',
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
    width: '75%',
  },
}));

// REMOVE once the selected codes section is refactored
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// REMOVE once we have actual data
const names = [
  'ANTH',
  'ARTI',
  'CPSC',
  'OTHE',
  'STHE',
  'TTHE',
];

const Browse = (props: any) => {
  // eslint-disable-next-line no-shadow
  const { searchFilters, searchResults, changeFilters, submitSearch }: Props = props;
  const classes = useStyles();
  const searchInputs: Filters = {
    ...searchFilters,
  };
  console.log('Results: ', searchResults); // REMOVE once there is a results section

  const handleLetterCodeChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const codes: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        codes.push(options[i].value);
      }
    }

    searchInputs.letterCodes = codes;
    changeFilters(searchInputs);
  };

  const handleQueryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target as HTMLSelectElement;
    if (value.trim() === '' || value.trim() === '') {
      return;
    }
    searchInputs.query = value;
    changeFilters(searchInputs);
  };

  const handleNumberRangeChange = (event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue) || newValue.length !== 2) {
      return;
    }
    const newRange: number | number[] = newValue;
    searchInputs.numberRange = newRange;
    changeFilters(searchInputs);
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        {/* TODO Extract this margin into a better system */}
        <div className={classes.spacePlaceholder} />
        <Grid container spacing={3}>
          <Grid item xs>
            {/* <Paper className={classes.paper}>xs</Paper> */}
          </Grid>
          <Grid item xs>
            <form className={classes.root} noValidate autoComplete="off">
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
          <Grid item xs>
            {/* <Paper className={classes.paper}>xs</Paper> */}
          </Grid>
        </Grid>
        <div className={classes.spacePlaceholder} />
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl className={classes.formControl}>
              <InputLabel id="mutiple-chip-label">Selected Codes</InputLabel>
              <Select
                labelId="mutiple-chip-label"
                id="mutiple-chip"
                multiple
                disabled
                value={searchInputs.letterCodes}
                onChange={handleLetterCodeChangeMultiple}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} className={classes.chip} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} className={classes.codeTypography}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.letterCodeForm}>
              <InputLabel shrink htmlFor="select-multiple-native">
                4 Letter Course Codes
              </InputLabel>
              <Select
                multiple
                native
                value={searchInputs.letterCodes}
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
          </Grid>
          <Grid item xs>
            <Typography id="range-slider" gutterBottom>
              Course number range
            </Typography>
            <Slider
              value={searchInputs.numberRange}
              onChange={handleNumberRangeChange}
              min={MIN_COURSE_CODE}
              max={MAX_COURSE_CODE}
              step={SLIDER_STEP_SIZE}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Other fancy filter</Paper>
          </Grid>
        </Grid>
        <div className={classes.spacePlaceholder} />
        <Grid container spacing={3}>
          <Grid item xs>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => { submitSearch(searchInputs); }}
              className={classes.searchButton}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

// TODO Review proptypes
Browse.propTypes = {
  searchFilters: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  // searchResults: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  changeFilters: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

interface State {
  searchFiltering: Filters,
  searchRetrieval: { courses: object[] },
}
const mapStateToProps = (store: State) => {
  const { searchFiltering, searchRetrieval }: State = store;
  return { searchFilters: searchFiltering, searchResults: searchRetrieval };
};

export default connect(mapStateToProps, { changeFilters, submitSearch })(Browse);

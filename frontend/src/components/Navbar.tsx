import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { Filters } from '../type-interfaces/Search';
import { MAX_COURSE_CODE, MIN_COURSE_CODE } from '../util/UIConstants';
import { changeFilters, submitSearch } from '../redux/actions/Search';

// TODO: TAKE OUT CHANGEFILTERS, SEARCHFILTERS FROM SEARCH BASIC, AND SEARCH NAVBAR

interface Props {
  loggedIn: boolean,
  submitSearch: Function,
  changeFilters: Function
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  navBar: {
    boxShadow: 'none',
  },
  title: {
    flex: 1,
  },
  buttons: {
    margin: '0px 30px',
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EEEEEE',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1200,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputFocused: {
    backgroundColor: '#EEEEEE',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar(props: any) {
  // eslint-disable-next-line no-shadow
  const { loggedIn, submitSearch, changeFilters }: Props = props;
  const classes = useStyles();
  const currFilters: Filters = {
    query: '',
    letterCodes: [],
    numberRange: [MIN_COURSE_CODE, MAX_COURSE_CODE],
  };

  const handleQueryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target as HTMLSelectElement;
    if (value.trim() === '' || value.trim() === '') {
      return;
    }
    currFilters.query = value;
    changeFilters(currFilters);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // alert(`Enter! ${currFilters.query}`);
      return submitSearch(currFilters);
    }
  };

  return (
    <AppBar className={classes.navBar} position="static" color="transparent">
      <Toolbar>
        <Typography className={classes.title} variant="h5">
          <Link to="/">
            CourseFlo
          </Link>
        </Typography>
        {/* <div> */}
        {/*  <Grid container spacing={1} alignItems="flex-end"> */}
        {/*    <Grid item> */}
        {/*      <SearchIcon /> */}
        {/*    </Grid> */}
        {/*    <Grid item> */}
        {/*      <Input */}
        {/*        placeholder="Course Search…" */}
        {/*      /> */}
        {/*    </Grid> */}
        {/*  </Grid> */}
        {/* </div> */}
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Course Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              focused: classes.inputFocused,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            // onSubmit={() => submitSearch(currFilters)}
          />
        </div>
        <Button className={classes.buttons} color="inherit" href="/VisualCourse">Visualize</Button>
        <Button className={classes.buttons} color="inherit">Contact Us</Button>
        {loggedIn
          ? <Button className={classes.buttons} variant="outlined" color="inherit" href="/Sam">Profile</Button>
          : <Button className={classes.buttons} variant="outlined" color="inherit" href="/login">Login</Button>}
      </Toolbar>
    </AppBar>
  );
}
interface UserState {
  setLogin: boolean,
}
const mapStateToProps = (state: UserState) => {
  const { setLogin }: UserState = state;
  return { loggedIn: setLogin };
};

export default connect(mapStateToProps, { submitSearch, changeFilters })(Navbar);

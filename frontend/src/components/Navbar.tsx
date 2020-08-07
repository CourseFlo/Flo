import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Button, Switch } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Filters } from '../type-interfaces/Search';
import { MAX_COURSE_CODE, MIN_COURSE_CODE } from '../util/UIConstants';
import { submitSearch } from '../redux/actions/Search';

interface Props {
  isLoggedIn: boolean,
  submitSearch: Function,
  darkModeSwitch: any,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  navBar: {
    boxShadow: 'none',
  },
  title: {
    flex: 1,
    '& *': {
      textDecoration: 'none',
      textTransform: 'capitalize',
      padding: '6px 20px',
      margin: '0px -10px',
      fontSize: '24px',
      fontWeight: 'normal',
    },
  },
  buttons: {
    margin: '0px 20px',
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: (theme.palette.type === 'dark') ? '#000000' : '#FFFFFF',
    '&:hover': {
      backgroundColor: (theme.palette.type === 'dark') ? '#111111' : '#EEEEEE',
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
    backgroundColor: (theme.palette.type === 'dark') ? '#111111' : '#EEEEEE',
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
  const { isLoggedIn, submitSearch, darkModeSwitch }: Props = props;
  const history = useHistory();
  const classes = useStyles();
  const { darkMode, setDarkMode } = darkModeSwitch;

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
  };

  // eslint-disable-next-line consistent-return
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (currFilters.query.length) {
        submitSearch(currFilters);
        history.push('/Browse');
      }
    }
  };

  return (
    <AppBar className={classes.navBar} position="static" color="transparent">
      <Toolbar>
        <Typography className={classes.title} variant="h5">
          <Button onClick={() => history.push('/')}>
            CourseFlo
          </Button>
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          inputProps={{ 'aria-label': 'toggle-darkmode' }}
        />
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
          />
        </div>
        <Button className={classes.buttons} color="inherit" onClick={() => history.push('/Browse')}>Search</Button>
        <Button className={classes.buttons} color="inherit" onClick={() => history.push('/VisualCourse')}>Visualize</Button>
        {isLoggedIn
          ? <Button className={classes.buttons} variant="outlined" color="inherit" onClick={() => history.push('/ProfilePage')}>Profile</Button>
          : <Button className={classes.buttons} variant="outlined" color="inherit" onClick={() => history.push('/login')}>Login</Button>}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state: any) => ({ isLoggedIn: state.auth.isAuthenticated });

export default connect(mapStateToProps, { submitSearch })(Navbar);

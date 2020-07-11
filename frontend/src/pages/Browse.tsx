import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, CircularProgress } from '@material-ui/core';

import { connect } from 'react-redux';
import Results from '../components/Results';
import Search from '../components/Search';

interface Props {
  isSearchLoading: boolean,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 100,
  },
  pageTitle: {
    textAlign: 'center',
  },
  paper: {},
}));

const Browse = (props: any) => {
  // eslint-disable-next-line no-shadow
  const { isSearchLoading }: Props = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={4}>
          <Typography variant="h3" className={classes.pageTitle} color="secondary">Search</Typography>
        </Grid>
        <Grid item xs />
      </Grid>
      <Search />
      {isSearchLoading ?
        <CircularProgress /> :
        <></>}
      <Results />
    </div>
  );
};

// TODO Review proptypes
Browse.propTypes = {
};

interface BrowseState {
  isSearchLoading: boolean,
}
const mapStateToProps = (state: BrowseState) => {
  const { isSearchLoading }: BrowseState = state;
  return { isSearchLoading };
};

export default connect(mapStateToProps, { })(Browse);

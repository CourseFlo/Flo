import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

import { connect } from 'react-redux';
import Results from '../components/Results';
import Search from '../components/Search';

interface Props {
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 100,
  },
  pageTitle: {
    fontSize: '30px',
    textAlign: 'center',
  },
  paper: {},
}));

const Browse = (props: any) => {
  // eslint-disable-next-line no-shadow
  const {}: Props = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>space (dev)</Paper>
        </Grid>
        <Grid item xs>
          <p className={classes.pageTitle}>Search</p>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>space (dev)</Paper>
        </Grid>
      </Grid>
      <Search />
      <Results />
    </div>
  );
};

// TODO Review proptypes
Browse.propTypes = {
};

export default connect(null, { })(Browse);

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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
        <Grid item xs />
        <Grid item xs={4}>
          <Typography variant="h3" className={classes.pageTitle} color="secondary">Search</Typography>
        </Grid>
        <Grid item xs />
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

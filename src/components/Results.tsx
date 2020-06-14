import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
}));

interface Props {
  searchResults: { courses: object[] },
}

const Results = (props: any) => {
  const { searchResults }: Props = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {searchResults}{console.log("Re rendering search results")}
    </div>
  );
};

// TODO Review custom
Results.propTypes = {
  searchResults: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

interface ResultsState {
  searchResults: object,
}
const mapStateToProps = (state: ResultsState) => {
  const { searchResults }: ResultsState = state;
  return { searchResults };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);

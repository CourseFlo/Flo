import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import Results from '../components/Results';
import Search from '../components/Search';

interface Props {
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
}));

const Browse = (props: any) => {
  // eslint-disable-next-line no-shadow
  const {}: Props = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Search />
      <Results />
    </div>
  );
};

// TODO Review proptypes
Browse.propTypes = {
};

export default connect(null, { })(Browse);

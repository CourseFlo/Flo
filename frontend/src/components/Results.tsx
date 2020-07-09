import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Course } from '../type-interfaces/Course';
import { CardContent, Card, Typography, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

interface Props {
  searchResults: Course[],
}

const Results = (props: Props) => {
  const { searchResults }: Props = props;
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      {searchResults.map((item) => (
        <>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {item.sessionYear}
                {item.sessionTerm}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.courseLetterCode}
                {item.courseDigitCode}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {`Restrictions: ${  item.restrictionInfo}`}
                {` | Pre-reqs: ${Object.keys(item.preReqs)}`}
              </Typography>
              <Typography variant="body2" component="p">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </>
      ))}

    </div>
  );
};

// TODO Review custom
Results.propTypes = {
  searchResults: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

interface ResultsState {
  searchResults: any,
}
const mapStateToProps = (state: ResultsState) => {
  const { searchResults }: ResultsState = state;
  return { searchResults };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);

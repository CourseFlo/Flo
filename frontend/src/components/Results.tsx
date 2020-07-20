import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardContent, Card, Typography, CardActions, Button, Grid } from '@material-ui/core';

import { Course } from '../type-interfaces/Course';
import { getVisualizedCourses } from '../redux/actions/courses';

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
  getVisualizedCoursesAction: Function,
}

const Results = (props: Props) => {
  const { searchResults, getVisualizedCoursesAction }: Props = props;
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {searchResults.map((item) => (
        <Grid item xs={4} key={item.courseId}>
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
                {`Restrictions: ${item.restrictionInfo}`}
                {` | Pre-reqs: ${Object.keys(item.preReqs)}`}
              </Typography>
              <Typography variant="body2" component="p">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => getVisualizedCoursesAction(item.courseId)}>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// // TODO Review custom proptypes
// Results.propTypes = {
//   searchResults: PropTypes.CourseArray,
// };

interface ResultsState {
  searchResults: any,
}
const mapStateToProps = (state: ResultsState) => {
  const { searchResults }: ResultsState = state;
  return { searchResults };
};

const mapDispatchToProps = (dispatch: any) => ({
  getVisualizedCoursesAction: (params: string) => dispatch(getVisualizedCourses(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);

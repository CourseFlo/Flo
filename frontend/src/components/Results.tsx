import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Favorite } from '@material-ui/icons/';
import { CardContent, Card, Typography, CardActions, Button, Grid, IconButton } from '@material-ui/core';

import { Course, CourseId } from '../type-interfaces/Course';
import { getVisualizedCourses } from '../redux/actions/courses';
import { starCourse } from '../redux/actions/User';

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

interface ResultsState {
  searchResults: any,
  auth: any
}

interface Props {
  searchResults: Course[],
  auth: any
  getVisualizedCoursesAction: Function,
}

const Results = (props: Props) => {
  const { searchResults, getVisualizedCoursesAction, auth }: Props = props;
  const history = useHistory();
  const classes = useStyles();
  const isAuthed = auth.isAuthenticated;
  // let starredCourses;
  // if (isAuthed) {
  //   auth.user.starredCourses.reduceRight((result: any, item: CourseId) => {
  //     result[item] = item; //a, b, c
  //     return result;
  //   }, {});
  // }

  // Pre-emptively get info and redirect to the visualizer to see the course selected
  const handleSelect = (course: any) => {
    getVisualizedCoursesAction(course.courseId);
    history.push('/VisualCourse');
  };

  const handleStar = (courseId: any) => {
    if (isAuthed) {
      // eslint-disable-next-line no-underscore-dangle
      starCourse(courseId);
    } else {
      // Force the user to go login // FIX I hate this feature. Let's make a modal instead
      history.push('/login');
    }
  };

  return (
    <Grid container spacing={3}>
      {searchResults.map((course) => (
        <Grid item xs={4} key={course.courseId}>
          <Card className={classes.root}>
            <CardContent>
              {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                {course.sessionYear}
                {course.sessionTerm}
              </Typography> */}
              <Typography variant="h5" component="h2">
                {course.courseLetterCode}
                {course.courseDigitCode}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {course.restrictionInfo ? `Restrictions: ${course.restrictionInfo}` : null}
                {(course.restrictionInfo !== '' && course.preReqs.length > 0) ? ' | ' : null}
                {course.preReqs.length > 0 ? `Pre-reqs: ${course.preReqs.join(', ')}` : null}
              </Typography>
              <Typography variant="body2" component="p">
                {/* {course.description} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleSelect(course)}>Learn More</Button>
              <IconButton aria-label="add to favorites" onClick={() => handleStar(course.courseId)}>
                <Favorite />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: ResultsState) => {
  const { searchResults, auth }: ResultsState = state;
  return { searchResults, auth };
};

const mapDispatchToProps = (dispatch: any) => ({
  getVisualizedCoursesAction: (params: string) => dispatch(getVisualizedCourses(params)),
  starCourse: (courseId: CourseId) => dispatch(starCourse(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, Card, IconButton, Typography, CardActions, CardContent, Button, makeStyles, createStyles, Theme } from '@material-ui/core/';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';

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

const MiniCourse = (props: any) => {
  const { courseData, getVisualizedCoursesAction, starCourseAction, auth } = props;
  const classes = useStyles();
  const history = useHistory();
  const isAuthed = auth.isAuthenticated;
  const [isStarred, setIsStarred] = useState(false);

  let starredCoursesSet;
  useEffect(() => {
    if (isAuthed) {
      starredCoursesSet = new Set(auth.user.starredCourses);
      setIsStarred(starredCoursesSet.has(courseData.courseId));
    }
  }, [auth.user]);

  const handleStar = (courseId: any) => {
    if (isAuthed) {
      // eslint-disable-next-line no-underscore-dangle
      starCourseAction(courseId);
    } else {
      // Force the user to go login // FIX I hate this feature. Let's make a modal instead
      history.push('/login');
    }
  };

  // Pre-emptively get info and redirect to the visualizer to see the course selected
  const handleSelect = (course: any) => {
    getVisualizedCoursesAction(course.courseId);
    history.push('/VisualCourse');
  };

  return (
    <Grid item xs={4} key={courseData.courseId}>
      <Card className={classes.root}>
        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
            {courseData.sessionYear}
            {courseData.sessionTerm}
          </Typography> */}
          <Typography variant="h5" component="h2">
            {courseData.courseLetterCode}
            {' '}
            {courseData.courseDigitCode}
          </Typography>
          <Typography variant="caption">
            {courseData.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {courseData.restrictionInfo ? `Restrictions: ${courseData.restrictionInfo}` : null}
            {(courseData.restrictionInfo && courseData.preReqs.length > 0) ? ' | ' : null}
            {courseData.preReqs.length > 0 ? `Pre-reqs: ${courseData.preReqs.join(', ')}` : null}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleSelect(courseData)}>Learn More</Button>
          <IconButton aria-label="add to favorites" onClick={() => handleStar(courseData.courseId)}>
            {isStarred ? <Favorite /> : <FavoriteBorderOutlined />}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, {
  getVisualizedCoursesAction: getVisualizedCourses,
  starCourseAction: starCourse,
})(MiniCourse);

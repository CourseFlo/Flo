import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Grid, Card, IconButton, Typography, CardActions, CardContent, Button, makeStyles, createStyles, Theme } from '@material-ui/core/';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';

import { starCourse } from '../redux/actions/User';
import { openCourseModal, openLoginModal } from '../redux/actions/modal';

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
  const { courseData, starCourseAction, openLoginModal, openCourseModal, auth } = props;
  const classes = useStyles();
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
      starCourseAction(courseId);
    } else {
      openLoginModal();
    }
  };

  // Pre-emptively get info and redirect to the visualizer to see the course selected
  const handleSelect = (course: any) => {
    openCourseModal(course.courseId);
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
            {(courseData.restrictionInfo && courseData.preReqs.length > 0) ? <br /> : null}
            {courseData.preReqs.length > 0 ? `Pre-reqs: ${courseData.preReqs.join(', ')}` : null}
            {((courseData.restrictionInfo || courseData.preReqs.length > 0) && courseData.depn.length > 0) ? <br /> : null}
            {courseData.depn.length > 0 ? `Dependents: ${courseData.depn.join(', ')}` : null}
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

const mapStateToProps = (state: any) => ({ auth: state.auth });

export default connect(mapStateToProps, {
  starCourseAction: starCourse,
  openLoginModal,
  openCourseModal,
})(MiniCourse);

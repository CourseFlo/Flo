import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Card, IconButton, Typography, CardActions, CardContent, Button } from '@material-ui/core/';
import { Favorite } from '@material-ui/icons';

import { getVisualizedCourses } from '../redux/actions/courses';
import { useHistory } from 'react-router-dom';
// import { starCourse } from '../redux/actions/User';

const starCourse = (courseId: any) => { console.log('CLicked star course', courseId); };

function Course(props: any) {
  const { courseData, getVisualizedCoursesAction, auth } = props;
  const history = useHistory();
  const isAuthed = false; // auth.isAuthenticated; FIXME When pulled
  const [isStarred, setIsStarred] = useState(false); // TODO use this below
  if (isAuthed) {
    setIsStarred(auth.user.starredCourses.includes(courseData.courseId));
  }

  const handleStar = (courseId: any) => {
    if (isAuthed) {
      starCourse(courseId);
    } else {
      // Force the user to go login // FIX I hate this feature. Let's make a modal instead
      history.push('/login');
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {courseData.courseId}
        </Typography>
        <Typography variant="caption">
          {courseData.title}
        </Typography>
        <Typography variant="body2">
          {courseData.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => getVisualizedCoursesAction(courseData.courseId)}>
          Details.
        </Button>
        <Button href={courseData.link}>Visit Site</Button>
        <IconButton aria-label="add to favorites" onClick={() => handleStar(courseData.courseId)}>
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state: any) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, {
  getVisualizedCoursesAction: getVisualizedCourses,
  starCourseAction: starCourse,
})(Course);

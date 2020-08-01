import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Card, IconButton, Typography, CardActions, CardContent, Button } from '@material-ui/core/';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';

import { getVisualizedCourses } from '../redux/actions/courses';
import { starCourse } from '../redux/actions/User';
import { openLoginModal } from '../redux/actions/modal';

function Course(props: any) {
  const { courseData, getVisualizedCoursesAction, starCourseAction, openModal, auth } = props;
  const isAuthed = auth.isAuthenticated;
  const [isStarred, setIsStarred] = useState<boolean>(false);

  let starredCoursesSet;
  useEffect(() => {
    if (isAuthed) {
      starredCoursesSet = new Set(auth.user.starredCourses);
      setIsStarred(starredCoursesSet.has(courseData.courseId));
    }
  }, [auth.user, courseData]);

  const handleStar = (courseId: any) => {
    if (isAuthed) {
      starCourseAction(courseId);
    } else {
      // Force the user to go login // FIX I hate this feature. Let's make a modal instead
      openModal();
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {courseData.courseLetterCode}
          {' '}
          {courseData.courseDigitCode}
        </Typography>
        <Typography variant="caption">
          {courseData.title}
        </Typography>
        <Typography variant="body2">
          {courseData.description}
        </Typography>
        <Typography color="textSecondary">
          {courseData.restrictionInfo ? `Restrictions: ${courseData.restrictionInfo}` : null}
          {(courseData.restrictionInfo && courseData.preReqs.length > 0) ? <br /> : null}
          {courseData.preReqs.length > 0 ? `Pre-reqs: ${courseData.preReqs.join(', ')}` : null}
          {((courseData.restrictionInfo || courseData.preReqs.length > 0) && courseData.depn.length > 0) ? <br /> : null}
          {courseData.depn.length > 0 ? `Dependents: ${courseData.depn.join(', ')}` : null}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => getVisualizedCoursesAction(courseData.courseId)}>
          Details.
        </Button>
        <Button href={courseData.link}>Visit Site</Button>
        <IconButton aria-label="add to favorites" onClick={() => handleStar(courseData.courseId)}>
          {isStarred ? <Favorite /> : <FavoriteBorderOutlined />}
        </IconButton>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state: any) => ({ auth: state.auth });

export default connect(mapStateToProps, {
  getVisualizedCoursesAction: getVisualizedCourses,
  starCourseAction: starCourse,
  openModal: openLoginModal,
})(Course);

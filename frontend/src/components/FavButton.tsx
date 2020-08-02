import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { IconButton } from '@material-ui/core/';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';

import { starCourse } from '../redux/actions/User';
import { openLoginModal } from '../redux/actions/modal';

function FavButton(props: any) {
  const { courseId, starCourse, openLoginModal, auth } = props;
  const isAuthed = auth.isAuthenticated;
  const [isStarred, setIsStarred] = useState(false);

  let starredCoursesSet;
  useEffect(() => {
    if (isAuthed) {
      starredCoursesSet = new Set(auth.user.starredCourses);
      setIsStarred(starredCoursesSet.has(courseId));
    }
  }, [auth.user, courseId]);

  const handleStar = (courseId: any) => {
    if (isAuthed) {
      starCourse(courseId);
    } else {
      openLoginModal();
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={() => handleStar(courseId)}>
      {isStarred ? <Favorite /> : <FavoriteBorderOutlined />}
    </IconButton>
  )
};

const mapStateToProps = (state: any) => ({ auth: state.auth });

export default connect(mapStateToProps, { starCourse, openLoginModal })(FavButton);

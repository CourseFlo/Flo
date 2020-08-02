import React from 'react';
import { connect } from 'react-redux';

import { Card, Typography, CardActions, CardContent, Button } from '@material-ui/core/';

import { openCourseModal } from '../redux/actions/modal';
import FavButton from './FavButton';
import { getVisualizedCourses } from '../redux/actions/courses';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

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
}));

function Course(props: any) {
  const { courseData, openCourseModal, getVisualizedCourses } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">
          {courseData.courseLetterCode}
          {' '}
          {courseData.courseDigitCode}
        </Typography>
        <Typography variant="caption">
          {courseData.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => openCourseModal(courseData.courseId)}
          variant="outlined"
        >
          Details
        </Button>
        <Button
          onClick={() => getVisualizedCourses(courseData.courseId)}
          variant="outlined"
        >
          Visualize
        </Button>
        <FavButton courseId={courseData.courseId} />
      </CardActions>
    </Card>
  );
}

export default connect(null, {
  openCourseModal,
  getVisualizedCourses,
})(Course);

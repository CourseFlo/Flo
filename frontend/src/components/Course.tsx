import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/';

import { openCourseModal } from '../redux/actions/modal';
import FavButton from './FavButton';
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
}));

function Course(props: any) {
  const { courseData, openCourseModal, getVisualizedCourses } = props;
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const handleVisualize = () => {
    getVisualizedCourses(courseData.courseId);
    if (location.pathname === '/Browse') history.push('/VisualCourse');
  };
  

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
          onClick={handleVisualize}
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

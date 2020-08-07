import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
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
  primary: {
    fontSize: '15px',
  },
  secondary: {
    width: '90%',
  },
  buttons: {
    flexDirection: 'column',
  },
}));

// Alternative to Course Card, to produce lists instead
function CourseListItem(props: any) {
  const { courseData, openCourseModal, getVisualizedCourses } = props;
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const handleVisualize = () => {
    getVisualizedCourses(courseData.courseId);
    if (location.pathname === '/Browse') history.push('/VisualCourse');
  };

  return (
    <>
      <ListItem dense>
        <ListItemText
          classes={{ primary: classes.primary, secondary: classes.secondary }}
          primary={`${courseData.courseLetterCode} ${courseData.courseDigitCode}`}
          secondary={courseData.title}
        />
        <ListItemSecondaryAction>
          <FavButton courseId={courseData.courseId} />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem className={classes.buttons} dense>
        <Button
          fullWidth
          onClick={() => openCourseModal(courseData.courseId)}
          variant="outlined"
          size="small"
        >
          Details
        </Button>
        <Button
          fullWidth
          onClick={handleVisualize}
          variant="outlined"
          size="small"
        >
          Visualize
        </Button>
      </ListItem>
    </>
  );
}

export default connect(null, {
  openCourseModal,
  getVisualizedCourses,
})(CourseListItem);

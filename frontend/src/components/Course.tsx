import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getVisualizedCourses } from '../redux/actions/courses';

const useStyles = makeStyles({
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
});

function Course(props: any) {
  const { courseData, getVisualizedCoursesAction } = props;
  // const classes = useStyles();
  console.log("Course props: ", props);

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
      </CardActions>
    </Card>
  );
}

export default connect(null, {
  getVisualizedCoursesAction: getVisualizedCourses,
})(Course);

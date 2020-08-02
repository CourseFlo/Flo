import React from 'react';
import { connect } from 'react-redux';

import { Card, Typography, CardActions, CardContent, Button } from '@material-ui/core/';

import { openCourseModal } from '../redux/actions/modal';
import FavButton from './FavButton';

function Course(props: any) {
  const { courseData, openCourseModal } = props;

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
        <Button onClick={() => openCourseModal(courseData.courseId)}>
          Details.
        </Button>
        <Button href={courseData.link}>Visit Site</Button>
        <FavButton courseId={courseData.courseId} />
      </CardActions>
    </Card>
  );
}

export default connect(null, {
  openCourseModal,
})(Course);

import React from 'react';
import { connect } from 'react-redux';

import { Grid, Card, Typography, CardActions, CardContent, Button, makeStyles, createStyles, Theme } from '@material-ui/core/';

import { openCourseModal } from '../redux/actions/modal';
import FavButton from './FavButton';

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
  const { courseData, openCourseModal } = props;
  const classes = useStyles();

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
          <Button size="small" onClick={() => openCourseModal(courseData.courseId)}>Learn More</Button>
          <FavButton courseId={courseData.courseId} />
        </CardActions>
      </Card>
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({ auth: state.auth });

export default connect(mapStateToProps, { openCourseModal })(MiniCourse);

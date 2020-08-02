import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

import Course from '../components/Course';
import ThreeDee from '../components/ThreeDee';

interface Props {
  visualizedCourses: any,
}
const VisualCourse = (props: Props) => {
  const { visualizedCourses }: Props = props;

  const coursesListPrereqs = visualizedCourses.preReqs;
  const coursesListFuture = visualizedCourses.depns;

  return (
    <>
      <Grid container spacing={3} justify="center" alignItems="flex-start" style={{ margin: '30px' }}>
        {/* <Grid item xs={false} sm={2} /> */}
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} justify="center" direction="column">
              {coursesListPrereqs.map((course: any) => (
                <Grid item key={course.courseId} xs={11}>
                  <Course courseData={course} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} justify="center" direction="column">
              <Grid item xs={11}>
                <Course courseData={visualizedCourses.target} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} direction="column">
              {coursesListFuture.map((course: any) => (
                <Grid item key={course.courseId} xs={11}>
                  <Course courseData={course} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <ThreeDee />
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { visualizedCourses }: any = state;
  return { visualizedCourses };
};

export default connect(mapStateToProps, null)(VisualCourse);

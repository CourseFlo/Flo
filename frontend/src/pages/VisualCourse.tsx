import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, Paper } from '@material-ui/core';
import Course from '../components/Course';

interface Props {
  visualizedCourses: any,
  courses: any,
}
const VisualCourse = (props: Props) => {
  const { visualizedCourses, courses }: Props = props;
  const history = useHistory();

  useEffect(() => {
    if (!visualizedCourses.targetId) {
      history.push('/Browse');
    }
  }, []);

  // console.log("Visual course object: ", visualizedCourses, courses);
  if (!visualizedCourses.targetId || visualizedCourses.error || visualizedCourses.loading) return <h2></h2>;
  return (
    <>
      <Grid container spacing={3} justify="center" alignItems="flex-start">
        {/* <Grid item xs={false} sm={2} /> */}
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} justify="center" direction="column">
              {visualizedCourses.preReqs.map((course: any) => (
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
              {visualizedCourses.depn.map((course: any) => (
                <Grid item key={course.courseId} xs={11}>
                  <Course courseData={course} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { visualizedCourses, courses }: any = state;
  return { visualizedCourses, courses };
};

export default connect(mapStateToProps, null)(VisualCourse);

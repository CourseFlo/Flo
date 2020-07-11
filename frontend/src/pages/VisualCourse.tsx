// rename to visualize
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

import Course from '../components/VisualCourse/course';
import '../components/VisualCourse/visualCourse.css';
// import classes from '*.module.scss';

const VisualCourse = (props: any) => {
  // console.log("VisualCourse props:");
  // console.log(props);
  const getCourseInfoCard = (courseInfoObj: any) => {
    // const { courseStringCode, courseDigitCode, description, courseId } = courseInfoObj;
    return (
      <Course id="course" {...courseInfoObj} />
    );
  };

  const coursesListPrereqs = [
    // courses: props.courses
    {
      courseStringCode: 'CPSC',
      courseDigitCode: '110',
      description: 'Software Construction',
    },
  ];

  const courseCurr = {
    courseStringCode: 'CPSC',
    courseDigitCode: '210',
    description: 'Software Construction',
  };

  const coursesListFuture = [
    {
      courseStringCode: 'CPSC',
      courseDigitCode: '213',
      description: 'Computer Systems',
    },
    {
      courseStringCode: 'CPSC',
      courseDigitCode: '221',
      description: 'Data Structures and Algorithms',
    },
    {
      courseStringCode: 'CPSC',
      courseDigitCode: '310',
      description: 'Intro to Software Engineering',
    },
  ];

  const onClick = () => {
    // let courseStringCode = document.getElementById
  }

  // <Courses {...coursesProps}></Courses>
  return (
    <>
      <Grid container spacing={3} justify="center" alignItems="center">
        {/* <Grid item xs={false} sm={2} /> */}
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} direction="column">
              {coursesListPrereqs.map((courseInfoObj) => (
                <Grid item xs={11}>
                  {getCourseInfoCard(courseInfoObj)}
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} direction="column">
              <Grid item xs={11}>
                {getCourseInfoCard(courseCurr)}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} direction="column">
              {coursesListFuture.map((courseInfoObj) => (
                <Grid item xs={11}>
                  {getCourseInfoCard(courseInfoObj)}
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
  const { courseArray }: any = state;
  return { courseArray };
};

export default connect(mapStateToProps, {})(VisualCourse);

// rename to visualize
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

import Course from '../components/VisualCourse/course';
import { setCenteredCourse } from '../redux/actions/visualCourse';
import '../components/VisualCourse/visualCourse.css';
// import classes from '*.module.scss';

interface Props {
  centeredCourse: any,
  setCenteredCourseAction: Function,
}
const VisualCourse = (props: Props) => {
  const { centeredCourse, setCenteredCourseAction }: Props = props;
  // console.log("VisualCourse props:");
  // console.log(props);

  const getCourseInfoCard = (courseInfoObj: any) => {
    // const { courseStringCode, courseDigitCode, description, courseId } = courseInfoObj;
    return (
      <Course {...courseInfoObj} />
    );
  };

  const coursesListPrereqs = centeredCourse.preReqs;
  const coursesListPrereqsMockData: any = {
    // courses: props.courses
    'CPSC 110': {
      courseId: 'CPSC 110',
      title: 'Racket',
      description: 'Software Construction',
      website: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=110',
    },
  };

  const coursesListFuture = centeredCourse.dep;
  const coursesListDependentsMockData: any = {
    'CPSC 213': {
      courseId: 'CPSC 213',
      title: 'systems',
      description: 'Computer Systems',
      website: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=213',
    },
    'CPSC 221': {
      courseId: 'CPSC 221',
      title: 'algos',
      description: 'Data Structures and Algorithms',
      website: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=221',
    },
    'CPSC 310': {
      courseId: 'CPSC 310',
      title: 'software engineering wtihout teaching you what you\'re actually building',
      description: 'Intro to Software Engineering',
      website: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=310',
    },
  };

  return (
    <>
      <Grid container spacing={3} justify="center" alignItems="center" style={{ margin: '30px' }}>
        {/* <Grid item xs={false} sm={2} /> */}
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} justify="center" direction="column">
              {coursesListPrereqs.map((courseId: string) => (
                <Grid item xs={11}>
                  {getCourseInfoCard(coursesListPrereqsMockData[courseId])}
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} justify="center" direction="column">
              <Grid item justify="center" xs={11}>
                {getCourseInfoCard(centeredCourse)}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Grid container spacing={4} direction="column">
              {coursesListFuture.map((courseId: string) => (
                <Grid item xs={11}>
                  {getCourseInfoCard(coursesListDependentsMockData[courseId])}
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
  const { centeredCourse }: any = state;
  return { centeredCourse };
};

export default connect(mapStateToProps, {
  setCenteredCourseAction: setCenteredCourse,
})(VisualCourse);

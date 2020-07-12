import React from 'react';
import { connect } from 'react-redux';
import Course from './Course';

// REVIEW and delete if not necessary. Unused/WIP Components don't need to be committed.
function Courses(courses: any) {
  console.log('courses: ');
  console.log(courses);
  const courseList = Object.keys(courses).map((course: any) => <Course props={course} />);
  return (
    <>
      {courseList}
    </>
  );
}

const mapState = (state: any) => ({ courses: state.courses }); // was: return { ... }}

export default connect(mapState, null)(Courses);

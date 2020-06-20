import React from 'react';
import Course from './course'
import { connect } from 'react-redux'


function Courses(courses: any) {
  console.log("courses: ");
  console.log(courses);
  const courseList = Object.keys(courses).map((course: any) => <Course props={course}></Course>)
  return (<>
    { courseList }
  </>
  );
};

const mapState = (state: any) => {
  return { courses: state.courses }
}

export default connect(mapState, null)(Courses);

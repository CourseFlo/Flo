import axios from 'axios';
import { Course } from '../../type-interfaces/Course';
import { SET_CENTERED_COURSE, SET_CENTERED_COURSE_FAILURE } from '../constants';

// export const updateCourse = (course: Course) => {
//   return {
//     type: 'DISPLAY_COURSE',
//     courseLetterCode: course.courseLetterCode,
//     courseDigitCode: course.courseDigitCode,
//     courseId: course.courseId,
//     description: course.description,
//   };
// };

// export const changeSelectedCourse = (course: Course) => {
//   return {
//     type: 'CHANGE_SELECTED_COURSE',
//     courseId: course.courseId,
//   };
// };

export const setCenteredCourseSuccess = (course: Course) => ({
  type: SET_CENTERED_COURSE,
  centeredCourse: course,
});

export const setCenteredCourseFailure = (errMsg: String) => ({
  type: SET_CENTERED_COURSE_FAILURE,
  errMsg,
});

export const setCenteredCourse = (courseId: String) => {
  return (dispatch: Function) => {
    axios.get(`http://localhost:9000/courses/${courseId}`)
      .then((response) => {
        const centeredCourse = response.data;
        dispatch(setCenteredCourse(centeredCourse));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(setCenteredCourseFailure(errorMsg));
      });
  };
};

// TODO setVisualizedCourses

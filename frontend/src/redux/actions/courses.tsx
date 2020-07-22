import axios from 'axios';
import { GET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE_FAILURE } from '../constants';
// import { Course } from '../../type-interfaces/Course';

export const getVisualizedCoursesSuccess = (visualizedCourses: any) => ({
  type: GET_VISUALIZED_COURSE,
  visualizedCourses,
});

export const getVisualizedCoursesFailure = (errMsg: string) => ({
  type: GET_VISUALIZED_COURSE_FAILURE,
  errMsg,
});

export const getVisualizedCourses = (courseId: string) => {
  return (dispatch: Function) => {
    axios.get(`/courses/getRelated/${courseId}`)
      .then((response) => {
        console.log(response);
        dispatch(getVisualizedCoursesSuccess(response.data));
      })
      .catch((err) => {
        console.log("Somehow we're getting an error", err);
        // dispatch(getVisualizedCoursesFailure(err.message));
      });
  };
};

// REVIEW if this is necessary
// export const getCourseSuccess = (offerings: any[]) => ({
//   type: GET_COURSE_SUCCESS,
//   offerings,
// });

// export const getCourseFailure = (error: String) => ({
//   type: GET_COURSE_FAILURE,
//   error,
// });

// export const submitGetCourse = (courseId) => {
//   return (dispatch: Function) => {
//     axios.get(`/courses/${courseId}`)
//       .then(response => {
//         const offerings = response.data;
//         dispatch(getCourseSuccess(offerings));
//       }).catch(err => {
//         const errorMsg = err.message;
//         dispatch(getCourseFailure(errorMsg));
//       });
//   };
// };

import axios from 'axios';
import { GET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE_FAILURE, GET_COURSE_SUCCESS, GET_COURSE_FAILURE } from '../constants';
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
        dispatch(getVisualizedCoursesSuccess(response.data));
      })
      .catch((err) => {
        console.log("Error: ", err);
        // dispatch(getVisualizedCoursesFailure(err.message));
      });
  };
};

// REVIEW if this is necessary
export const getCourseSuccess = (offering: any) => ({
  type: GET_COURSE_SUCCESS,
  payload: offering,
});

export const getCourseFailure = (error: String) => ({
  type: GET_COURSE_FAILURE,
  error,
});

export const getCourse = (courseId: String) => {
  return (dispatch: Function) => {
    axios.get(`/courses/${courseId}`)
      .then(response => {
        const offering = response.data;
        dispatch(getCourseSuccess(offering));
      }).catch(err => {
        const errorMsg = err.message;
        dispatch(getCourseFailure(errorMsg));
      });
  };
};

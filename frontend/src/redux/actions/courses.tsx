import axios from 'axios';
import {
  SET_VISUALIZED_COURSE,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAILURE,
  COURSE_LOADING,
  COURSE_LOADED,
  GET_VISUALIZED_COURSE,
  GET_VISUALIZED_COURSE_FAILURE,
} from '../constants';
import { Course, CourseId } from '../../type-interfaces/Course';

const setVisualizedCourse = (courseId: CourseId) => ({
  type: SET_VISUALIZED_COURSE,
  payload: courseId,
});

export const getVisualizedCoursesSuccess = (visualizedCourses: any) => ({
  type: GET_VISUALIZED_COURSE,
  payload: visualizedCourses,
});

export const getVisualizedCoursesFailure = (errMsg: string) => ({ // TODO Remove
  type: GET_VISUALIZED_COURSE_FAILURE,
  errMsg,
});

export const getVisualizedCourses = (courseId: string, layers: number = 1) => {
  return (dispatch: Function) => {
    dispatch(setVisualizedCourse(courseId));
    axios.get(`/courses/getRelated/${courseId}`, {
      layers,
    })
      .then((response) => {
        dispatch(getVisualizedCoursesSuccess(response.data));
      })
      .catch((err) => {
        console.log("Error: ", err);
        // dispatch(getVisualizedCoursesFailure(err.message));
      });
  };
};

export const getCourseSuccess = (offering: any) => ({
  type: GET_COURSE_SUCCESS,
  payload: offering,
});

export const getCourseFailure = (error: String) => ({
  type: GET_COURSE_FAILURE,
  error,
});

// const updateCache = (courseId: CourseId) => {
export const getCourse = (courseId: CourseId) => {
  return (dispatch: Function) => {
    dispatch({ type: COURSE_LOADING });
    axios.get(`/courses/getCourse/${courseId}`)
      .then((response) => {
        const offering: Course = response.data as Course;
        dispatch(getCourseSuccess(offering));
        dispatch({ type: COURSE_LOADED });
      }).catch((err) => {
        const errorMsg = err.message;
        dispatch(getCourseFailure(errorMsg));
        dispatch({ type: COURSE_LOADED });
      });
  };
};


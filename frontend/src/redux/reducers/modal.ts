import {
  OPEN_SIGNUP,
  OPEN_LOGIN,
  OPEN_COURSE,
  CLEAR_MODALS,
  SIGNUP_MS,
  LOGIN_MS,
  COURSE_MS,
} from '../constants';

const initialState = {
  state: null,
  courseId: null,
};

// eslint-disable-next-line import/prefer-default-export
export const modalReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case OPEN_SIGNUP:
      return {
        state: SIGNUP_MS,
        courseId: null,
      };
    case OPEN_LOGIN:
      return {
        state: LOGIN_MS,
        courseId: null,
      };
    case OPEN_COURSE:
      return {
        state: COURSE_MS,
        courseId: action.CourseId,
      };
    case CLEAR_MODALS:
      return {
        state: null,
        courseId: null,
      };
    default:
      return state;
  }
};

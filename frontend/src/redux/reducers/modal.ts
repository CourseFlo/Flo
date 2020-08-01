import {
  OPEN_SIGNUP,
  OPEN_LOGIN,
  OPEN_COURSE,
  CLEAR_MODALS,
  SIGNUP_MS,
  LOGIN_MS,
  COURSE_MS,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAILURE
} from '../constants';

const initialState = {
  state: null,
  courseId: null,
  courseInfo: null,
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const modalReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case OPEN_SIGNUP:
      return {
        ...state,
        state: SIGNUP_MS,
      };
    case OPEN_LOGIN:
      return {
        ...state,
        state: LOGIN_MS,
      };
    case OPEN_COURSE:
      return {
        ...state,
        state: COURSE_MS,
        courseId: action.courseId,
      };
    case GET_COURSE_SUCCESS:
      return {
        ...state,
        courseInfo: action.payload
      };
    case GET_COURSE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case CLEAR_MODALS:
      return initialState;
    default:
      return state;
  }
};

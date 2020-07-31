import {
  OPEN_SIGNUP,
  OPEN_LOGIN,
  OPEN_COURSE,
  CLEAR_MODALS,
} from '../constants';

const initialState = {
  signup: false,
  login: false,
  course: false,
  courseId: null,
};

// eslint-disable-next-line import/prefer-default-export
export const modalReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case OPEN_SIGNUP:
      return {
        signup: true,
        login: false,
        course: false,
        courseId: null,
      };
    case OPEN_LOGIN:
      return {
        signup: false,
        login: true,
        course: false,
        courseId: null,
      };
    case OPEN_COURSE:
      return {
        signup: false,
        login: false,
        course: true,
        courseId: action.courseId,
      };
    case CLEAR_MODALS:
      return {
        signup: false,
        login: false,
        course: false,
        courseId: null,
      };
    default:
      return state;
  }
};

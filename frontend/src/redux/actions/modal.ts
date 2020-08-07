import {
  OPEN_SIGNUP,
  OPEN_LOGIN,
  CLEAR_MODALS,
  OPEN_COURSE,
} from '../constants';

export const openSignupModal = () => ({ type: OPEN_SIGNUP });
export const openLoginModal = () => ({ type: OPEN_LOGIN });
export const clearModals = () => ({ type: CLEAR_MODALS });

export const openCourseModal = (courseId: string) => ({
  type: OPEN_COURSE,
  courseId,
});

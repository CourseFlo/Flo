import {
  OPEN_SIGNUP,
  OPEN_LOGIN,
  CLEAR_MODALS,
} from '../constants';

export const openSignupModal = () => ({ type: OPEN_SIGNUP });
export const openLoginModal = () => ({ type: OPEN_LOGIN });
export const clearModals = () => ({ type: CLEAR_MODALS });

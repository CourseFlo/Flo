import { GET_ERRORS, CLEAR_ERRORS } from '../constants';

// return errors
export const returnErrors = (msg: any, status: number | undefined, id: any = null) => ({ // TODO: check param types
  type: GET_ERRORS,
  payload: { msg, status, id },
});

// clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

import * as types from '../constants/ActionTypes';

export const signIn = login => ({ type: types.SIGN_IN, login });
export const signOut = login => ({ type: types.SIGN_OUT, login });

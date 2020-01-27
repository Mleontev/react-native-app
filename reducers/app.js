import { SIGN_IN } from '../constants/ActionTypes';

const initialState = {
  login: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      let s = {
        ...state,
        login: action.login,
      };
      console.log(action.login);
      return s;

    default:
      return state;
  }
};

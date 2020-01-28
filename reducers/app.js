import { SIGN_IN } from '../constants/ActionTypes';

const initialState = {
  login: '',
  lists: [
    {
      id: 1,
      title: 'пес',
      description: 'черный',
    },
    {
      id: 2,
      title: 'кот',
      description: 'зеленый',
    },
    {
      id: 3,
      title: 'утка',
      description: 'белая',
    },
  ],
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

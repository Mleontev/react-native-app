import { SIGN_IN, SIGN_OUT } from '../constants/ActionTypes';

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
      description: 'существенных недостатков, таких как экзогенная норма сбережения и нереалистичная оценка ставки процента в развивающихся странах. Но, несмотря на эти недостатки, именно её считают отправной точкой для всех современных моделей экономического роста, которым она дала необходимую математическую базу для анализа темпов изменения капитала. Модель оказала влияние на всю макроэкономическую теорию.',
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
      return {
        ...state,
        login: action.login,
      };
    case SIGN_OUT:
      return {
        ...state,
        login: '',
      };

    default:
      return state;
  }
};

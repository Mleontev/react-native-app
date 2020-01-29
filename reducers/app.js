import { SIGN_IN, SIGN_OUT } from '../constants/ActionTypes';

const initialState = {
  login: '',
  lists: [
    {
      id: 1,
      title: 'Мифология',
      description: 'персонаж греческой мифологии, центральная фигура аттического мифологического цикла. Трезенская царевна Эфра из рода Пелопидов родила Тесея сразу от двух отцов — земного (царя Афин Эгея) и божественного (морского бога Посейдона). С детства этот герой отличался храбростью и силой. Возмужав, Тесей проделал путь до Афин, в пути победив множество чудовищ и злодеев (в том числе разбойника Прокруста). ',
    },
    {
      id: 2,
      title: 'Математика',
      description: 'существенных недостатков, таких как экзогенная норма сбережения и нереалистичная оценка ставки процента в развивающихся странах. Но, несмотря на эти недостатки, именно её считают отправной точкой для всех современных моделей экономического роста, которым она дала необходимую математическую базу для анализа темпов изменения капитала. Модель оказала влияние на всю макроэкономическую теорию.',
    },
    {
      id: 3,
      title: 'пррррррррррррррррррррррррррррррррррррррррррр',
      description: 'персонаж греческой мифологии, центральная фигура аттического мифологического цикла. Трезенская царевна Эфра из рода Пелопидов родила Тесея сразу от двух отцов — земного (царя Афин Эгея) и божественного (морского бога Посейдона). С детства этот герой отличался храбростью и силой. Возмужав, Тесей проделал путь до Афин, в пути победив множество чудовищ и злодеев (в том числе разбойника Прокруста). ',
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

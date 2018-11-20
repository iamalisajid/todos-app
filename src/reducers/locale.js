import * as types from '../viewes/App/actionTypes';
import initialState from './initialState';

const locale = (state = initialState.locale, action) => {
  switch (action.type) {
    case types.SET_LOCALE:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default locale;

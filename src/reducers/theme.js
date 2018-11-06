import * as types from '../viewes/App/actionTypes';
import initialState from './initialState';

const theme = (state = initialState.theme, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME:
      return {
        ...state,
        lightMode: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default theme;

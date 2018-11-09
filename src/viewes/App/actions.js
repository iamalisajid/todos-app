import * as types from './actionTypes';

export const toggleTheme = (mode) => ({ type: types.TOGGLE_THEME, payload: mode });
export const logoutUser = () => ({ type: types.LOGOUT_USER });

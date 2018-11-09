import { call, put, takeLatest, fork } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import * as types from './actionTypes';
import API_ROUTES from '../../utils/endpoints';
import { REQUEST_TYPE } from '../../utils/constants';

export const loginUser = (user) => ({ type: types.LOGIN_REQUEST, payload: user });

function* authUser(action) {
  const user = action.payload;
  const { error, data } = yield call(apiCaller, API_ROUTES.LOGIN, REQUEST_TYPE.GET, null, user);
  if (error) {
    yield put({ type: types.LOGIN_FAILURE, payload: error });
  } else if (data.length) yield put({ type: types.LOGIN_SUCCESS, payload: data });
  else yield put({ type: types.LOGIN_FAILURE, payload: 'Invalid Username/Password' });
}

function* watchAuthUser() {
  yield takeLatest(types.LOGIN_REQUEST, authUser);
}

export const authSagas = [fork(watchAuthUser)];

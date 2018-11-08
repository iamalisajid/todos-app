import { call, put, takeLatest, fork } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import API_ROUTES from '../../utils/endpoints';
import { REQUEST_TYPE } from '../../utils/constants';
import * as types from './actionTypes';

export const fetchContacts = () => ({ type: types.FETCH_CONTACT_REQUEST });
export const createContact = (contact) => ({ type: types.CREATE_CONTACT_REQUEST, payload: contact });
export const loadContactFields = (contact) => ({ type: types.LOAD_CONTACT_FIELDS, payload: contact });
export const updateContact = (contact) => ({ type: types.UPDATE_CONTACT_SUCCESS, payload: contact });
export const deleteContact = (id) => ({ type: types.DELETE_CONTACT_SUCCESS, payload: id });

function* loadContacts() {
  const { error, data } = yield call(apiCaller, API_ROUTES.CONTACTS, REQUEST_TYPE.GET);
  if (error) {
    yield put({ type: types.FETCH_CONTACT_FAILURE, payload: error });
  }
  yield put({ type: types.FETCH_CONTACT_SUCCESS, payload: data });
}
function* addContacts(action) {
  const { error, data } = yield call(apiCaller, API_ROUTES.CONTACTS, REQUEST_TYPE.POST, action.payload);
  if (error) {
    yield put({ type: types.CREATE_CONTACT_FAILURE, payload: error });
  }
  yield put({ type: types.CREATE_CONTACT_SUCCESS, payload: data });
}
function* updateContacts(action) {
  const contact = action.payload;
  const { error, data } = yield call(apiCaller, `${API_ROUTES.CONTACTS}/${contact.id}`, REQUEST_TYPE.PUT, contact);
  if (error) {
    yield put({ type: types.UPDATE_CONTACT_FAILURE, payload: error });
  }
  yield put({ type: types.UPDATE_CONTACT_SUCCESS, payload: data });
}
function* deleteContacts(action) {
  const id = action.payload;
  const { error } = yield call(apiCaller, `${API_ROUTES.CONTACTS}/${id}`, REQUEST_TYPE.DELETE);
  if (error) {
    yield put({ type: types.DELETE_CONTACT_REQUEST, payload: error });
  }
  yield put({ type: types.DELETE_CONTACT_SUCCESS, payload: id });
}

function* watchLoadContacts() {
  yield takeLatest(types.FETCH_CONTACT_REQUEST, loadContacts);
}
function* watchAddContacts() {
  yield takeLatest(types.CREATE_CONTACT_REQUEST, addContacts);
}
function* watchUpdateContacts() {
  yield takeLatest(types.UPDATE_CONTACT_REQUEST, updateContacts);
}
function* watchDeleteContacts() {
  yield takeLatest(types.DELETE_CONTACT_REQUEST, deleteContacts);
}

export const contactSagas = [
  fork(watchLoadContacts),
  fork(watchAddContacts),
  fork(watchUpdateContacts),
  fork(watchDeleteContacts),
];

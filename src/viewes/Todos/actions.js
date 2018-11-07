import { call, put, takeLatest, fork } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import API_ROUTES from '../../utils/endpoints';
import { REQUEST_TYPE } from '../../utils/constants';
import * as types from './actionTypes';

export const updateTodoField = (todoForm) => ({ type: types.TODO_INPUT_UPDATE, payload: todoForm });
export const updateTodosFilter = (filter) => ({ type: types.TODOS_FILTER_UPDATE, payload: filter });
export const fetchTodos = () => ({ type: types.FETCH_TODO_REQUEST });
export const createTodo = (todo) => ({ type: types.CREATE_TODO_REQUEST, payload: todo });
export const toggleTodo = (todo) => ({ type: types.TOGGLE_TODO_REQUEST, payload: todo });
export const deleteTodo = (id) => ({ type: types.DELETE_TODO_REQUEST, payload: id });

function* loadTodos() {
  const { error, data } = yield call(apiCaller, API_ROUTES.TODOS, REQUEST_TYPE.GET);
  if (error) {
    yield put({ type: types.FETCH_TODO_FAILURE, payload: error });
  }
  yield put({ type: types.FETCH_TODO_SUCCESS, payload: data });
}
function* addTodos(action) {
  const todo = action.payload;
  const { error, data } = yield call(apiCaller, API_ROUTES.TODOS, REQUEST_TYPE.POST, todo);
  if (error) {
    yield put({ type: types.CREATE_TODO_FAILURE, payload: error });
  }
  yield put({ type: types.CREATE_TODO_SUCCESS, payload: data });
}
function* toggleTodos(action) {
  const toggled = action.payload;
  const { error, data } = yield call(apiCaller, `${API_ROUTES.TODOS}/${toggled.id}`, REQUEST_TYPE.PUT, toggled);
  if (error) {
    yield put({ type: types.TOGGLE_TODO_FAILURE, payload: error });
  }
  yield put({ type: types.TOGGLE_TODO_SUCCESS, payload: data });
}
function* deleteTodos(action) {
  const id = action.payload;
  const { error } = yield call(apiCaller, `${API_ROUTES.TODOS}/${id}`, REQUEST_TYPE.DELETE);
  if (error) {
    yield put({ type: types.DELETE_TODO_FAILURE, payload: error });
  }
  yield put({ type: types.DELETE_TODO_SUCCESS, payload: id });
}

function* watchLoadTodos() {
  yield takeLatest(types.FETCH_TODO_REQUEST, loadTodos);
}
function* watchAddTodos() {
  yield takeLatest(types.CREATE_TODO_REQUEST, addTodos);
}
function* watchToggleTodos() {
  yield takeLatest(types.TOGGLE_TODO_REQUEST, toggleTodos);
}
function* watchDeleteTodos() {
  yield takeLatest(types.DELETE_TODO_REQUEST, deleteTodos);
}

export const todoSagas = [fork(watchLoadTodos), fork(watchAddTodos), fork(watchToggleTodos), fork(watchDeleteTodos)];

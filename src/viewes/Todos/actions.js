import apiCaller from '../../utils/apiCaller';
import {API_ROUTES} from '../../utils/endpoints';
import {REQUEST_TYPE} from '../../utils/constants';
import * as types from './actionTypes';

export const updateTodoField = currentTodo => ({type: types.TODO_INPUT_UPDATE, payload: currentTodo});
export const updateTodosFilter = filter => ({type: types.TODOS_FILTER_UPDATE, payload: filter});

const fetchTodosRequest = () => ({type: types.FETCH_TODOS_REQUEST});
const fetchTodosSuccess = todo => ({type: types.FETCH_TODOS_SUCCESS, payload: todo});
const fetchTodosFailure = msg => ({type: types.FETCH_TODOS_FAILURE, payload: msg});

const createTodoRequest = () => ({type: types.CREATE_TODO_REQUEST});
const createTodoSuccess = todo => ({type: types.CREATE_TODO_SUCCESS, payload: todo});
const createTodoFailure = msg => ({type: types.CREATE_TODO_FAILURE, payload: msg});

const toggleTodoRequest = () => ({type: types.TOGGLE_TODO_REQUEST});
const toggleTodoSuccess = todo => ({type: types.TOGGLE_TODO_SUCCESS, payload: todo});
const toggleTodoFailure = msg => ({type: types.TOGGLE_TODO_FAILURE, payload: msg});

const deleteTodoRequest = () => ({type: types.DELETE_TODO_REQUEST});
const deleteTodoSuccess = id => ({type: types.DELETE_TODO_SUCCESS, payload: id});
const deleteTodoFailure = msg => ({type: types.DELETE_TODO_FAILURE, payload: msg});

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    apiCaller(API_ROUTES.TODOS, REQUEST_TYPE.GET)
      .then(response => dispatch(fetchTodosSuccess(response.data)))
      .catch(error => dispatch(fetchTodosFailure(error)))
  }
};

export const createTodo = todo => {
  return (dispatch) => {
    dispatch(createTodoRequest());
    apiCaller(API_ROUTES.TODOS, REQUEST_TYPE.POST, todo)
      .then(response => dispatch(createTodoSuccess(response.data)))
      .catch(error => dispatch(createTodoFailure(error)))
  }
};

export const toggleTodo = toggled => {
  return (dispatch) => {
    dispatch(toggleTodoRequest());
    apiCaller(`${API_ROUTES.TODOS}/${toggled.id}`, REQUEST_TYPE.PUT, toggled)
      .then(response => dispatch(toggleTodoSuccess(response.data)))
      .catch(error => dispatch(toggleTodoFailure(error)))
  }
};

export const deleteTodo = id => {
  return (dispatch) => {
    dispatch(deleteTodoRequest());
    apiCaller(`${API_ROUTES.TODOS}/${id}`, REQUEST_TYPE.DELETE)
      .then(response => dispatch(deleteTodoSuccess(id)))
      .catch(error => dispatch(deleteTodoFailure(error)))
  }
};

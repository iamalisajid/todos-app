import * as types from '../viewes/Todos/actionTypes';
import initialState from './initialState';

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case types.TODO_INPUT_UPDATE:
      return {
        ...state,
        currentTodo: action.payload
      };
    case types.TODOS_FILTER_UPDATE:
      return {
        ...state,
        filter: action.payload
      };
    case  types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload
      };
    case  types.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.concat(action.payload),
        currentTodo: initialState.todos.currentTodo
      };
    case  types.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo),
      };
    case  types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case types.FETCH_TODOS_REQUEST:
    case types.CREATE_TODO_REQUEST:
    case types.DELETE_TODO_REQUEST:
    case types.TOGGLE_TODO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_TODOS_FAILURE:
    case types.CREATE_TODO_FAILURE:
    case types.DELETE_TODO_FAILURE:
    case types.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default todos;

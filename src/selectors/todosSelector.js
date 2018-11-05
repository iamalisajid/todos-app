import { createSelector } from 'reselect';
import { FILTERS } from '../utils/constants';

const visibleTodos = (todos, filter = FILTERS.SHOW_ALL) => {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return todos;
    case FILTERS.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.isComplete);
    case FILTERS.SHOW_COMPLETED:
      return todos.filter((todo) => todo.isComplete);
    default:
      return todos;
  }
};

export const selectTodos = (state) => state.todos;
export const selectTodosForm = (state) => state.todoForm;
export const selectFilter = (state) => state.filter;
export const selectTodosLoadingState = (state) => state.loading;
export const selectTodosErrors = (state) => state.error;

export const selectFilteredTodos = createSelector(selectTodos, selectFilter, visibleTodos);

import { FILTERS } from '../utils/constants';
import { createSelector } from 'reselect';

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
export const selectFilter = (state) => state.filter;

export const getVisibleTodos = createSelector(
  selectTodos, selectFilter, visibleTodos
);

import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoList from '../viewes/Todos/TodoList/index';
import TodoFilter from '../viewes/Todos/TodoFilter/index';

export const todos = [
  { text: 'Sample Todo', isComplete: false, id: 3 },
  { text: 'New Todo', isComplete: false, id: 2 },
  { text: 'Done Todo', isComplete: true, id: 1 },
];

export const todoListActions = {
  toggleTodo: action('toggleTodo'),
  handleDelete: action('handleDelete'),
  handleFilter: action('handleFilter'),
};

export const filterActions = {
  handleFilter: action('handleFilter'),
};
storiesOf('TodoFilter', module)
  .add('default', () => (
    <Fragment>
      <TodoList todos={todos} {...todoListActions} />
      <TodoFilter {...filterActions} />
    </Fragment>
  ))
  .add('active', () => (
    <Fragment>
      <TodoList todos={todos.slice(0, 1)} {...todoListActions} />
      <TodoFilter {...filterActions} />
    </Fragment>
  ))
  .add('completed', () => (
    <Fragment>
      <TodoList todos={todos.splice(-1, 1)} {...todoListActions} />
      <TodoFilter {...filterActions} />
    </Fragment>
  ));

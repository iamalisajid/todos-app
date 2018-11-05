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

export const actions = {
  toggleTodo: action('toggleTodo'),
  handleDelete: action('handleDelete'),
};

storiesOf('TodoFilter', module)
  .add('default', () => (
    <Fragment>
      <TodoList todos={todos} {...actions} />
      <TodoFilter />
    </Fragment>
  ))
  .add('active', () => (
    <Fragment>
      <TodoList todos={todos.slice(0, 1)} {...actions} />
      <TodoFilter />
    </Fragment>
  ))
  .add('completed', () => (
    <Fragment>
      <TodoList todos={todos.splice(-1, 1)} {...actions} />
      <TodoFilter />
    </Fragment>
  ));

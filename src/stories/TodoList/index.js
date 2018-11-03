import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoList from '../../viewes/Todos/TodoList';

export const todos = [
  { text: 'Sample Todo', isComplete: false, id: 3 },
  { text: 'New Todo', isComplete: false, id: 2 },
  { text: 'Done Todo', isComplete: true, id: 1 },
];

export const actions = {
  toggleTodo: action('toggleTodo'),
  handleDelete: action('handleDelete'),
};

storiesOf('TodoList', module)
  .add('default', () => <TodoList todos={todos} {...actions} />)
  .add('empty', () => <TodoList todos={[]} {...actions} />);

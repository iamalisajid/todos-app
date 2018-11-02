import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoItem from '../viewes/Todos/TodoItem';

export const todo = {
  text: 'Sample Todo',
  isComplete: false,
  id: 3
};

export const actions = {
  toggleTodo: action('toggleTodo'),
  handleDelete: action('handleDelete')
};

storiesOf('TodoItem', module)
  .add('default', () => <TodoItem {...todo} {...actions}/>)
  .add('completed', () => <TodoItem id={todo.id} text={todo.text} isComplete={!todo.isComplete} {...actions}/>);

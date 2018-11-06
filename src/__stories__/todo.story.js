import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import TodoItem from '../viewes/Todos/TodoItem/index';

export const todo = {
  text: 'Sample Todo',
  isComplete: false,
  id: 3,
};

export const actions = {
  toggleTodo: action('toggleTodo'),
  handleDelete: action('handleDelete'),
};

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .add('default', () => <TodoItem {...todo} {...actions} />)
  .add('completed', () => (
    <TodoItem id={todo.id} text={text('Label', todo.text)} isComplete={!todo.isComplete} {...actions} />
  ))
  .add('with knob', () => (
    <TodoItem
      id={todo.id}
      text={text('Label', todo.text)}
      isComplete={boolean('Active', todo.isComplete)}
      {...actions}
    />
  ));

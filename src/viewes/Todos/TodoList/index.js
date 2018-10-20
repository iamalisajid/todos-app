import React from 'react';
import TodoItem from '../TodoItem';
import {object, func} from 'prop-types';

const TodoList = ({todos, onSelection, onDeletion}) => (
  <div className="container">
    <h2>Todos</h2>

    <ul className="list-group">
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          id={todo.id}
          onSelection={onSelection}
          text={todo.text}
          onDeletion={onDeletion}/>)
      }
    </ul>
  </div>
);

TodoList.propType = {
  todo: object.isRequired,
  onSelection: func.isRequired,
  onDeletion: func.onDeletion
}
export default TodoList;



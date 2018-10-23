import React from 'react';
import {object, func} from 'prop-types';
import TodoItem from '../TodoItem';

const TodoList = ({todos, toggleTodo, handleDelete}) => {
  return (
    <div className="container">
      <h6>Todos</h6>
      <ul className="list-group">
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isComplete={todo.isComplete}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}/>)
        }
      </ul>
    </div>
  );
};

TodoList.propType = {
  todo: object.isRequired,
  toggleTodo: func.isRequired,
  handleDelete: func.onDeletion
};

export default TodoList;

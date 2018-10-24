import React from 'react';
import {object, func} from 'prop-types';
import TodoItem from '../TodoItem';
import {TODOS_DONE} from '../../../utils/copies';

const TodoList = ({todos, toggleTodo, handleDelete}) => {
  if (todos.length === 0)
    return (
      <div className="text-center">
        {TODOS_DONE}
      </div>
    );
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

import React from 'react';
import { object, func } from 'prop-types';
import TodoItem from '../TodoItem';
import { TODOS_DONE } from '../../../utils/copies';
import { TextCenter, ListGroup, Container } from '../../../globalStyles';

const TodoList = ({ todos, toggleTodo, handleDelete }) => {
  if (todos.length === 0)
    return (
      <TextCenter>
        {TODOS_DONE}
      </TextCenter>
    );
  return (
    <Container>
      <h4>Todos</h4>
      <ListGroup>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isComplete={todo.isComplete}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}/>)
        }
      </ListGroup>
    </Container>
  );
};

TodoList.propType = {
  todo: object.isRequired,
  toggleTodo: func.isRequired,
  handleDelete: func.onDeletion
};

export default TodoList;

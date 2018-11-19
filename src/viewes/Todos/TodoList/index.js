import React from 'react';
import { array, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import TodoItem from '../TodoItem';
import { TODOS_DONE } from '../../../utils/copies';
import { Center, ListGroup, Container } from '../../../globalStyles';
import { VIEWS } from '../../../utils/constants';

const TodoList = ({ todos, toggleTodo, handleDelete }) => {
  if (todos.length === 0)
    return (
      <Center>
        <FormattedMessage id="todo.done" defaultMessage={TODOS_DONE} />
      </Center>
    );
  return (
    <Container>
      <h4>
        <FormattedMessage id="logout" defaultMessage={VIEWS.TODOS} />
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isComplete={todo.isComplete}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

TodoList.propTypes = {
  todos: array.isRequired,
  toggleTodo: func.isRequired,
  handleDelete: func.isRequired,
};

export default TodoList;

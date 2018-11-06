import React from 'react';
import { string, func } from 'prop-types';
import { BTN_ACTIONS } from '../../../utils/constants';
import { Button, Container } from '../../../globalStyles';
import { TodoFormInput, StyledTodoForm, TodoFormSubmit } from '../styles';

const TodoForm = ({ todoForm, handleInput, handleSubmit }) => (
  <Container>
    <form onSubmit={handleSubmit}>
      <StyledTodoForm>
        <TodoFormInput type="text" onChange={handleInput} value={todoForm} placeholder="Add todo" />
        <TodoFormSubmit>
          <Button success type="submit">
            {BTN_ACTIONS.ADD}
          </Button>
        </TodoFormSubmit>
      </StyledTodoForm>
    </form>
  </Container>
);

TodoForm.propTypes = {
  todoForm: string.isRequired,
  handleInput: func.isRequired,
  handleSubmit: func.isRequired,
};

export default TodoForm;

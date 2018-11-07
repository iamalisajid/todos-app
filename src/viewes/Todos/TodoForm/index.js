import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { BTN_ACTIONS } from '../../../utils/constants';
import { Button, Container } from '../../../globalStyles';
import { StyledInput, StyledTodoForm, TodoFormSubmit } from '../styles';

const TodoForm = ({ handleSubmit }) => (
  <Container>
    <form onSubmit={handleSubmit}>
      <StyledTodoForm>
        <Field name="todo" component={StyledInput} />
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
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'addTodo',
})(TodoForm);

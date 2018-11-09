import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import renderField from '../../../shared/field';
import { required } from '../../../utils/validations';
import { BTN_ACTIONS, VIEWS } from '../../../utils/constants';
import { Button, Container } from '../../../globalStyles';
import { StyledTodoForm, TodoFormSubmit } from '../styles';

const TodoForm = ({ handleSubmit }) => (
  <Container>
    <form onSubmit={handleSubmit}>
      <StyledTodoForm>
        <Field
          name="todo"
          placeholder="Add Todo"
          forComponent={VIEWS.TODOS}
          component={renderField}
          validate={[required]}
        />
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

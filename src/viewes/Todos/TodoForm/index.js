import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import renderField from '../../../shared/field';
import { required } from '../../../utils/validations';
import { BTN_ACTIONS, FORM, VIEWS } from '../../../utils/constants';
import { Button, Container } from '../../../globalStyles';
import { StyledTodoForm, TodoFormSubmit } from '../styles';

const TodoForm = ({ handleSubmit }) => (
  <Container>
    <StyledTodoForm onSubmit={handleSubmit}>
      <Field
        name="todo"
        placeholder="Add Todo"
        forComponent={VIEWS.TODOS}
        component={renderField}
        validate={[required]}
      />
      <TodoFormSubmit>
        <Button variant="success" type="submit">
          {BTN_ACTIONS.ADD}
        </Button>
      </TodoFormSubmit>
    </StyledTodoForm>
  </Container>
);

TodoForm.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: FORM.TODO_ADD,
})(TodoForm);

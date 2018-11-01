import React from 'react';
import { string, number, bool, func } from 'prop-types';
import { BTN_ACTIONS } from '../../../utils/constants';
import { ListGroupItem, FormGroup, Button } from '../../../globalStyles';

const TodoItem = ({ text, isComplete, toggleTodo, handleDelete, id }) => {
  return (
    <ListGroupItem>
      <FormGroup>
        <input
          type="checkbox"
          onChange={toggleTodo}
          value={id}
          checked={isComplete}
        />
        {text}
        <Button
          danger
          right
          value={id}
          onClick={handleDelete}>
          {BTN_ACTIONS.DELETE}
        </Button>
      </FormGroup>
    </ListGroupItem>
  );
};

TodoItem.propTypes = {
  id: number.isRequired,
  text: string.isRequired,
  isComplete: bool.isRequired,
  toggleTodo: func.isRequired,
  handleDelete: func.isRequired
};

export default TodoItem;

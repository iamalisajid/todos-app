import React from 'react';
import { string, number, bool, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { BTN_ACTIONS } from '../../../utils/constants';
import { ListGroupItem, FormGroup, Button } from '../../../globalStyles';
import { TodoRow } from '../styles';

const TodoItem = ({ text, isComplete, toggleTodo, handleDelete, id }) => (
  <ListGroupItem>
    <FormGroup>
      <TodoRow>
        <input type="checkbox" onChange={toggleTodo} value={id} checked={isComplete} />
        {text}
        <Button variant="danger" right value={id} onClick={handleDelete}>
          <FormattedMessage id="delete" defaultMessage={BTN_ACTIONS.DELETE} />
        </Button>
      </TodoRow>
    </FormGroup>
  </ListGroupItem>
);

TodoItem.propTypes = {
  id: number.isRequired,
  text: string.isRequired,
  isComplete: bool.isRequired,
  toggleTodo: func.isRequired,
  handleDelete: func.isRequired,
};

export default TodoItem;

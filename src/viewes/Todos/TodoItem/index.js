import React from 'react'
import {string, number, bool, func} from 'prop-types'
import {BTN_ACTIONS} from '../../../utils/constants'

const TodoItem = ({text, isComplete, toggleTodo, handleDelete, id}) => {
  return (
    <li className="list-group-item">
      <div className="form-group">
        <input
          type="checkbox"
          onChange={toggleTodo}
          value={id}
          checked={isComplete}
        />
        {text}
        <button
          className="btn btn-danger float-right"
          value={id}
          onClick={handleDelete}>
          {BTN_ACTIONS.DELETE}
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: number.isRequired,
  text: string.isRequired,
  isComplete: bool.isRequired,
  toggleTodo: func.isRequired,
  handleDelete: func.isRequired
}

export default TodoItem;

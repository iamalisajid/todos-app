import React from 'react'
import {string, func} from 'prop-types';
import {BTN_ACTIONS} from '../../../utils/constants';

const TodoForm = ({currentTodo, handleInput, handleSubmit}) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            onChange={handleInput}
            className="form-control add-todo"
            value={currentTodo}
            placeholder="Add todo"/>
          <div className="input-group-append">
            <input
              type="submit"
              className="btn btn-success"
              value={BTN_ACTIONS.ADD}/>
          </div>
        </div>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  currentTodo: string.isRequired,
  handleInput: func.isRequired,
  handleSubmit: func.isRequired
};

export default TodoForm;

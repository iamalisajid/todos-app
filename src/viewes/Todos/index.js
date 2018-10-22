import React, {Component} from 'react';
import TodoList from './TodoList';
import {TODOS_LIST} from "../../utils/constants";

class Todos extends Component {
  state = {
    todos: TODOS_LIST
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          onSelection={onSelection}
          onDeletion={onDeletion}
        />
      </div>
    );
  }
}

const onSelection = (id) => {
  console.info(id);
}

const onDeletion = (id) => {
  console.log('Deletion');
  console.info(id);
}
export default Todos;

import React, {Component} from 'react';
import TodoList from './TodoList';
import {TODOS_LIST} from "../../utils/constants";

class Todos extends Component {
  state = {
    todos: TODOS_LIST
  };

  onSelection = (id) => {
    console.info(id)
  }

  onDeletion = (id) => {
    console.log('Deletion');
    console.info(id);
  }

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          onSelection={this.onSelection}
          onDeletion={this.onDeletion}
        />
      </div>
    );
  }
}

export default Todos;

import React, {Component} from 'react';
import Loader from 'react-loader-spinner'
import TodoList from './TodoList';
import ApiCaller from '../../utils/apiCaller'
import changeCaseObject from "change-case-object";

class Todos extends Component {
  state = {
    todos: [],
    loading: true
  };

  componentDidMount() {
    ApiCaller.fetchTodos().then(json =>
      this.setState({
        todos: changeCaseObject.camelCase(json),
        loading: false
      }));
  }

  render() {
    if (this.state.loading)
      return (
        <div className="Loader">
          <div className="Loader-center">
            <Loader
              type="Triangle"
              color="#00BFFF"
              height="100"
              width="100"
            />
          </div>
        </div>
      );

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

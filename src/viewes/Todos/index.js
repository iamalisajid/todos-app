import React, {Component, Fragment} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import AppLoader from '../../shared/loader';
import {get, post, put, _delete} from '../../utils/apiCaller';
import {API_ROUTES} from '../../utils/endpoints';

class Todos extends Component {
  state = {
    todos: [],
    currentTodo: '',
    loading: true,
    errors: ''
  };

  componentDidMount() {
    get(API_ROUTES.TODOS).then(todos =>
      this.setState({
        todos,
        loading: false
      }));
  }

  handleInput = event => {
    let currentTodo = event.target.value;
    this.setState({
      currentTodo
    });
  };

  handleSubmit = event => {
    const {todos, currentTodo} = this.state;

    event.preventDefault();
    let todo = {
      text: currentTodo,
      isComplete: false
    };

    post(API_ROUTES.TODOS, todo).then(res =>
      this.setState({
        todos: todos.concat(res),
        currentTodo: ''
      })
    );
  };

  toggleTodo = event => {
    const {todos} = this.state;

    const id = parseInt(event.target.value);
    const todo = this.state.todos.find(todo => todo.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete};

    put(`${API_ROUTES.TODOS}/${toggled.id}`, toggled).then(res => {
      this.setState({
        todos: todos.map(todo => todo.id === res.id ? res : todo),
        currentTodo: ''
      })
    })
  }

  handleDelete = event => {
    const {todos} = this.state;

    event.stopPropagation();
    const id = parseInt(event.target.value);

       _delete(`${API_ROUTES.TODOS}/${id}`).then(res => {
          this.setState({
            todos: todos.filter(todo => todo.id !== id)
          })
        })
  };


  render() {
    const {loading, todos, currentTodo, errors} = this.state;

    if (loading)
      return <AppLoader/>;

    return (
      <Fragment>
        <p>{errors}</p>
        <TodoForm
          currentTodo={currentTodo}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todos={todos}
          toggleTodo={this.toggleTodo}
          handleDelete={this.handleDelete}
        />
      </Fragment>
    );
  }
}

export default Todos;

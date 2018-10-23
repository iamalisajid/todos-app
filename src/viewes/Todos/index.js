import React, {Component} from 'react';
import TodoList from './TodoList';
import {createTodo, deleteTodo, fetchTodos, updateTodo} from '../../utils/apiCaller';
import AppLoader from '../../shared/loader';
import TodoForm from "./TodoForm";

class Todos extends Component {
  state = {
    todos: [],
    currentTodo: '',
    loading: true,
    errors: ''
  };

  componentDidMount() {
    fetchTodos().then(todos => this.setState({
      todos,
      loading: false
    }))
  }

  handleInput = (event) => {
    let currentTodo = event.target.value;
    this.setState({
      currentTodo
    });
  };

  handleSubmit = (event) => {
    const {todos, currentTodo} = this.state;
    event.preventDefault();
    let todo = {
      text: currentTodo,
      isComplete: false
    };

    createTodo(todo).then(res => {
      this.setState({
        todos: todos.concat(res),
        currentTodo: ''
      });
    })
  };

  toggleTodo = evt => {
    const {todos} = this.state;

    const id = parseInt(evt.target.value);
    const todo = this.state.todos.find(todo => todo.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete}

    updateTodo(toggled).then(res => {
      this.setState({
        todos: todos.map(todo => todo.id === res.id ? res : todo),
        currentTodo: ''
      })
    })
  }

  handleDelete = evt => {
    const {todos} = this.state;

    evt.stopPropagation();
    const id = parseInt(evt.target.value);

    deleteTodo(id).then(res => {
      this.setState({
        todos: todos.filter(todo => todo.id !== id)
      })
    })
  };


  render() {
    const {loading, todos, currentTodo} = this.state;

    if (loading)
      return <AppLoader/>;

    return (
      <div>
        <p>{this.state.errors}</p>
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
      </div>
    );
  }
}

export default Todos;

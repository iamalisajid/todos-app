import React, {Component, Fragment} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from "./TodoFilter";
import AppLoader from '../../shared/loader';
import ApiCaller from '../../utils/apiCaller';
import {API_ROUTES} from '../../utils/endpoints';
import {REQUEST_TYPE, FILTERS} from '../../utils/constants';

class Todos extends Component {
  state = {
    todos: [],
    currentTodo: '',
    loading: true,
    errors: '',
    filter: FILTERS.SHOW_ALL
  };

  componentDidMount() {
    ApiCaller(API_ROUTES.TODOS, REQUEST_TYPE.GET)
      .then(response => this.setState({
        todos: response.data,
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
    event.preventDefault();

    this.setState({loading: true});
    const {todos, currentTodo} = this.state;
    let todo = {
      text: currentTodo,
      isComplete: false
    };

    ApiCaller(API_ROUTES.TODOS, REQUEST_TYPE.POST, todo)
      .then(response => this.setState({
        todos: todos.concat(response.data),
        currentTodo: '',
        loading: false
      }));
  };

  toggleTodo = event => {
    this.setState({loading: true});
    const {todos} = this.state;

    const id = parseInt(event.target.value);
    const todo = this.state.todos.find(todo => todo.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete};

    ApiCaller(`${API_ROUTES.TODOS}/${toggled.id}`, REQUEST_TYPE.PUT, toggled)
      .then(response => {
        this.setState({
          todos: todos.map(todo => todo.id === response.data.id ? response.data : todo),
          currentTodo: '',
          loading: false
        })
      });
  };

  handleDelete = event => {
    event.stopPropagation();

    this.setState({loading: true});
    const {todos} = this.state;
    const id = parseInt(event.target.value);

    ApiCaller(`${API_ROUTES.TODOS}/${id}`, REQUEST_TYPE.DELETE)
      .then(response => {
        this.setState({
          todos: todos.filter(todo => todo.id !== id),
          currentTodo: '',
          loading: false
        })
      });
  };

  handleFilter = event => {
    const filter = event.target.value;
    this.setState({
      filter
    });
  }

  visibleTodos = () => {
    const {todos, filter} = this.state;

    switch (filter) {
      case FILTERS.SHOW_ALL:
        return todos;
      case FILTERS.SHOW_ACTIVE:
        return todos.filter(todo => !todo.isComplete);
      case FILTERS.SHOW_COMPLETED:
        return todos.filter(todo => todo.isComplete);
      default:
        return todos
    }
  };

  render() {
    const {loading, currentTodo, errors} = this.state;

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
          todos={this.visibleTodos()}
          toggleTodo={this.toggleTodo}
          handleDelete={this.handleDelete}
        />
        <TodoFilter
          handleFilter={this.handleFilter}
        />
      </Fragment>
    );
  }
}

export default Todos;

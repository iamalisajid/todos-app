import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from "./TodoFilter";
import AppLoader from '../../shared/loader';
import {FILTERS} from '../../utils/constants';
import * as todoActions from './actions';

class Todos extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos();
  }

  handleInput = event => {
    let todoForm = event.target.value;
    this.props.actions.updateTodoField(todoForm);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createTodo({text: this.props.todoForm, isComplete: false});
  };

  toggleTodo = event => {
    const {todos} = this.props;

    const id = parseInt(event.target.value);
    const todo = todos.find(todo => todo.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete};

    this.props.actions.toggleTodo(toggled);
  };

  handleDelete = event => {
    event.stopPropagation();
    const id = parseInt(event.target.value);
    this.props.actions.deleteTodo(id)
  };

  handleFilter = event => {
    const filter = event.target.value;
    this.props.actions.updateTodosFilter(filter)
  };

  render() {
    const {todos, loading, todoForm, error} = this.props;

    if (loading)
      return <AppLoader/>;

    return (
      <Fragment>
        <p>{error}</p>
        <TodoForm
          todoForm={todoForm}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todos={todos}
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

const visibleTodos = (todos, filter = FILTERS.SHOW_ALL) => {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return todos;
    case FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isComplete);
    case FILTERS.SHOW_COMPLETED:
      return todos.filter(todo => todo.isComplete);
    default:
      return todos;
  }
};

const mapStateToProps = ({todos}) => ({
    todoForm: todos.todoForm,
    todos: visibleTodos(todos.todos, todos.filter),
    loading: todos.loading,
    error: todos.error
  }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(todoActions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

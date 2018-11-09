import React, { Component, Fragment } from 'react';
import { object, string, array, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import AppLoader from '../../shared/loader';
import * as todoSelectors from '../../selectors';
import * as todoActions from './actions';

class Todos extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos();
  }

  handleSubmit = (values) => {
    const { actions } = this.props;
    actions.createTodo({
      text: values.todo,
      isComplete: false,
    });
  };

  toggleTodo = (event) => {
    const { todos } = this.props;

    const id = parseInt(event.target.value, 10);
    const todo = todos.find((toggledTodo) => toggledTodo.id === id);
    const toggled = { ...todo, isComplete: !todo.isComplete };

    this.props.actions.toggleTodo(toggled);
  };

  handleDelete = (event) => {
    event.stopPropagation();
    const id = parseInt(event.target.value, 10);
    this.props.actions.deleteTodo(id);
  };

  handleFilter = (event) => {
    const filter = event.target.value;
    this.props.actions.updateTodosFilter(filter);
  };

  render() {
    const { todos, loading, error } = this.props;

    if (loading) return <AppLoader />;

    return (
      <Fragment>
        <p>{error}</p>
        <TodoForm onSubmit={this.handleSubmit} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} handleDelete={this.handleDelete} />
        <TodoFilter handleFilter={this.handleFilter} />
      </Fragment>
    );
  }
}

Todos.propTypes = {
  actions: object.isRequired,
  todos: array.isRequired,
  loading: bool.isRequired,
  error: string,
};
const mapStateToProps = ({ todos }) => ({
  todos: todoSelectors.selectFilteredTodos(todos),
  loading: todoSelectors.selectTodosLoadingState(todos),
  error: todoSelectors.selectTodosErrors(todos),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

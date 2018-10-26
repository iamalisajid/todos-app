export default {
  login: {
    user: [],
    loading: false,
    error: null,
    currentUser: {
      email: '',
      password: ''
    }
  },
  todo: {
    todos: [],
    currentTodo: '',
    loading: true,
    errors: null,
    filter: null
  }
};

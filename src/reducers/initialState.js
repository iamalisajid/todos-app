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
  todos: {
    todos: [],
    currentTodo: '',
    loading: true,
    errors: null,
    filter: null
  },
  contacts: {
    contacts: [],
    currentContact: {
      id: '',
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      avatar: './avatars/avatar-image.png'
    },
    loading: true
  }
}

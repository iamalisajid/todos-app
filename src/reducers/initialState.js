export default {
  login: {
    user: null,
    loading: false,
    error: null,
    loginForm: {
      email: '',
      password: ''
    }
  },
  todos: {
    todos: [],
    todoForm: '',
    loading: true,
    errors: null,
    filter: null
  },
  contacts: {
    contacts: [],
    contactForm: {
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

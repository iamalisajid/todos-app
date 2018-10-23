import axios from 'axios';
import changeCaseObject from 'change-case-object';
import {API_ROUTES} from './endpoints';

export const fetchTodos = () => {
  return axios.get(API_ROUTES.TODOS)
    .then(res => {
      return changeCaseObject.camelCase(res.data);
    })
};

export const createTodo = (todo) => {
  return axios.post(API_ROUTES.TODOS, changeCaseObject.snakeCase(todo))
    .then((response) => {
      return changeCaseObject.camelCase(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateTodo = (todo) => {
  return axios.put(`${API_ROUTES.TODOS}/${todo.id}`, (changeCaseObject.snakeCase(todo)))
    .then((response) => {
      return changeCaseObject.camelCase(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_ROUTES.TODOS}/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const fetchContacts = () => {
  return axios.get(API_ROUTES.CONTACTS)
    .then(res => {
      return changeCaseObject.camelCase(res.data);
    })
};

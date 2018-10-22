import changeCaseObject from 'change-case-object';
import {API_ROUTES} from './endpoints';

class ApiCaller {
  static fetchTodos = () => {
    return fetch(API_ROUTES.TODOS)
      .then(response => response.json());
  };

  static createTodo = (todo) => {
    return fetch(API_ROUTES.TODOS, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changeCaseObject.snakeCase(todo))
    })
      .then(res => res.json())
  };

  static updateTodo = (todo) => {
    return fetch(`${API_ROUTES.TODOS}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changeCaseObject.snakeCase(todo))
    });
  };

  static deleteTodo = (id) => {
    return fetch(`${API_ROUTES.TODOS}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  };
  static fetchContacts = () => {
    return fetch(API_ROUTES.CONTACTS)
      .then(response => response.json());
  };

  static createContact = (contact) => {
    return fetch(API_ROUTES.CONTACTS, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changeCaseObject.snakeCase(contact))
    })
      .then(res => res.json())
  };

  static ypdateContact = (contact) => {
    return fetch(`${API_ROUTES.CONTACTS}/${contact.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changeCaseObject.snakeCase(contact))
    });
  };

  static deleteContact = (id) => {
    return fetch(`${API_ROUTES.CONTACTS}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  };
}

export default ApiCaller;

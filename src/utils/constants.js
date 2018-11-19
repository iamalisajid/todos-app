export const BTN_ACTIONS = {
  DELETE: 'Delete',
  ADD: 'Add',
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
  CONTACT: 'Contact',
  TODO: 'Todo',
  SIGN_IN: 'Sign In',
  UPDATE: 'Update',
  LOGIN: 'LogIn',
  LOGOUT: 'LogOut',
};

const ROUTE_PREFIX = '/';

export const APP_ROUTES = {
  BASE: ROUTE_PREFIX,
  LOGIN: `${ROUTE_PREFIX}login/`,
  DASHBOARD: `${ROUTE_PREFIX}dashboard/`,
  CONTACTS: `${ROUTE_PREFIX}contacts/`,
  TODOS: `${ROUTE_PREFIX}todos/`,
};

export const REQUEST_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const VIEWS = {
  LOGIN: 'LOGIN',
  DASHBOARD: 'DASHBOARD',
  TODOS: 'TODOS',
  CONTACTS: 'CONTACTS',
};

export const AVATAR = './../avatars/avatar-image.png';

export const FORM = {
  LOGIN_USER: 'LOGIN_USER',
  TODO_ADD: 'TODO_ADD',
  CONTACT_ADD: 'CONTACT_ADD',
};

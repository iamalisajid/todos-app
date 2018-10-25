export const BTN_ACTIONS = {
  DELETE: 'Delete',
  ADD: 'Add',
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
  UPDATE: 'Update'
};

const ROUTE_PREFIX = '/';

export const APP_ROUTES = {
  BASE: ROUTE_PREFIX,
  DASHBOARD: `${ROUTE_PREFIX}dashboard/`,
  CONTACTS: `${ROUTE_PREFIX}contacts/`,
  TODOS: `${ROUTE_PREFIX}todos/`
};

export const REQUEST_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

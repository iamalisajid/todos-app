export const BTN_ACTIONS = {
  DELETE: 'Delete',
  ADD: 'Add'
};

const ROUTE_PREFIX = '/';

export const APP_ROUTES = {
  BASE: ROUTE_PREFIX,
  DASHBOARD: `${ROUTE_PREFIX}dashboard/`,
  CONTACTS: `${ROUTE_PREFIX}contacts/`,
  TODOS: `${ROUTE_PREFIX}todos/`
};

export const HEADER = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const BASE_URL = 'http://localhost';
const PORT = ':3000';

export const API_ROUTES = {
  LOGIN: `${BASE_URL}${PORT}/users`,
  DASHBOARD: `${BASE_URL}${PORT}/dashboard`,
  TODOS: `${BASE_URL}${PORT}/todos`,
  CONTACTS: `${BASE_URL}${PORT}/contacts`
};

export const TODOS_LIST = [
    {
        "id": 1,
        "text": "abc",
        "isComplete": true
    },
    {
        "id": 2,
        "text": "def",
        "isComplete": true
    }
];

export const CONTACTS_LIST = [
  {
    "id": 1,
    "firstName": "Ali",
    "lastName": "Sajid",
    "mobile": "+92 322 7901620",
    "email": "imalisajid@gmail.com",
    "avatar": "./avatars/avatar-image.png"
  },
  {
    "id": 2,
    "firstName": "Sajid",
    "lastName": "Ali",
    "mobile": "+92 346 1234567",
    "email": "ali.sajid@aribsoft.com",
    "avatar": "./avatars/avatar-image.png"
  }
];

export const BTN_ACTIONS = {
    DELETE: 'Delete'
}

const ROUTE_PREFIX = "/";

export const APP_ROUTES = {
  BASE: ROUTE_PREFIX,
  DASHBOARD: `${ROUTE_PREFIX}dashboard/`,
  CONTACTS: `${ROUTE_PREFIX}contacts/`,
  TODOS: `${ROUTE_PREFIX}todos/`
};

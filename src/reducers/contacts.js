import * as types from '../viewes/Contacts/actionTypes';
import initialState from './initialState';

const contacts = (state = initialState.contacts, action) => {
  switch (action.type) {
    case types.CONTACT_INPUT_UPDATE:
      return {
        ...state,
        currentContact: Object.assign({}, action.payload)

      };
    case  types.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload
      };
    case  types.CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.concat(action.payload),
        currentContact: initialState.contacts.currentContact
      };
    case  types.UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact),
        currentContact: initialState.contacts.currentContact
      };
    case  types.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case types.FETCH_CONTACTS_REQUEST:
    case types.CREATE_CONTACT_REQUEST:
    case types.DELETE_CONTACT_REQUEST:
    case types.UPDATE_CONTACT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_CONTACTS_FAILURE:
    case types.CREATE_CONTACT_FAILURE:
    case types.DELETE_CONTACT_FAILURE:
    case types.UPDATE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default contacts;

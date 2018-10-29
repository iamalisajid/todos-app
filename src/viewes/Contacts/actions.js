import apiCaller from '../../utils/apiCaller';
import {API_ROUTES} from '../../utils/endpoints';
import {REQUEST_TYPE} from '../../utils/constants';
import * as types from './actionTypes';

export const updateContactField = contactForm => ({type: types.CONTACT_INPUT_UPDATE, payload: contactForm});

const fetchContactRequest = () => ({type: types.FETCH_CONTACT_REQUEST});
const fetchContactSuccess = contact => ({type: types.FETCH_CONTACT_SUCCESS, payload: contact});
const fetchContactFailure = msg => ({type: types.FETCH_CONTACT_FAILURE, payload: msg});

const createContactRequest = () => ({type: types.CREATE_CONTACT_REQUEST});
const createContactSuccess = contact => ({type: types.CREATE_CONTACT_SUCCESS, payload: contact});
const createContactFailure = msg => ({type: types.CREATE_CONTACT_FAILURE, payload: msg});

const updateContactRequest = () => ({type: types.UPDATE_CONTACT_REQUEST});
const updateContactSuccess = contact => ({type: types.UPDATE_CONTACT_SUCCESS, payload: contact});
const updateContactFailure = msg => ({type: types.UPDATE_CONTACT_FAILURE, payload: msg});

const deleteContactRequest = () => ({type: types.DELETE_CONTACT_REQUEST});
const deleteContactSuccess = id => ({type: types.DELETE_CONTACT_SUCCESS, payload: id});
const deleteContactFailure = msg => ({type: types.DELETE_CONTACT_FAILURE, payload: msg});

export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(fetchContactRequest());
    apiCaller(API_ROUTES.CONTACTS, REQUEST_TYPE.GET)
      .then(response => dispatch(fetchContactSuccess(response.data)))
      .catch(error => dispatch(fetchContactFailure(error)))
  }
};

export const createContact = contact => {
  return (dispatch) => {
    dispatch(createContactRequest());
    apiCaller(API_ROUTES.CONTACTS, REQUEST_TYPE.POST, contact)
      .then(response => dispatch(createContactSuccess(response.data)))
      .catch(error => dispatch(createContactFailure(error)))
  }
};

export const updateContact = contact => {
  return (dispatch) => {
    dispatch(updateContactRequest());
    apiCaller(`${API_ROUTES.CONTACTS}/${contact.id}`, REQUEST_TYPE.PUT, contact)
      .then(response => dispatch(updateContactSuccess(response.data)))
      .catch(error => dispatch(updateContactFailure(error)))
  }
};

export const deleteContact = id => {
  return (dispatch) => {
    dispatch(deleteContactRequest());
    apiCaller(`${API_ROUTES.CONTACTS}/${id}`, REQUEST_TYPE.DELETE)
      .then(dispatch(deleteContactSuccess(id)))
      .catch(error => dispatch(deleteContactFailure(error)))
  }
};

import axios from 'axios';
import changeCaseObject from 'change-case-object';

let api = null;

function getInitializedApi() {
  if (api) return api;
  return (api = axios.create({
    responseType: 'json',
    withCredentials: true
  }));
}

export function get(url) {
  return getInitializedApi()
    .get(url)
    .then(response => changeCaseObject.camelCase(response.data));
}

export function post(url, data) {
  return getInitializedApi()
    .post(url, changeCaseObject.snakeCase(data))
    .then(response =>
      changeCaseObject.camelCase(response.data));
}

export function put(url, data) {
  return getInitializedApi()
    .put(url, changeCaseObject.snakeCase(data))
    .then(response =>
      changeCaseObject.camelCase(response.data));
}

export function _delete(url) {
  return getInitializedApi().delete(url);
}

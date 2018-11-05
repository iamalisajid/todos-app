import axios from 'axios';
import queryString from 'qs';
import changeCaseObject from 'change-case-object';

const apiCaller = (url, method, data = {}, params = {}) =>
  axios({
    method,
    url,
    data,
    params,

    headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
    responseType: 'json',

    paramsSerializer: (queryParams) => queryString.stringify(queryParams, { arrayFormat: 'brackets' }),
    transformRequest: (request) => JSON.stringify(changeCaseObject.snakeCase(request)),
    transformResponse: (response) => changeCaseObject.camelCase(response),
  });

export default apiCaller;

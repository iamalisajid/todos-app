import axios from 'axios';
import queryString from 'qs';
import changeCaseObject from 'change-case-object';

const apiCaller = (url, method, data = {}, params = {}) =>
  axios({
    method,
    url,
    data,
    params,

    headers: {'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json'},
    responseType: 'json',

    paramsSerializer: params => queryString.stringify(params, {arrayFormat: 'brackets'}),
    transformRequest: (data, headers) => JSON.stringify(changeCaseObject.snakeCase(data)),
    transformResponse: data => changeCaseObject.camelCase(data)
  });

export default apiCaller;

import axios from 'axios';
import changeCaseObject from 'change-case-object';

const ApiCaller = (url, method, data = {}) =>
  axios({
    method,
    url,
    data,

    headers: {'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json'},
    responseType: 'json',

    transformRequest: [(data, headers) => {
      return JSON.stringify(changeCaseObject.snakeCase(data));
    }],

    transformResponse: [(data) => {
      return changeCaseObject.camelCase(data);
    }]
  });

export default ApiCaller;

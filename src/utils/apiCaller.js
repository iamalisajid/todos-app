import axios from 'axios';
import changeCaseObject from 'change-case-object';

const ApiCaller = (URL, REQUEST_TYPE, DATA = {}) =>
  axios({
    method: REQUEST_TYPE,
    url: URL,
    data: DATA,

    headers: {'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json'},
    responseType: 'json',

    transformRequest: [function (data, headers) {
      return JSON.stringify(changeCaseObject.snakeCase(data));
    }],

    transformResponse: [function (data) {
      return changeCaseObject.camelCase(data);
    }]
  });

export default ApiCaller;

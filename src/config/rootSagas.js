import { all } from 'redux-saga/effects';
import { todoSagas } from '../viewes/Todos/actions';
import { contactSagas } from '../viewes/Contacts/actions';
import { authSagas } from '../viewes/Login/actions';

export default function* rootSaga() {
  yield all([...authSagas, ...todoSagas, ...contactSagas]);
}

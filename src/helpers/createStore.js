import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../client/modules';

export default function () {
  const store = createStore(reducer, {}, applyMiddleware(thunk));
  return store;
}

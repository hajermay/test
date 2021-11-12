import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import users from './reducers/users';
const rootReducer = combineReducers({
  users,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;

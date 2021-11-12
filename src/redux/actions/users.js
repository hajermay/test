import axios from 'axios';
import {
  GET_USERS_LIST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_FAILED,
  DELETE_USER,
} from '../type';

export const getUsersList = () => {
  let headers = {
    'app-id': '618e370ab590fe14282d9e3b',
  };
  return dispatch => {
    dispatch({type: GET_USERS_LIST});
    axios
      .get('https://dummyapi.io/data/v1/user?limit=20', {headers})
      .then(async response => {
        dispatch({
          type: GET_USERS_LIST_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch(error => {
        dispatch({type: GET_USERS_LIST_FAILED, payload: error});
      });
  };
};
export const deleteUser = id => {
  return dispatch => {
    dispatch({type: DELETE_USER, payload: id});
  };
};

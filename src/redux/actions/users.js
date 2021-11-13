import axios from 'axios';
import {
  GET_USERS_LIST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_FAILED,
  DELETE_USER,
} from '../type';

export const getUsersList = () => {
  return dispatch => {
    dispatch({type: GET_USERS_LIST});
    axios
      .get('https://reqres.in/api/users')
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

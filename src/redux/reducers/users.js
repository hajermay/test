import {
  GET_USERS_LIST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_FAILED,
  DELETE_USER,
} from '../type';

const INITIAL_STATE = {
  loading: false,
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_LIST_FAILED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(dta => dta.id !== action.payload),
      };
    default:
      return state;
  }
};

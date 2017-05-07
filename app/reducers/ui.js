import actionTypes from '../constants/actionTypes';

// TODO: display an error message on TODOS_FETCH_ERROR?
const initialState = {
  todosLoading: false
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOS_FETCH_BEGIN':
      return Object.assign({}, state, {
        todosLoading: true
      });
    case 'TODOS_FETCH_ERROR':
      return Object.assign({}, state, {
        todosLoading: false
      });
    case 'TODOS_FETCH_SUCCESS':
      return Object.assign({}, state, {
        todosLoading: false
      });
    default:
      return state;
  }
};

export default todosReducer;

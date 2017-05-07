import actionTypes from '../constants/actionTypes';

// TODO: display an error message on FETCH_TASKS_ERROR?
const initialState = {
  tasksLoading: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_BEGIN':
      return Object.assign({}, state, {
        tasksLoading: true
      });
    case 'FETCH_TASKS_ERROR':
      return Object.assign({}, state, {
        tasksLoading: false
      });
    case 'FETCH_TASKS_SUCCESS':
      return Object.assign({}, state, {
        tasksLoading: false
      });
    default:
      return state;
  }
};

export default uiReducer;

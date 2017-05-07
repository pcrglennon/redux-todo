import actionTypes from '../constants/actionTypes';

function newTask(id, description) {
  return {
    id: id,
    description: description
  };
}

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_TASK_SUCCESS:
      return [
        ...state,
        newTask(action.id, action.description)
      ];
    case actionTypes.FETCH_TASKS_SUCCESS:
      return [
        ...state,
        ...action.tasks
      ];
    default:
      return state;
  }
};

export default tasksReducer;

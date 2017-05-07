import actionTypes from '../constants/actionTypes';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.TODOS_FETCH_SUCCESS:
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};

export default todosReducer;

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};

export default todosReducer;

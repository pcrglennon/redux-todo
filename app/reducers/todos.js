const initialState = {
  todos: [
    {
      id: 1,
      text: 'Task 1'
    },
    {
      id: 2,
      text: 'Task 2'
    },
    {
      id: 3,
      text: 'Task 3'
    }
  ]
};

const todoApp = (state = initialState, action) => {
  return state;
};

export default todoApp;

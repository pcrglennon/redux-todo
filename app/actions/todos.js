import fetch from 'isomorphic-fetch';

export function initialize() {
  return ((dispatch) => {
    return fetch('https://todo-api-1.herokuapp.com/tasks.json')
      .then(
        (response) => response.json(),
        (error) => console.log('An error occured.', error)
      )
      .then((json) => {
        dispatch({
          type: 'INITIALIZE',
          todos: json
        });
      });
  });
}
